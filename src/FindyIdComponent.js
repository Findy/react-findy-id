import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
// Load localized firebaseui npm package.
// See README.md localization section.
import * as firebaseui from './npm__ja.js'
import 'firebaseui/dist/firebaseui.css'

export class FindyIdComponent extends Component {
  constructor(props) {
    super(props)
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
        }
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
