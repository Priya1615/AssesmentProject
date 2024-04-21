# Running React Native Project on Android and iOS

## Prerequisites
- Node.js and npm/yarn installed on your system
- Android Studio (for Android development)
- Xcode (for iOS development) - Only available on macOS
- React Native enviromemt set up

## Setting Up
1. Clone the React Native project repository from Git:
git clone <repository_url>
cd <project_directory>

2. Install dependencies:
- for npm: npm install
- for yarn: yarn


## Running on Android
1. Make sure you have an Android device connected to your computer or an Android emulator set up.

2. Start the Metro bundler:
npx react-native start

3. In a new terminal window, run the app on Android:
npx react-native run-android


## Running on iOS
1. Make sure you have a macOS system with Xcode installed.
2. In a new terminal window:cd ios && pod install
3. Start the Metro bundler:
   npx react-native start
4. In a new terminal window, run the app on iOS:
   npx react-native run-ios

## Notes
- For iOS development, you can also use the iOS Simulator provided by Xcode if you don't have a physical iOS device.
- Make sure to follow any additional setup steps specific to your project, such as configuring API keys, permissions, etc.