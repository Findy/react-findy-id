import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
// Load localized firebaseui npm package.
// See README.md localization section.
import * as firebaseui from '../lib/npm__ja.js'
import 'firebaseui/dist/firebaseui.css'

export class FindyIdComponent extends Component {
  componentDidMount() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', this.firebaseUiConfig())
  }

  firebaseUiConfig() {
    const props = this.props

    return {
      callbacks: this.firebaseUiCallbacks(props.afterSignInSuccessCallback),
      signInSuccessUrl: props.signInSuccessUrl,
      signInOptions: [
        {
          provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
          scopes: ['user:email']
        },
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      tosUrl: props.tosUrl,
      privacyPolicyUrl: props.privacyPolicyUrl
    }
  }

  firebaseUiCallbacks(afterSignInSuccessCallback) {
    return {
      signInSuccessWithAuthResult: authResult => {
        afterSignInSuccessCallback(authResult)
      }
    }
  }

  render() {
    return <div id="firebaseui-auth-container" />
  }
}
