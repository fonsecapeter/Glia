const React = require('react');
const ReactQuill = require('react-quill');
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
      showDescription: false
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
                className="dummy-ask-button modal-ask-button button"
                value="Ask Question" />
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
          <ReactQuill
            className={ dClass }
            theme="snow"
            value={ this.state.description }
            onChange={ this._onDescriptionChange } />
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
