const React = require('react');
const ReactDOM = require('react-dom');
const ReactQuill = require('react-quill');
const Dropzone = require('react-dropzone');
const AnswerActions = require('../../actions/answer_actions');
const hashHistory = require('react-router').hashHistory;
const cloudinaryConfig = require('react-cloudinary').cloudinaryConfig;
const CloudinaryImage = require('react-cloudinary').CloudinaryImage;
cloudinaryConfig({ cloud_name: 'dxhqr7u1z' });

const AnswerCreateForm = React.createClass({
  getInitialState () {
    if (this.props.method === 'create') {
      return ({
        content: '',
        file: '',
        disabledState: false
      });
    } else if (this.props.method === 'edit') {
      return ({
        content: this.props.content,
        file: ''
      });
    }
  },

  componentDidMount () {
    ReactDOM.findDOMNode(this).scrollIntoView();
  },

  _onContentChange (content) {
    this.setState({ content: content });
  },

  _onSubmit (event) {
    event.preventDefault();

    const answer = {
      content: this.state.content,
      questionId: this.props.questionId
    };

    if (this.props.method === 'create') {
      AnswerActions.createAnswer(answer);
    } else if (this.props.method === 'edit') {
      answer.id = this.props.answerId;
      AnswerActions.updateAnswer(answer);
    }

    this.setState({ content: '' });
    this.props.closeSelf();
  },

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
        const cont = self.state.content;
        self.setState({
          content: image + cont,
          disabledState: false
        });
      },
      error: function (xhr) {
        console.log(xhr);
      }
    });
  },

  render () {
    let buttonText;
    if (this.props.method === 'create') {
      buttonText = 'answer';
    } else if (this.props.method === 'edit') {
      buttonText = 'edit';
    }

    let disabledClass = '';
    if (this.state.disabledState) {
      disabledClass = ' disabled';
    }
    // <img src={ this.state.file.preview } />

    return (
      <div>
        <form onSubmit={ this._onSubmit }>

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
              value={ this.state.content }
              onChange={ this._onContentChange }
              disabled={ this.state.disabledState } />
          </Dropzone>

          <br /><br />

          <input
            type="submit"
            className={ "button" + disabledClass }
            value={ buttonText }
            disabled={ this.state.disabledState } />
        </form>
      </div>
    );
  }
});

module.exports = AnswerCreateForm;
