import * as React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import 'firebase/auth'
// Load localized firebaseui npm package.
// See README.md localization section.
import * as firebaseui from '../lib/npm__ja.js'
import 'firebaseui/dist/firebaseui.css'

export class FindyIdComponent extends React.Component {
  componentDidMount() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', this.firebaseUiConfig())
  }

  firebaseUiConfig() {
    const {
      afterSignInSuccessCallback,
      privacyPolicyUrl,
      signInSuccessUrl,
      tosUrl
    } = this.props

    return {
      callbacks: this.firebaseUiCallbacks(afterSignInSuccessCallback),
      signInSuccessUrl,
      signInOptions: [
        {
          provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
          scopes: ['user:email']
        },
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      privacyPolicyUrl,
      tosUrl
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

FindyIdComponent.propTypes = {
  afterSignInSuccessCallback: PropTypes.func.isRequired,
  privacyPolicyUrl: PropTypes.string,
  signInSuccessUrl: PropTypes.string,
  tosUrl: PropTypes.string
}
