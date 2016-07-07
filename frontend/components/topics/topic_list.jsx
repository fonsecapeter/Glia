const React = require('react');
const TopicStore = require('../../stores/topic_store');
const TopicActions = require('../../actions/topic_actions');

const TopicIndex = React.createClass({
  getInitialState () {
    return ({
      topics: []
    });
  },

  componentDidMount () {
    this.topicListener = TopicStore.addListener(this._onChange);
    TopicActions.fetchAllTopics();
  },

  componentWillUnmount () {
    this.topicListener.remove();
  },

  render () {
    return (
      <div className="topic-list">
        <div className="topic-list-content">
          <h4>Topics</h4>
          <ul>
            <li>topic</li>
            <li>topic</li>
            <li>topic</li>
            <li>topic</li>
            <li>topic</li>
            <li>topic</li>
            <li>topic</li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = TopicIndex;
