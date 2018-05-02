# NawARROW
## Project Management with a React Native App for Android and iOS 

![navarrow](https://raw.githubusercontent.com/privet56/nawarrow/master/nawarrow.1.gif)

### start:
	1. start emulator
	2. react-native run-android
	3. (app is started in the emulator)
	4. CTRL-M -> Enable Hot Reloading
	5. CTRL-M -> Enable JS Remote Debug -> http://localhost:8081/debugger-ui/
	6. $ react-native log-android -> shows console.log's

### "Warning: License for package Android SDK Platform 23 not accepted"
	do: ./sdkmanager --licenses

TODO: use native firebase wrapper!
TODO: use auth for firebase("https://nawarrow-a5d18.firebaseio.com")
TODO: custom fonts!

### libs/hints
	react-native-micro-animated-button	//ATTENTION: needs react-native link
	npm install --save react-navigation
	extremely slow navigation -> disable remote js debug!
	mobx setup:
		npm install babel-preset-react-native-stage-0 --save
		"presets": ["react-native", "react-native-stage-0/decorator-support"]			//in .babelrc
		npm start reset-cache
