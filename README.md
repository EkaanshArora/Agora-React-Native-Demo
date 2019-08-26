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