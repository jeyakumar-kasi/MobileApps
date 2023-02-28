# ReactEcommerceApp

# ---------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

1. float: right not working
2. Auto value change is not happening while changing the value in input email field.

$ npm -v => 8.1.2
$ npx react-native --version => 3.2.1
$ npx yarn --version => 1.22.17

> npm -i -g npx

$ npx create-react-app <app-name> # Cretae a react app
$ cd <app-name>
$ npm start

> npm i react-router-dom
> npm i react-redux
> npm i redux
> npm i antd # Ant Design
> npm i @ant-design/icons
> npm i firebase
> npm i react-toastify # Notification alert box
> [deprecated] npm i redux --(OR)-- npm i @reduxjs/toolkit
> npm i react-redux redux-devtools-extension

$ npm -g install yarn
$ npm -g install react-native-cli

$ react-native init <projectName>
$ cd <projectName>

$ npx yarn install
--(OR)--
$ npm install --only=dev --save #--legacy-peer-deps
$ npm audit fix --force

---

# Reset metro bundler cache :

npx react-native start --reset-cache

# Remove Android assets cache :

cd android && ./gradlew clean build
npm cache clean --force

# Relaunch metro server :

npx react-native run-android

---

# Create/Re-generate "android" & "ios" folder.

$ npm i react-native-eject
$ npm i @react-native-community/cli
$ npx react-native eject

---

$ npx react-native start --reset-cache
$ npx react-native run-android

$ cd ./android && ./gradlew clean build && cd ..
$ npm cache clean --force
$ npx react-native link

$ npm add react-native-webview #--legacy-peer-deps

---

$ react-native upgrade

## Export Signed APK

$ cd c:/Program Files/Java/jdk-15.0.1/bin
$ ./keytool -genkey -v -keystore ~/my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

--(Optional)--

- Once the key is generated, use it to generate the installable build:
  $ react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

- Place the "my-release-key.keystore" file under the "android/app" directory in your project folder.
- Edit "~/.gradle/gradle.properties"and add the following ines,
  MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
  MYAPP_RELEASE_KEY_ALIAS=my-key-alias
  MYAPP_RELEASE_STORE_PASSWORD=<key-file-store-password>
  MYAPP_RELEASE_KEY_PASSWORD=<key-file-password>

- Edit "app/build.gradle" and ensure the following are there (the sections with signingConfigs signingConfig may need to be added)
  ...
  android {
  ...
  defaultConfig { ... }
  signingConfigs {
  release {
  if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
  storeFile file(MYAPP_RELEASE_STORE_FILE)
  storePassword MYAPP_RELEASE_STORE_PASSWORD
  keyAlias MYAPP_RELEASE_KEY_ALIAS
  keyPassword MYAPP_RELEASE_KEY_PASSWORD
  }
  }
  }
  buildTypes {
  release {
  ...
  signingConfig signingConfigs.release
  }
  }
  }
  ...

$ cd android && ./gradlew assembleRelease --stacktrace

- Signed apk find under: "android/app/build/outputs/apk/app-release.apk", or "android/app/build/outputs/apk/release/app-release.apk"

* https://reactnative.dev/docs/signed-apk-android
