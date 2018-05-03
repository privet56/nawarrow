# NawARROW
## Project Management with a React Native App for Android and iOS 

![navarrow](https://raw.githubusercontent.com/privet56/nawarrow/master/nawarrow.1.gif)

### Live Update iOS <> Android:
Live update of the Project Status on iOS/iPhone after changing the data in the Android Phone:
![navarrowiosandroid](https://raw.githubusercontent.com/privet56/nawarrow/master/nawarrow.ios.vs.android.small.gif)

### Start:
	1. start emulator
	2. react-native run-android
		react-native run-ios
	3. (app is started in the emulator)
	4. CTRL-M -> Enable Hot Reloading
	5. CTRL-M -> Enable JS Remote Debug -> http://localhost:8081/debugger-ui/
	6. $ react-native log-android -> shows console.log's

### Gotchas:
	"Warning: License for package Android SDK Platform 23 not accepted"
		do: ./sdkmanager --licenses
	"xcrun is unable to find utility instruments"
		do: Xcode -> Preferences -> Locations -> set "Command Line Tools" version

### TODO:
	TODO: react-native-web
	TODO: use auth for fbdb
	TODO: iOS: beautify styles for iPhone
	TODO: Splash on iOS

### libs/hints
	react-native-micro-animated-button	//ATTENTION: needs react-native link
	npm install --save react-navigation
	extremely slow navigation -> disable remote js debug!
	mobx setup:
		npm install mobx & mobx-react --save
		npm install babel-preset-react-native-stage-0 --save
		"presets": ["react-native", "react-native-stage-0/decorator-support"]			//in .babelrc
		npm start reset-cache
	Splash: react-native-splash-screen
