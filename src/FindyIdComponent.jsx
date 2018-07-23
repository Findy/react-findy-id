import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css';

export default class FindyIdComponent extends Component {

  constructor(props) {
    super(props);

    var config = {
      apiKey: "AIzaSyDOTe8SVN_5WGtuKdXQoQy5slhAq3kEIbs",
      authDomain: "findy-id.firebaseapp.com",
      databaseURL: "https://findy-id.firebaseio.com",
      projectId: "findy-id",
      storageBucket: "findy-id.appspot.com",
      messagingSenderId: "943881521886"
    };
    firebase.initializeApp(config);

    // FirebaseUI config.
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          var user = authResult.user;
          var credential = authResult.credential;
          var isNewUser = authResult.additionalUserInfo.isNewUser;
          var providerId = authResult.additionalUserInfo.providerId;
          var operationType = authResult.operationType;
          console.log(user, credential, isNewUser, providerId, operationType);
          // Do something with the returned AuthResult.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return false;
        }
      },
      signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      tosUrl: 'https://findy-code.io/',
      privacyPolicyUrl: 'https://findy-code.io/'
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  render() {
    return (
      <div id="firebaseui-auth-container"></div>
    );
  }
}
