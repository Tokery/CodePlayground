import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import firebaseui from 'firebaseui';


export default class AuthComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var authUIConfig = {
            signInSuccessUrl: '/',
            signInOptions: [
              // Leave the lines as is for the providers you want to offer your users.
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.FacebookAuthProvider.PROVIDER_ID,
              firebase.auth.TwitterAuthProvider.PROVIDER_ID,
              firebase.auth.GithubAuthProvider.PROVIDER_ID,
              firebase.auth.EmailAuthProvider.PROVIDER_ID,
              firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '/'
          };
          var authUI = new firebaseui.auth.AuthUI(firebase.auth());
          authUI.start('#auth-component', authUIConfig);
    }

    render() {
        return (
            <div id="auth-component">
            </div>
        )
    }
}