import React, { Component } from 'react';
// https://github.com/firebase/firebase-js-sdk/issues/100#issuecomment-402780308
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css';
import { firebaseConfig } from './config';

export default class FindyIdComponent extends Component {

  constructor(props) {
    super(props);
    firebase.initializeApp(firebaseConfig);

    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', this.firebaseUiConfig());
  }

  firebaseUiConfig() {
    return ({
      callbacks: this.firebaseUiCallbacks(this.props.afterSignInSuccessCallback),
      signInSuccessUrl: this.props.signInSuccessUrl,
      signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      tosUrl: this.props.tosUrl,
      privacyPolicyUrl: this.props.privacyPolicyUrl
    });
  }

  firebaseUiCallbacks(afterSignInSuccessCallback) {
    return ({
      signInSuccessWithAuthResult: function(authResult) {
        afterSignInSuccessCallback(authResult);
        return true;
      }
    });
  }

  render() {
    return <div id="firebaseui-auth-container"/>;
  }
}
