'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var firebaseConfig = exports.firebaseConfig = process.env.NODE_ENV === 'production' ? {
  apiKey: 'AIzaSyAnk1DTphNq9YkkJRLFXPlxp7wQmwWWFQ8',
  authDomain: 'findy-keik-production.firebaseapp.com',
  databaseURL: 'https://findy-keik-production.firebaseio.com',
  projectId: 'findy-keik-production',
  storageBucket: 'findy-keik-production.appspot.com',
  messagingSenderId: '129140103002'
} : {
  apiKey: 'AIzaSyCNfck98q8ywUb2cxIvTFAhVXPx29O4IZs',
  authDomain: 'findy-keik-development.firebaseapp.com',
  databaseURL: 'https://findy-keik-development.firebaseio.com',
  projectId: 'findy-keik-development',
  storageBucket: 'findy-keik-development.appspot.com',
  messagingSenderId: '590181853229'
};