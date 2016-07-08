const React = require('react');
const TopicActions = require('../../actions/topic_actions');

const TopicForm = React.createClass({
  getInitialState () {
    return ({
      name: ''
    });
  },

  _onTopicChange (event) {
    this.setState({ name: event.currentTarget.value });
  },

  _onSubmit (event) {
    event.preventDefault();

    TopicActions.createTopic({ topic: { name: this.state.name } });
    this.setState({ name: '' });
  },

  render () {
    return (
      <form onSubmit={ this._onSubmit }>
        <input
          className="topic-input"
          type="text"
          onChange={ this._onTopicChange }
          value={ this.state.name } />
        <input type="submit" className="button topic-submit" value="add" />
      </form>
    );
  }
});

module.exports = TopicForm;
