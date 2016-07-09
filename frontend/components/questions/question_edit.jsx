const React = require('react');
const hashHistory = require('react-router').hashHistory;
const ReactQuill = require('react-quill');
const Dropzone = require('react-dropzone');
const QuestionStore = require('../../stores/question_store.js');
const QuestionActions = require('../../actions/question_actions.js');

const TopicStore = require('../../stores/topic_store');
const TopicActions = require('../../actions/topic_actions');


const QuestionEdit = React.createClass({
  getInitialState () {
    const candidateQuestion = QuestionStore.find(this.props.params.questionId);
    const question = candidateQuestion ? candidateQuestion : {topicIds: []};

    return ({
      title: question.title,
      desription: question.desription,
      file: '',
      disabledState: false,
      topicIds: question.topicIds,
      availableTopics: []
    });
  },

  _onChange () {
    const candidateQuestion = QuestionStore.find(this.props.params.questionId);
    const question = candidateQuestion ? candidateQuestion : {};
    this.setState({
      title: question.title,
      description: question.description,
      topicIds: question.topicIds
    });
  },

  _onAvailableTopicChange () {
    this.setState({ availableTopics: TopicStore.all() });
  },

  componentDidMount () {
    this.questionListener = QuestionStore.addListener(this._onChange);
    QuestionActions.fetchQuestion(parseInt(this.props.params.questionId));

    this.topicListener = TopicStore.addListener(this._onAvailableTopicChange);
    TopicActions.fetchAllTopics();
  },

  componentWillUnmount () {
    this.questionListener.remove();
    this.topicListener.remove();
  },

  _onSubmit (event) {
    event.preventDefault();
    QuestionActions.updateQuestion({
      title: this.state.title,
      description: this.state.description,
      id: this.props.params.questionId,
      topic_ids: this.state.topicIds
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
  _onCheckChange (event) {
    let topicIds = this.state.topicIds;
    const newTopicId = parseInt(event.currentTarget.value);
    const idx = topicIds.indexOf(newTopicId);

    if (event.currentTarget.checked) {
      topicIds.push(newTopicId);
      this.setState({ topicIds: topicIds });
    } else {
      topicIds.splice(idx, 1);
      this.setState({ topicIds: topicIds });
    }
  },

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

              {
                this.state.availableTopics.map( topic => {
                  return (
                    <label className={ "checkbox-label" }>
                      <input type="checkbox"
                        value={ topic.id }
                        checked={ this.state.topicIds.indexOf(parseInt(topic.id)) !== -1 }
                        onChange={ this._onCheckChange } />
                      { topic.name }
                    </label>
                  );
                })
              }

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
