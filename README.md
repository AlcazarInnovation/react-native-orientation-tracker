# react-native-orientation-tracker
The React Native Orientation Tracker is a package that allows you to get information on wether a device is in landscape or portrait mode without the need of bridging to native.

# How to Use

1. npm install react-native-orientation-tracker -s
2. go to your main index file (index.ios.js/index.android.js/app.js) and import the package:
```
import orientationTracker from 'react-native-orientation-tracker';
```
3. Attach orientationTracker.layoutChange on to the onLayout prop to a top level view in the index file
     ```
     render() {
            return(
                <View onLayout={orientationTracker.layoutChange}>
                  <Text>Some component here</Text>
                </View>
            )
        }
     ```
4. Get the current orientation anywhere in the app by accessing 
```
orientationTracker.orientation
```


# The API

layoutChange (function)
- This function get called by the onLayout function provided by the view. When orientation happens, the triggers the onLayout prop which lets the orientation tracker know that an orientation change has occured.

orientation (string)
- This outputs the current devices orientation. It should return "landscape", "portrait", or "square". If the device width is greater than the height then it is landscape. If the device width is shorter than the height then it is portrait. If the device heigh and width are the same then it returns square.

  
  
