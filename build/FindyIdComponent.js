'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('firebase/app');

var _app2 = _interopRequireDefault(_app);

require('firebase/auth');

var _firebaseui = require('firebaseui');

var firebaseui = _interopRequireWildcard(_firebaseui);

require('firebaseui/dist/firebaseui.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FindyIdComponent = function (_Component) {
  _inherits(FindyIdComponent, _Component);

  function FindyIdComponent(props) {
    _classCallCheck(this, FindyIdComponent);

    var _this = _possibleConstructorReturn(this, (FindyIdComponent.__proto__ || Object.getPrototypeOf(FindyIdComponent)).call(this, props));

    var config = {
      apiKey: "AIzaSyDOTe8SVN_5WGtuKdXQoQy5slhAq3kEIbs",
      authDomain: "findy-id.firebaseapp.com",
      databaseURL: "https://findy-id.firebaseio.com",
      projectId: "findy-id",
      storageBucket: "findy-id.appspot.com",
      messagingSenderId: "943881521886"
    };
    _app2.default.initializeApp(config);

    // FirebaseUI config.
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function signInSuccessWithAuthResult(authResult, redirectUrl) {
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
      signInOptions: [_app2.default.auth.GithubAuthProvider.PROVIDER_ID],
      tosUrl: 'https://findy-code.io/',
      privacyPolicyUrl: 'https://findy-code.io/'
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(_app2.default.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
    return _this;
  }

  _createClass(FindyIdComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'firebaseui-auth-container' });
    }
  }]);

  return FindyIdComponent;
}(_react.Component);

exports.default = FindyIdComponent;