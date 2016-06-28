"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const SignInForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      username: '',
      password: ''
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
      this.context.router.push('/');
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
  },

  fieldErrors (field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMessage, idx) => {
      return <li key={ idx }>{ errorMessage }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType () {
    // sign_up or sign_in from url
    // return this.props.location.pathname.slice(1);
    return this.props.signType;
  },

  render () {
    let navLink;
    if (this.formType() === 'sign_in') {
      navLink = <Link to='/sign_up'>sign up instead</Link>;
    } else {
      navLink = <Link to='/sign_in'>Sign in instead</Link>;
    }

    return(
      <div className="sign-in-form-container">
        <form onSubmit={this._onSubmit} className='sign-in-form-box'>
          Welcome to Glia
          <br />
          Please { this.formType() } or { navLink }

          <label> Username:
            { this.fieldErrors('username') }
            <input type='text'
              value={ this.state.username }
              onChange={ this._update('username') }
              className='sign-in-input' />
          </label>
          <label> Password:
            <input type='text'
            value={ this.state.password }
            onChange={ this._update('password') }
            className='sign-in-input' />
          </label>

          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
});

module.exports = SignInForm;
