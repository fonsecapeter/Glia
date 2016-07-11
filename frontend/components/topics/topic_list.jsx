const React = require('react');
const Link = require('react-router').Link;
const TopicStore = require('../../stores/topic_store');
const TopicActions = require('../../actions/topic_actions');
const QuestionActions = require('../../actions/question_actions');
const TopicForm = require('./topic_form');

const TopicIndex = React.createClass({
  getInitialState () {
    return ({
      topics: [],
      creatingTopic: false
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

  toggleCreating () {
    if (this.state.creatingTopic) {
      this.setState({
        creatingTopic: false
      });
    } else {
      this.setState({
        creatingTopic: true
      });
    }
  },

  topicForm () {
    if (this.state.creatingTopic) {
      return (
        <TopicForm />
      );
    } else {
      return ('');
    }
  },

  render () {
    let className = "topic-list-content";
    let buttonText;
    let preview;

    if (this.state.creatingTopic) {
      buttonText = '▲';
      preview = this.state.topics;
      className += " unfixed";
    } else {
      buttonText = '▼';
      preview = this.state.topics.slice(0, 8);
    }

    return (
      <div className="topic-list">
        <div className={ className }>
          <h4>Topics</h4>
          <ul>
            {
              preview.map( topic => {
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
          <button onClick={ this.toggleCreating }>{ buttonText }</button>
          { this.topicForm() }
        </div>
      </div>
    );
  }
});

module.exports = TopicIndex;
