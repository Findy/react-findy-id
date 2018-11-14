[![CircleCI](https://circleci.com/gh/Findy/react-findy-id/tree/master.svg?style=svg)](https://circleci.com/gh/Findy/react-findy-id/tree/master)

# React Findy ID

# How to use

## Install package

### yarn

`yarn add @findy/react-findy-id`

### npm

`npm install @findy/react-findy-id --save`

## Put Sign-in button

Put Sign-in button on your app.

```javascript
<FindyIdComponent
    afterSignInSuccessCallback={afterSignInSuccessCallback}
    signInSuccessUrl="http://localhost:3001"
    tosUrl="https://findy-code.io/terms"
    privacyPolicyUrl="https://findy-code.io/policy" />
```

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

- `git checkout -b release/vX.X.X`
- Bump package version in `package.json`.
- `npm run build`
- `npm publish --access=public`
- `git commit -am 'Bump version to vX.X.X'`
- `git tag -a vX.X.X -m 'vX.X.X release'`
- `git push origin vX.X.X`
- `git push origin release/vX.X.X`
- `git checkout master`
- `git merge --no-ff release/vX.X.X`
- `git push origin master`
- `git push origin :release/vX.X.X`
- `git branch -d release/vX.X.X`
