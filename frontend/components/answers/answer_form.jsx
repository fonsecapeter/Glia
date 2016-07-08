const React = require('react');
const ReactDOM = require('react-dom');
const ReactQuill = require('react-quill');
const AnswerActions = require('../../actions/answer_actions');
const hashHistory = require('react-router').hashHistory;

const AnswerCreateForm = React.createClass({
  getInitialState () {
    if (this.props.method === 'create') {
      return ({
        content: '',
      });
    } else if (this.props.method === 'edit') {
      return ({
        content: this.props.content
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

  render () {
    let buttonText;
    if (this.props.method === 'create') {
      buttonText = 'answer';
    } else if (this.props.method === 'edit') {
      buttonText = 'edit';
    }

    return (
      <div>
        <form onSubmit={ this._onSubmit }>
          <ReactQuill
            className="quill"
            theme="snow"
            value={ this.state.content }
            onChange={ this._onContentChange } />

          <br /><br />
          <input type="submit" className="button" value={ buttonText } />
        </form>
      </div>
    );
  }
});

module.exports = AnswerCreateForm;
