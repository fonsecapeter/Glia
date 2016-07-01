const React = require('react');
const Link = require('react-router').Link;
const QuestionActions = require('../../actions/question_actions');
const hashHistory = require('react-router').hashHistory;

const SessionStore = require('../../stores/session_store');

const Boron = require('boron');

const QuestionAskForm = React.createClass({
  getInitialState () {
    return ({
      title: 'what\'s on your mind?',
      description: 'description',
      showDescription: false
    });
  },

  _onTitleChange (event) {
    this.setState({
      title: event.currentTarget.value
    });
  },

  _onDescriptionChange (event) {
    this.setState({
      description: event.currentTarget.value
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
    hashHistory.push('/');
    // this.setState(this.getInitialState());
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

  descriptionFocus () {
    if (this.state.description === 'description') {
      this.setState({description: ''});
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
    let dClass = 'modal-ask-description';
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
        <hgroup className="logo">
          <Link to='/' className='header-link'><h1>Glia</h1></Link>
        </hgroup>
        <div className="modal-ask-container">
          <input
            className={ tClass }
            onClick={ this.titleFocus }
            onFocus={ this.titleFocus }
            onChange={ this._onTitleChange }
            value={ this.state.title } />
          <button
            className="dummy-ask-button modal-ask-button"
            onClick={ this._onSubmit }>Ask Question</button>

          <br />
          <textarea
            className={ dClass }
            onClick={ this.descriptionFocus }
            onFocus={ this.descriptionFocus }
            onChange={ this._onDescriptionChange }
            value={ this.state.description }></textarea>
        </div>
        <div>
          <button
            onClick={ this.toggleDescription }
            className="blue-text">{ dToggleValue }</button>
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

  render () {
    return (
      <div className="question-ask-form">
        { this.getModal('ask') }
        <hgroup className="dummy-ask-container">
          <input
            className="dummy-ask-bar"
            onClick={ this.toggleDialog('ask') }
            value={ this.state.question } />
          <button
            className="dummy-ask-button"
            onClick={ this.toggleDialog('ask') }>Ask Question</button>
        </hgroup>
      </div>
    );
  }
});

module.exports = QuestionAskForm;
