# Scarlet.Dog

## About

React Native boilerplate (or sample app), with basic redux, native-base and
login integration.

## Setup

Follow the steps from the react-native
[getting started documentation page](https://facebook.github.io/react-native/docs/getting-started.html)

Clone the repository:

```
git clone https://github.com/jraleman/scarlet.dog.git scarletdog/
cd scarletdog/
```

Install all the dependencies needed:

```
npm install
```

### iOS

To run the iOS version:

```
react-native run-ios
```

You can also do it manually:

```
open ios/ScarletDog.xcodeproj/
npm start &
```

and click the build/run icon. :)

<!-- **[Having issues? Click here for help!](resources/assets/md/debug-ios.md)** -->

### Android

To run the Android version:

```
react-native run-android
```

You can also run it manually:

```
cd android && ./gradlew installDebug
npm start &
```

<!-- **[Having issues? Click here for help!](resources/assets/md/debug-android.md)** -->

## Project Structure

The idea of having a good project structure is to have a cross platform project,
to maximize code reuse, keep the configurations out of the code, and minimize
the component state.

This is the main idea:

```
App/
├── App.js
├── Bridge/
│   └── QuickbloxBridgeView/
│       ├── index.js
│       └── QuickbloxBridgeView.js
├── Components/
│   ├── AnimatedButton/
│   │   ├── AnimatedButton.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── EmailInput/
│   │   ├── EmailInput.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── NetworkIndicator/
│   │   ├── index.js
│   │   ├── NetworkIndicator.js
│   │   └── styles.js
│   ├── PasswordInput/
│   │   ├── index.js
│   │   ├── PasswordInput.js
│   │   └── styles.js
│   └── ScarletHeader/
│       ├── index.js
│       ├── ScarletHeader.js
│       └── styles.js
├── Config/
│   ├── AppConfig.js
│   └── index.js
├── Containers/
│   ├── ColorsContainer/
│   │   ├── ColorsContainer.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── DrawerNavigationContainer/
│   │   ├── DrawerNavigationContainer.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── NativeBaseContainers/
│   │   ├── BadgesContainer.js
|   |  ...
│   │   └── styles.js
│   ├── RootContainer/
│   │   ├── index.js
│   │   ├── RootContainer.js
│   │   └── styles.js
│   └── WallpaperContainer/
│       ├── index.js
│       ├── styles.js
│       └── WallpaperContainer.js
├── I18n/
│   ├── I18n.js
│   ├── index.js
│   └── languages/
│       ├── de.json
│       ├── en.json
│       └── es.json
├── index.js
├── Navigation/
│   ├── AppNavigator/
│   │   ├── AppNavigator.js
│   │   ├── index.js
│   │   └── styles.js
│   └── DrawerNavigation/
│       ├── DrawerNavigation.js
│       └── index.js
├── Redux/
│   ├── index.js
│   ├── Middleware/
│   │   └── fetchMiddleware.js
│   └── Modules/
│       ├── Bookmarks/
│       │   ├── actions.js
│       │   └── reducer.js
│       ├── Categories/
│       │   ├── actions.js
│       │   └── reducer.js
│       └── Colors/
│           ├── actions.js
│           └── reducer.js
├── Screens/
│   ├── CategoriesScreen/
│   │   ├── CategoriesScreen.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── ColorsScreen/
│   │   ├── ColorsScreen.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── LoginScreen/
│   │   ├── index.js
│   │   ├── LoginScreen.js
│   │   └── styles.js
│   ├── NativeBaseScreen/
│   │   ├── index.js
│   │   ├── NativeBaseScreen.js
│   │   └── styles.js
│   ├── OnboardingScreen/
│   │   ├── index.js
│   │   ├── OnboardingScreen.js
│   │   └── styles.js
│   └── TestScreen/
│       ├── index.js
│       ├── styles.js
│       └── TestScreen.js
└── Themes/
    ├── Images/
    │   ├── index.js
    │   └── Source/
    │       ├── login-background.jpg
    |      ...
    │       └── slide-two.png
    ├── index.js
    ├── NativeBaseComponents/
    │   ├── Badge.js
    │  ...
    │   └── View.js
    └── variables.js
```

### Project Structure Walkthrough

This is just a basic walkthrough to the project structure, walking through the
directories in more detail.

```
...
```

### Redux

![redux-graph](resources/images/redux.gif)
Source: [Bumbu's simpe-redux](https://bumbu.github.io/simple-redux/)

## Style Guide

### Code

This project follows the [semistandard](https://github.com/Flet/semistandard),
based from [standard](https://github.com/standard/standard. This is because I
love the C programming language, and semicolons are good for your health. :)

#### Lint

After running `npm install`, you can run the following scripts (depending on
your platform), to check if the code follows the `semistandard` coding
style guide.

| Mac OS X           | Linux                    | Description                 |
| :----------------- | :----------------------- | :-------------------------- |
| `npm run lint`     | `npm run lint`           | Checks `src/` code style    |
| `npm run lint-log` | `npm run lint-log-linux` | Saves and open the log file |

If you have any problem running the lint from the project, try installing the
following packages globally, like this:

```
npm install --global snazzy
npm install --global semistandard
```

And then just run the lint from your end. Checkout `package.json` scripts! ;)

### Colors

#### Palette

![#777777](http://via.placeholder.com/150/777777/fffffff?text=777777)
![#888888](http://via.placeholder.com/150/888888/fffffff?text=888888)
![#999999](http://via.placeholder.com/150/999999/fffffff?text=999999)
![#AAAAAA](http://via.placeholder.com/150/AAAAAA/fffffff?text=aaaaaa)
![#BBBBBB](http://via.placeholder.com/150/BBBBBB/0000000?text=bbbbbb)

#### Dark / Light

![#121212](http://via.placeholder.com/150/121212/ffffff?text=121212)
![#f9f9f9](http://via.placeholder.com/150/f9f9f9/000000?text=f9f9f9)

#### Success / Error / Warning / Info

![#b8e986](http://via.placeholder.com/150/b8e986/000000?text=b8e986)
![#d9534f](http://via.placeholder.com/150/d9534f/ffffff?text=d9534f)
![#f3bd71](http://via.placeholder.com/150/f3bd71/000000?text=f3bd71)
![#92bced](http://via.placeholder.com/150/92bced/000000?text=92bced)

### Look & Feel

- [NativeBase](https://nativebase.io/)

#### Font

- ...list

#### Icons

- ...icons

## Goals

- [x] Rename App `ScarletRocks` -> `ScarletDog`
- [x] Redux
  - [x] Implementation via redux-thunk
  - [x] Redux Axios Middleware
  - [x] Redux Persist
- [x] Navigation
  - [x] StackNavigator
    - [x] Replace `Navigator` -> `StackNavigator`
  - [ ] DrawerNavigator
    - [x] Navigation flow
    - [ ] Finish container (menu)
  - [ ] PathNavigator
- [ ] Notifications
  - [x] Show network connectivity status
    - [ ] Use a [toast component](https://github.com/remobile/react-native-toast)
  - [ ] Include [push notifications too](https://github.com/zo0r/react-native-push-notification)
- [ ] Screens
  - [x] Onboarding screen
  - [ ] Integrate the login system
    - [ ] Firebase demo app (test login)
    - [ ] Forgot password
    - [ ] Sign up integration
    - [ ] Data validation
  - [ ] [Profile screen](https://github.com/nattatorn-dev/react-native-user-profile)
  - [ ] Settings screen
  - [ ] Messages screen
  - [ ] Calendar screen
  - [ ] Error screen
- [ ] Languages
  - [x] Add i18n support
  - [ ] Integrate to multiple screen
  - [x] English
  - [ ] Spanish
  - [ ] German
- [ ] [Realm DB](https://www.youtube.com/watch?v=2sI64vaHF98)
- [x] Themes
  - [x] NativeBase components screen
  - [x] Integrate NB's `variables.js`
- [ ] Housekeeping
  - [ ] Styling!
  - [ ] Refactor code
  - [ ] Ongoing app support

## Improvements

- [x] Move OnboardingScreen state.firstLaunch, outside the render function
- [ ] Change logo width depending on landscape/portrait orientation
- [ ] Fetch from API via http (not secure) in iOS

## Attribution

- [Onboarding Icons made by Freepik](http://www.freepik.com)

## Resources

- [React Native Cookbook - by Stan Bernshadskiy, Crysfel Villa](http://shop.oreilly.com/product/0636920090144.do)
- [Network Indicator](https://medium.com/dailyjs/offline-notice-in-react-native-28a8d01e8cd0)
- [Login Screen](https://github.com/dwicao/react-native-login-screen)
- [Wallpaper used for Login Screen](https://hdwallsource.com/img/2014/5/abstract-wallpaper-26633-27347-hd-wallpapers.jpg)
- [Color API Tutorial](https://www.youtube.com/watch?v=d2Mp66FFBgU)
