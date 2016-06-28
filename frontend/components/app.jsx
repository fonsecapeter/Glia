"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');

const Boron = require('boron');
const SignInForm = require('./sign_in_modal');

const SessionActions = require('../actions/session_actions');

const styles = {
  btn: {
    margin: '1em auto',
    padding: '1em 2em',
    outline: 'none',
    fontSize: 16,
    fontWeight: '600',
    background: '#C94E50',
    color: '#FFFFFF',
    border: 'none'
  },
  container: {
    padding: '2em',
    textAlign: 'center'
  },
  title: {
    margin: 0,
    color: '#C94E50',
    fontWeight: 400
  }
};

const App = React.createClass({
  // getInitialState (){
  //   return({
  //     modalIsOpen: false
  //   })
  // },

  componentDidMount () {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _onLogOut () {
    SessionActions.logOut();
  },

  // ---------------------------------------------------------------------------

  // toggleDialog (ref) {
  //   console.log(this.refs);
  //   return ( () => {
  //     this.refs[ref].toggle();
  //   });
  // },
  //
  // getContent (modalName) {
  //   return (
  //     <div>
  //       <h2>Boron Modal</h2>
  //       <button onClick={ this.toggleDialog(modalName) }>close</button>
  //     </div>
  //   );
  // },
  //
  // getTriggerAndModal (modalName) {
  //   let Modal = Boron[modalName];
  //
  //   return (
  //     <div>
  //       <button onCLick={ this.toggleDialog(modalName) }>{ modalName }</button>
  //       <Modal ref={ modalName }>{ this.getContent(modalName) }</Modal>
  //     </div>
  //   );
  // },

  toggleDialog: function(ref){

      return function(){
          this.refs[ref].toggle();
      }.bind(this);
  },

  getContent: function(modalName){
      return <div style={styles.container}>
      {/*<h2 style={styles.title}><strong>Boron</strong> is amazing</h2>*/}
          <SignInForm signType={ modalName } />
          <button style={styles.btn} onClick={this.toggleDialog(modalName)}>Close</button>
      </div>;
  },

  getTriggerAndModal: function(modalName){
      var Modal = Boron['FadeModal'];

      return <div>
      <button style={styles.btn} onClick={this.toggleDialog(modalName)}>{modalName}</button>

      <Modal ref={modalName}>{this.getContent(modalName)}</Modal>
      </div>;
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
          <Link to="/sign_in" activeClassName="current">sign in</Link>
          &nbsp;or&nbsp;
          <Link to="/sign_up" activeClassName="current">sign up</Link>
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

        {
          ['sign_in', 'sign_out'].map( name => {
            return this.getTriggerAndModal(name);
          })
        }

        {/*{['OutlineModal', 'ScaleModal', 'FadeModal', 'FlyModal', 'DropModal', 'WaveModal'].map(function(name){
          return self.getTiggerAndModal(name);
        })}*/}

      </div>
    );
  }
});

module.exports = App;
