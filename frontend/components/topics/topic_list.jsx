const React = require('react');
const Link = require('react-router').Link;
const TopicStore = require('../../stores/topic_store');
const TopicActions = require('../../actions/topic_actions');
const QuestionActions = require('../../actions/question_actions');

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

  _onClick (event) {
    const topicId = event.currentTarget.topicId;
    QuestionActions.fetchQuestionsByTopicId(topicId);
  },

  render () {
    return (
      <div className="topic-list">
        <div className="topic-list-content">
          <h4>Topics</h4>
          <ul>
            {
              this.state.topics.map( topic => {
                return (
                  <li
                    key={ topic.id }>
                    <Link
                      onClick={ this._onClick }
                      topicId={ topic.id }
                      to={ `topics/${ topic.id }` }>
                      { topic.name }
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = TopicIndex;
