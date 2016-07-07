const React = require('react');
const TopicStore = require('../../stores/topic_store');
const TopicActions = require('../../actions/topic_actions');

const TopicIndex = React.createClass({
  getInitialState () {
    return ({
      topics: []
    });
  },

  _onChange () {
    this.setState({
      topics: TopicStore.all()
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
            {
              this.state.topics.map( topic => {
                return <li key={ topic.id }>{ topic.name }</li>;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = TopicIndex;
