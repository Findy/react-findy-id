[![CircleCI](https://circleci.com/gh/Findy/react-findy-id/tree/master.svg?style=svg)](https://circleci.com/gh/Findy/react-findy-id/tree/master)

# React Findy ID

> [!CAUTION]
> This project is currently unmaintained.

# How to use

## Prerequisites

If you do not set "__FINDY_FIREBASE_CONFIG__",`
by default this module connected to "findy-id" project

If you want to connect other project,
you need to set the configuration as "__FINDY_FIREBASE_CONFIG__"

example is [here](https://github.com/Findy/react-findy-id/blob/master/examples/src/index.html)

For more information about Firebase config object, please see below.

https://firebase.google.com/docs/web/setup?hl=en#config-object

## Install package

### yarn

`yarn add @findy/react-findy-id`

### npm

`npm install @findy/react-findy-id --save`

## Put Sign-in button

Import React component

```javascript
import { FindyIdComponent } from '@findy/react-findy-id'
```

and put Sign-in button on your app.

```javascript
<FindyIdComponent
  afterSignInSuccessCallback={afterSignInSuccessCallback}
  signInSuccessUrl="http://localhost:3001"
  tosUrl="https://findy-code.io/terms"
  privacyPolicyUrl="https://findy-code.io/policy"
/>
```

### props

Name|type|Description
----|----|----
afterSignInSuccessCallback|Function|Callback after sign-in, before redirect. The parameter `authResult` is a firebase authentication result object.
signInSuccessUrl|String|Redirect URL after sign-in.
tosUrl|String|Term of Service URL.
privacyPolicyUrl|String|Privacy Policy URL.

# For package developers

## Setup

- `git clone https://github.com/Findy/react-findy-id.git`
- `npm install`
- `cp .env.example .env`
- Edit the `.env` file.

## Run on local example app

- `npm start`
- Open `http://localhost:3001`

## Directory structures

- build
    - Output of build.
- examples
    - Example app which is used by package developer.
- src
    - Main code.

## Publish

- `git checkout master`
- `npm version [major | minor | patch]`
- `git push origin master`
- `git push origin vX.X.X`
- `npm publish --access=public`

### localization

- `git clone https://github.com/firebase/firebaseui-web.git`
- `cd firebaseui-web`
- Replace `でログイン` to `でログイン/登録` in `translations/ja.xtb` file.
- `npm install`
- `npm run build build-npm-ja`
- `cp dist/npm__ja.js <react-findy-id directory>/lib`

Ref. https://github.com/firebase/firebaseui-web/issues/379#issuecomment-417684828
