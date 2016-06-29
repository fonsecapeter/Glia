"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');

const Boron = require('boron');
const SignInForm = require('./sign_in_form');

const SessionActions = require('../actions/session_actions');

const App = React.createClass({
  componentDidMount () {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _onSignOut () {
    SessionActions.signOut();
  },

  // modal ---------------------------------------------------------------------
  toggleDialog: function(ref){
    return () => {
      this.refs[ref].toggle();
    };
  },

  getContent: function(modalName){
    return <div>
      <SignInForm signType={ modalName } />
      <button onClick={ this.toggleDialog(modalName) }>
        Cancel
      </button>
    </div>;
  },

  getTriggerAndModal: function(modalName){
    let Modal = Boron['FadeModal'];

    return (
      <div key={ modalName }>
        <button onClick={ this.toggleDialog(modalName) }>
          {modalName.split("_").join(" ")}
        </button>

        <Modal ref={ modalName } className="modal-container">
          { this.getContent(modalName) }
        </Modal>
      </div>
    );
  },
  // ---------------------------------------------------------------------------

  greeting () {
    if (SessionStore.isUserSignedIn()) {
      return (
        <hgroup className="header-group">
          <h2 className="header-name">
          { SessionStore.currentUser().username }
          </h2>
          <input type="submit"
            className="header-sign-out-button button"
            value="sign out"
            onClick={ this._onSignOut } />
        </hgroup>
      );
    } else if ( !['/sign_in', '/sign_up'].includes(this.props.location.pathname) ) {
      return (
        <nav className="sign-in-up">
          {
            ['sign_in', 'sign_up'].map( name => {
              return this.getTriggerAndModal(name);
            })
          }
        </nav>
      );
    }
  },

  render () {
    const self = this;
    return (
      <div>
        <header>
          <hgroup className="logo">
            <Link to='/' className='header-link'><h1>Glia</h1></Link>
          </hgroup>
          <hgroup className="dummy-ask">
            <input className="dummy-ask-bar" />
            <button className="dummy-ask-button">Ask Question</button>
          </hgroup>
          { this.greeting() }
        </header>
        { this.props.children }
      </div>
    );
  }
});

module.exports = App;
