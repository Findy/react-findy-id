import React from 'react';
import { render} from 'react-dom';
import FindyIdComponent from '../../src';

const afterSignInSuccessCallback = (authResult) => {
  authResult.user.getIdToken().then(function(idToken) {
    const message = 'Hello! ' + authResult.additionalUserInfo.username + '\n' +
      'Your ID Token is bellow.\n\n' + idToken;

    alert(message);
  });

}

const App = () => (
  <FindyIdComponent
    afterSignInSuccessCallback={afterSignInSuccessCallback}
    signInSuccessUrl="http://localhost:3001"
    tosUrl="https://findy-code.io/terms"
    privacyPolicyUrl="https://findy-code.io/policy" />
);

render(<App />, document.getElementById('root'));
