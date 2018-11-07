'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindyIdComponent = undefined;

var _FirebaseAuthRepository = require('./FirebaseAuthRepository');

Object.keys(_FirebaseAuthRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FirebaseAuthRepository[key];
    }
  });
});

var _FindyIdComponent = require('./FindyIdComponent');

Object.defineProperty(exports, 'FindyIdComponent', {
  enumerable: true,
  get: function get() {
    return _FindyIdComponent.FindyIdComponent;
  }
});

var _app = require('firebase/app');

var _app2 = _interopRequireDefault(_app);

require('firebase/auth');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize when loaded
_app2.default.initializeApp(_config.firebaseConfig);