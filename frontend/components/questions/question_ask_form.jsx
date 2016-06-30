const React = require('react');
const QuestionActions = require('../../actions/question_actions');
const hashHistory = require('react-router').hashHistory;

const Boron = require('boron');

const QuestionAskForm = React.createClass({
  getInitialState () {
    return ({
      title: '',
      description: ''
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
    QuestionActions.createQuestion(this.state);
    hashHistory.push('/');
  },

  // modal ---------------------------------------------------------------------
  getContent (modalName) {
    return <div className="modal-container">
      <div className="modal-ask-container">
        <input
          className="modal-ask-bar"
          onChange={ this._onTitleChange }
          value={ this.state.title } />
        <button
          className="dummy-ask-button"
          onClick={ this._onSubmit }>Ask Question</button>

          <br />
          <textarea
            onChange={ this._onDescriptionChange }
            value={ this.state.description }></textarea>
      </div>
    </div>;
  },

  toggleDialog: function(ref){
    return () => {
      this.refs[ref].toggle();
    };
  },

  getModal (modalName) {
    let Modal = Boron['FadeModal'];
    let modalStyle = {
      top: 24,
      width: '100%'
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
        <input
          className="dummy-ask-bar"
          onClick={ this.toggleDialog('ask') }
          value={ this.state.question } />
        <button
          className="dummy-ask-button"
          onClick={ this.toggleDialog('ask') }>Ask Question</button>
      </div>
    );
  }
});

module.exports = QuestionAskForm;
