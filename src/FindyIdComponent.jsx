import React, { Component } from 'react';
// https://github.com/firebase/firebase-js-sdk/issues/100#issuecomment-402780308
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css';

export default class FindyIdComponent extends Component {

  constructor(props) {
    super(props);

    this.firebaseUiCallbacks = this.firebaseUiCallbacks.bind(this);

    this.firebaseConfig = this.firebaseConfig.bind(this);
    firebase.initializeApp(this.firebaseConfig());

    this.firebaseUiConfig = this.firebaseUiConfig.bind(this);
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', this.firebaseUiConfig());
  }

  firebaseConfig() {
    return ({
      apiKey: "AIzaSyDOTe8SVN_5WGtuKdXQoQy5slhAq3kEIbs",
      authDomain: "findy-id.firebaseapp.com",
      databaseURL: "https://findy-id.firebaseio.com",
      projectId: "findy-id",
      storageBucket: "findy-id.appspot.com",
      messagingSenderId: "943881521886"
    });
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
    return (
      <div id="firebaseui-auth-container"></div>
    );
  }
}
