'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOut = exports.getToken = exports.isSignedIn = undefined;

var _app = require('firebase/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getUser = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              // user would be set asynchronously
              // ref: https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed_in_user
              _app2.default.auth().onAuthStateChanged(function (user) {
                return resolve(user);
              });
            });

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getUser() {
    return _ref.apply(this, arguments);
  };
}();

/**
 * return whether user signged in or not
 */
var isSignedIn = exports.isSignedIn = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getUser();

          case 2:
            _context2.t0 = _context2.sent;
            return _context2.abrupt('return', _context2.t0 != null);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function isSignedIn() {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * return JWT token
 */
var getToken = exports.getToken = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getUser();

          case 2:
            user = _context3.sent;
            _context3.t0 = user;

            if (!_context3.t0) {
              _context3.next = 8;
              break;
            }

            _context3.next = 7;
            return user.getIdToken();

          case 7:
            _context3.t0 = _context3.sent;

          case 8:
            return _context3.abrupt('return', _context3.t0);

          case 9:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getToken() {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * sign out
 */
var signOut = exports.signOut = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _app2.default.auth().signOut();

          case 2:
            return _context4.abrupt('return', _context4.sent);

          case 3:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function signOut() {
    return _ref4.apply(this, arguments);
  };
}();