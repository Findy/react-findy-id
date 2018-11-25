import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { FindyIdComponent } from '../../src'

const afterSignInSuccessCallback = authResult => {
  authResult.user.getIdToken().then(function(idToken) {
    const message =
      'Hello! ' +
      authResult.additionalUserInfo.username +
      '\n\n' +
      'Your access token on GitHub is below.\n' +
      authResult.credential.accessToken +
      '\n\n' +
      'Your ID Token on Firebase is below.\n' +
      idToken

    alert(message)
  })
}

const App = () => (
  <FindyIdComponent
    afterSignInSuccessCallback={afterSignInSuccessCallback}
    signInSuccessUrl="http://localhost:3001"
    tosUrl="https://findy-code.io/terms"
    privacyPolicyUrl="https://findy-code.io/policy"
  />
)

render(<App />, document.getElementById('root'))
