import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { FindyIdComponent } from '../../src'

// via Email
//  authResult: {
//    additionalUserInfo: {
//      isNewUser: false,
//      providerId: "password"
//    },
//    credential: null,
//    operationType: "signIn",
//    user: {
//      displayName: "Input Display Name",
//      email: "input+email@example.com",
//      emailVerified: true,
//      isAnonymous: false,
//      metadata: {
//        creationTime: "Wed, 12 Dec 2018 05:46:09 GMT",
//        lastSignInTime: "Wed, 09 Jan 2019 01:58:40 GMT"
//      },
//      phoneNumber: null,
//      photoURL: null,
//      refreshToken: "XXXXXXXX",
//      uid: "XXXXXXX"
//    }
//  }
//
// via GitHub
//  authResult: {
//    additionalUserInfo: {
//      isNewUser: false,
//      profile: {
//        bio: "xxx",
//        company: "XXXX",
//        id: "githubuid",
//        location: "Tokyo",
//        name: "GitHub Name"
//      },
//      providerId: "github.com",
//      username: "deraru"
//    },
//    credential: {
//      accessToken: "xxxxxxxx",
//      providerId: "github.com",
//      signInMethod: "github.com"
//    },
//    operationType: "signIn",
//    user: {
//      displayName: "GitHub Name",
//      email: "github+email@example.com",
//      emailVerified: false,
//      isAnonymous: false,
//      metadata: {
//        creationTime: "Wed, 12 Dec 2018 05:46:09 GMT",
//        lastSignInTime: "Wed, 09 Jan 2019 01:58:40 GMT"
//      },
//      phoneNumber: null,
//      photoURL: "https://avatars3.githubusercontent.com/",
//      refreshToken: "XXXXXXXX",
//      uid: "XXXXXXX"
//    }
//  }
const afterSignInSuccessCallback = authResult => {
  authResult.user.getIdToken().then(function(idToken) {
    const message =
      'Hello! ' +
      authResult.user.displayName +
      '\n\n' +
      'Your ID Token on Firebase is below.\n' +
      idToken

    alert(message)

    if (authResult.additionalUserInfo.providerId === "github.com") {
      const message =
        'Your access token on GitHub is below.\n' +
        authResult.credential.accessToken

      alert(message)
    }
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
