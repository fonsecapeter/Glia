const React = require('react');
const ReactQuill = require('react-quill');
const Dropzone = require('react-dropzone');
const Link = require('react-router').Link;
const QuestionActions = require('../../actions/question_actions');
const hashHistory = require('react-router').hashHistory;

const SessionStore = require('../../stores/session_store');

const Boron = require('boron');

const QuestionAskForm = React.createClass({
  getInitialState () {
    return ({
      title: 'what\'s on your mind?',
      description: '',
      showDescription: false,
      file: '',
      disabledState: false
    });
  },

  _onTitleChange (event) {
    this.setState({
      title: event.currentTarget.value
    });
  },

  _onDescriptionChange (description) {
    this.setState({
      description: description
    });
  },

  _onSubmit (event) {
    event.preventDefault();
    this.toggleDialog('ask');

    let formData = this._beforeSubmit();

    QuestionActions.createQuestion(formData);

    this.setState({
      title: 'what\'s on your mind?',
      description: 'description'
    });
    this.refs.ask.hide();
  },

  _beforeSubmit () {
    let title, description = '';
    if (this.state.title !== 'what\'s on your mind?') {
      title = this.state.title;
    }

    if (this.state.description !== 'description') {
      description = this.state.description;
    }

    return { title: title, description: description };
  },

  titleFocus () {
    if (this.state.title === 'what\'s on your mind?') {
      this.setState({title: ''});
    }
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
  // modal ---------------------------------------------------------------------
  toggleDescription () {
    if (this.state.showDescription) {
      this.setState({ showDescription: false });
    } else {
      this.setState({ showDescription: true });
    }
  },

  getContent (modalName) {
    let tClass = 'modal-ask-bar';
    let dClass = 'modal-ask-description quill';
    if (this.state.title === 'what\'s on your mind?') {
      tClass += ' empty-input';
    }
    if (this.state.description === 'description') {
      dClass += ' empty-input';
    }

    let dToggleValue = '▲';
    if (this.state.showDescription === false) {
      dToggleValue = '▼';
      dClass += ' hidden';
    }

    let disabledClass = '';
    if (this.state.disabledState) {
      disabledClass = ' disabled';
    }

    return (
      <div className="modal-container">
        <div className="modal-container">
          <hgroup className="logo">
            <Link to='/' className='header-link'><h1>Glia</h1></Link>
          </hgroup>
          <div className="modal-ask-container">
            <form onSubmit={ this._onSubmit }>
              <input
                autoFocus={ true }
                className={ tClass }
                onKeyDown={ this.titleFocus }
                onChange={ this._onTitleChange }
                value={ this.state.title } />
              <input
                type="submit"
                className={ "dummy-ask-button modal-ask-button button" + disabledClass}
                value="Ask Question"
                disabled={ this.state.disabledState } />
            </form>

          </div>
          <div>
            <button
              onClick={ this.toggleDescription }
              className="blue-text">{ dToggleValue }</button>
          </div>
        </div>
        <div className="modal-ask-container ask-description-container">
          <br />
          <Dropzone
            ref="dropzone"
            className={ "dropzone" + dClass + disabledClass }
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
              className={ dClass + disabledClass }
              theme="snow"
              value={ this.state.description }
              onChange={ this._onDescriptionChange }
              disabled={ this.state.disabledState } />
            </Dropzone>
        </div>
      </div>
    );
  },

  toggleDialog (ref) {
    return () => {
      this.refs[ref].toggle();
    };
  },

  getModal (modalName) {
    let Modal = Boron['FadeModal'];
    let modalStyle = {
      top: 0,
      width: '99%'
    };

    return (
      <Modal
        ref={ modalName }
        className="modal-container ask-modal"
        modalStyle={ modalStyle }>
        { this.getContent(modalName) }
      </Modal>
    );
  },
  // ---------------------------------------------------------------------------

  doNothing (event) {
    event.preventDefault();
  },

  render () {
    let dabClass = 'dummy-ask-bar';
    let dabVal = this.state.title;
    if (this.state.title === 'what\'s on your mind?') {
      dabClass += ' empty-input';
      dabVal = '';
    }

    return (
      <div className="question-ask-form">
        { this.getModal('ask') }
        <hgroup className="dummy-ask-container">
          <form onSubmit={ this.doNothing }>
            <input
              className={ dabClass }
              onClick={ this.toggleDialog('ask') }
              value={ dabVal } />
            <input
              type="submit"
              className="dummy-ask-button button"
              onClick={ this.toggleDialog('ask') }
              value="Ask Question" />
          </form>
        </hgroup>
      </div>
    );
  }
});

module.exports = QuestionAskForm;
