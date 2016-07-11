const React = require('react');
const Link = require('react-router').Link;
const UserActions = require('../../actions/user_actions');
const UserStore = require('../../stores/user_store');

const cloudinaryConfig = require('react-cloudinary').cloudinaryConfig;
const CloudinaryImage = require('react-cloudinary').CloudinaryImage;
cloudinaryConfig({ cloud_name: 'dxhqr7u1z' });
const userPublicId = 'user_j20bee';

const UserDetail = React.createClass ({
  getInitialState () {
    return ({
      user: { questions: [], answers: [] }
    });
  },

  _onChange () {
    this.setState({
      user: UserStore.user()
    });
  },

  componentDidMount () {
    this.userListener = UserStore.addListener( this._onChange );
    UserActions.fetchUserById( this.props.params.userId );
  },

  componentWillReceiveProps (nextProps) {
    if (this.props.params.userId === nextProps.params.userId) {
      UserActions.fetchUserById( nextProps.params.userId );
    }
  },

  componentWillUnmount () {
    this.userListener.remove();
  },

  avatar () {
    let url = `http://res.cloudinary.com/dxhqr7u1z/image/fetch/${ this.state.user.avatar }`;
    if (this.state.user.avatar === undefined) {
      url = 'http://res.cloudinary.com/dxhqr7u1z/image/upload/v1467319877/user_j20bee.png';
    }

    return (
      <img className="avatar-detail" src={ url } />
    );
  },

  questions () {
    return (
      <ul>
        {
          this.state.user.questions.map (question => {
            return (
              <li key={ question.id }>
                <Link to={ `questions/${ question.id }` } >
                  { question.title }
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  },

  answers () {
    return (
      <ul>
        {
          this.state.user.answers.map (answer => {
            return (
              <li key={ answer.id }>
                <Link to={ `questions/${ answer.questionId }` } >
                  <p>{ answer.questionTitle }</p>
                </Link>
                <div
                  dangerouslySetInnerHTML={{__html:answer.preview }} />
              </li>
            );
          })
        }
      </ul>
    );
  },

  render () {
    return (
      <div className="user-detail" >
        <div className="h-align-center">
          <div>
            { this.avatar() }
          </div>
          <h3>{ this.state.user.username }</h3>
        </div>
        <div>
          <h4>Questions ({ this.state.user.questionCount })</h4>
          { this.questions() }
        </div>
        <div>
          <h4>Answers ({ this.state.user.answerCount })</h4>
          { this.answers() }
        </div>
      </div>
    );
  }
});

module.exports = UserDetail;
