"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');

const Boron = require('boron');
const SignInForm = require('./sign_in_modal');

const SessionActions = require('../actions/session_actions');

const App = React.createClass({
  componentDidMount () {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _onLogOut () {
    SessionActions.logOut();
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
        Close
      </button>
    </div>;
  },

  getTriggerAndModal: function(modalName){
    let Modal = Boron['FadeModal'];

    return (
      <div key={ modalName }>
        <button onClick={ this.toggleDialog(modalName) }>
          {modalName}
        </button>

        <Modal ref={ modalName }>
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
            className="header-sign-out-button"
            value="sign out"
            onClick={ this._onLogOut } />
        </hgroup>
      );
    } else if ( !['/sign_in', '/sign_up'].includes(this.props.location.pathname) ) {
      return (
        <nav className="sign-in-up">
          {
            ['sign_in', 'sign_out'].map( name => {
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
          <Link to='/' className='header-link'><h1>Glia</h1></Link>
          { this.greeting() }
        </header>
        { this.props.children }
      </div>
    );
  }
});

module.exports = App;
