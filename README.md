# Agora React Native Demo

Implementation of Agora's SDK for Video Calling between users in a React Native App.

## Installation & Usage

- Go to https://dashboard.agora.io/en/signup, make an account and login to the dashboard.
- Navigate to the project list tab under projects and create a new project by clicking the green button.
- Copy your App ID and save it somewhere.
- Install NPM and Node.js if you don't have it already.
- Download and extract the zip file from master branch.
- Run `npm install` or use yarn to install the app in the unzipped directory.
- Go to `./components/Home.js` and edit line 13 to put your App ID from the dashboard as `AppID: 'exampleAppID'`
- Execute `react-native link react-native-agora` and `react-native link react-native-vector-icons`.
- Connect your device or start an AVD then run `react-native run-android` to start the app.
- Enter a channel name and hit submit on the device.
- Use the same channel on a different device, and that's it. You should have a video call going.

## Troubleshooting

### debug.keystore

Error:

```
Execution failed for task ':app:validateSigningDebug'.
> Keystore file '/Agora-React-Native-Demo/android/app/debug.keystore' not found for signing config 'debug'.
```

Fix:

```
cd andoid/app
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
enter blank on all answers and confirm with 'y' on last question
```

### iOS project

Error:

```
Project does not build
```

Fix:

```
cd ios
open AgoraDemoReactNative.xcodeproj
```

Then in XCode:

File -> Project settings -> Change build system to 'legacy build system'

