const React = require('react');
const hashHistory = require('react-router').hashHistory;
const ReactQuill = require('react-quill');
const Dropzone = require('react-dropzone');
const QuestionStore = require('../../stores/question_store.js');
const QuestionActions = require('../../actions/question_actions.js');

const QuestionEdit = React.createClass({
  getInitialState () {
    const candidateQuestion = QuestionStore.find(this.props.params.questionId);
    const question = candidateQuestion ? candidateQuestion : {};

    return ({
      title: question.title,
      desription: question.desription,
      file: '',
      disabledState: false
    });
  },

  _onChange () {
    const candidateQuestion = QuestionStore.find(this.props.params.questionId);
    const question = candidateQuestion ? candidateQuestion : {};
    this.setState({
      title: question.title,
      description: question.description
    });
  },

  componentDidMount () {
    this.questionListener = QuestionStore.addListener(this._onChange);
    QuestionActions.fetchQuestion(parseInt(this.props.params.questionId));
  },

  componentWillUnmount () {
    this.questionListener.remove();
  },

  _onSubmit (event) {
    event.preventDefault();
    QuestionActions.updateQuestion({
      title: this.state.title,
      description: this.state.description,
      id: this.props.params.questionId
    });
    hashHistory.push(`questions/${this.props.params.questionId}`);
  },

  _onTitleChange (event) {
    this.setState({ title: event.currentTarget.value });
  },

  _onDescriptionChange (description) {
    this.setState({ description: description });
  },

  linkBack () {
    hashHistory.push(`/questions/${ this.props.params.questionId }`);
  },
  // dropzone ------------------------------------------------------------------
  openDrop (event) {
    event.preventDefault();
    this.refs.dropzone.open();
  },

  onDrop (files) {
    console.log(files[0].preview);
    this.setState({
      file: files[0],
      disabledState: true,
     });

    const url = "https://api.cloudinary.com/v1_1/dxhqr7u1z/image/upload";
    const timestamp = Date.now() / 1000 | 0;
    const apiKey = 627249736112177;

    const self = this;

    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('timestamp', timestamp);
    formData.append('api_key', apiKey);
    formData.append('upload_preset', 'scjzwdf9');

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false,
      success: xhr => {
        console.log(xhr);
        const image = `<img src=\"http://res.cloudinary.com/dxhqr7u1z/image/fetch/${ xhr.url }\" /><br />`;
        const cont = self.state.description;
        self.setState({
          description: image + cont,
          disabledState: false
        });
      },
      error: function (xhr) {
        console.log(xhr);
      }
    });
  },
  // dropzone ------------------------------------------------------------------
  render () {
    let disabledClass = '';
    if (this.state.disabledState) {
      disabledClass = ' disabled';
    }

    return (
      <div className="question-edit">
        <div className="question-col">
          <h3>Edit Question</h3>

          <form onSubmit={ this._onSubmit }>
            <input
              className="question-edit-input"
              type="text"
              onChange={ this._onTitleChange }
              value={ this.state.title } />

            <br /><br />
            <Dropzone
              ref="dropzone"
              className={ "dropzone" + disabledClass }
              onDrop={ this.onDrop }
              multiple={ false }
              accept="image/png,image/jpeg,image/gif"
              disableClick={ true }
              disabled={ this.state.disabledState }>
              <p>
                Drag an image from file or
                <button
                  onClick={ this.openDrop }
                  disabled={ this.state.disabledState }>insert</button>
              </p>
              <ReactQuill
                className={ "quill" + disabledClass }
                theme="snow"
                value={ this.state.description }
                onChange={ this._onDescriptionChange }
                disabled={ this.state.disabledState } />
              </Dropzone>

            <br /><br />
            <input
              type="submit"
              className={ "button" + disabledClass }
              value="save"
              disabled={ this.state.disabledState } />

            <br /><br />
            <button onClick={ this.linkBack }>cancel</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = QuestionEdit;
