"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = require('react-router').hashHistory;

const SignInForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      username: 'username',
      password: 'password',
      pwdType: 'text'
    };
  },

  componentDidMount () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount () {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfSignedIn () {
    if (SessionStore.isUserSignedIn()) {
      // this.context.router.push('/');
      hashHistory.push('/');
    }
  },

  _update (property) {
    return (event) => this.setState({
      [property]: event.target.value
    });
  },

  _onSubmit (event) {
    event.preventDefault();

    const formData = {
      username: this.state.username,
      password: this.state.password
    };

    if (this.props.signType === 'sign_in') {
      SessionActions.signIn(formData);
    } else {
      SessionActions.signUp(formData);
    }

    hashHistory.push('/');
  },

  fieldErrors (field) {
    const errors = ErrorStore.formErrors(this.props.signType);

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMessage, idx) => {
      return <li key={ idx }>{ errorMessage }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType () {
    // sign_up or sign_in from url
    // return this.props.location.pathname.slice(1);
    if (this.props.signType === 'sign_in') {
      return 'Sign in';
    } else {
      return 'Sign up';
    }
  },

  pwdFocus () {
    if (this.state.pwdType === 'text') {
      this.setState({ password: '', pwdType: 'password' });
    }
  },

  unameFocus () {
    if (this.state.username === 'username') {
      this.setState({username: ''});
    }
  },

  render () {
    return(
      <div className="sign-in-form-container">
        <form onSubmit={this._onSubmit} className='sign-in-form-box'>
          <h2 className="modal-title">{ this.formType() }</h2>

          { this.fieldErrors('base') }
          <input type='text'
            value={ this.state.username }
            onFocus={ this.unameFocus }
            onClick={ this.unameFocus }
            onChange={ this._update('username') }
            className='sign-in-input' />

          <br />
          <br />
          <input type={this.state.pwdType}
            value={ this.state.password }
            onFocus={ this.pwdFocus }
            onClick={ this.pwdFocus }
            onChange={ this._update('password') }
            className='sign-in-input' />

          <br />
          <br />
          <input type="submit"
            className="button" value={ this.formType() } />
        </form>
      </div>
    );
  }
});

module.exports = SignInForm;
