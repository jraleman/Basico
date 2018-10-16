#!/usr/bin/env node

/**
 * OnboardingScreen/styles.js
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import { StyleSheet, Dimensions } from 'react-native';
// ~~ Local Dependencies ~~
import { Colors } from '../../Theme';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

/**
 * @type {styles}
 * @const
 */

const styles = StyleSheet.create({
  drawerHeaderWallpaperOverlay: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  drawerContainer: {
    bottom: 0
  },
  drawerContent: {
    bottom: 4,
    flex: 1
  },
  drawerHeaderContainer: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawerHeaderContent: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    marginTop: '2.5%',
    opacity: 0.75,
    position: 'absolute',
    width: '75%'
  },
  drawerHeaderWallpaper: {
    flex: 1,
    height: null,
    width: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeaderAvatar: {
    backgroundColor: Colors.background,
    borderColor: Colors.light,
    borderWidth: 2,
    marginTop: '7.5%'
  },
  drawerHeaderTitle: {
    alignSelf: 'center',
    color: Colors.light,
    fontWeight: '700',
    marginTop: 12,
    textAlign: 'center',
    fontSize: 22
  },
  drawerHeaderSubtitle: {
    alignSelf: 'center',
    color: Colors.light,
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 12
  },
  drawerFooter: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row'
    // alignSelf: 'flex-start',
    // justifyContent: 'flex-end',
    // backgroundColor: '#212121'
  },
  drawerRow: {
    color: Colors.divisor,
    fontSize: 26,
    width: 30
  }
});

export default styles;
