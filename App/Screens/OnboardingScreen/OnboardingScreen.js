#!/usr/bin/env node

/*
** OnboardingScreen
** ---------------------------------------------------------------------------|
** Author: jraleman
** Date: Fri, Aug 31 2018
**
** Thanks for your amazing stackoverflow answer, martinarroyo.
** Source: https://stackoverflow.com/a/40729761
*/

// ~~ React Stuff ~~
import React from 'react';
import {
  AsyncStorage,
  StatusBar,
  View
} from 'react-native';
import {
  Container,
  Icon
} from 'native-base';
import {
  StackActions,
  NavigationActions
} from 'react-navigation';

// ~~ Configuration ~~
import '../../Config';

// ~~ Dependencies ~~
import AppIntroSlider from 'react-native-app-intro-slider';
import I18n from 'react-native-i18n';

// ~~ Local Dependencies ~~
import styles from './styles';
import { Images } from '../../Themes';

// ~~ Constants ~~
const slides = [
  {
    key: 'slideOne',
    title: I18n.t('onboardingScreen.slideOne.title'),
    titleStyle: styles.titleStyle,
    text: I18n.t('onboardingScreen.slideOne.text'),
    textStyle: styles.textStyle,
    image: Images.onboardingSlideOne,
    imageStyle: styles.imageStyle,
    backgroundColor: '#121212'
  },
  {
    key: 'slideTwo',
    title: I18n.t('onboardingScreen.slideTwo.title'),
    titleStyle: styles.titleStyle,
    text: I18n.t('onboardingScreen.slideTwo.text'),
    textStyle: styles.textStyle,
    image: Images.onboardingSlideTwo,
    imageStyle: styles.imageStyle,
    backgroundColor: '#232323'
  },
  {
    key: 'slideThree',
    title: I18n.t('onboardingScreen.slideThree.title'),
    titleStyle: styles.titleStyle,
    text: I18n.t('onboardingScreen.slideThree.text'),
    textStyle: styles.textStyle,
    image: Images.onboardingSlideThree,
    imageStyle: styles.imageStyle,
    backgroundColor: '#343436'
  },
  {
    key: 'slideFour',
    title: I18n.t('onboardingScreen.slideFour.title'),
    titleStyle: styles.titleStyleLast,
    text: I18n.t('onboardingScreen.slideFour.text'),
    textStyle: styles.textStyleLast,
    image: Images.onboardingSlideFour,
    imageStyle: styles.imageStyle,
    backgroundColor: '#f9f9f9'
  }
];

// ~~ React Component ~~
class OnboardingScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstLaunch: null
    };
  }
  componentDidMount () {
    AsyncStorage.getItem('alreadyLaunched')
      .then(value => {
        if (value == null) {
          AsyncStorage.setItem('alreadyLaunched', JSON.stringify(true));
          this.setState({ firstLaunch: true });
        }
        else {
          this.setState({ firstLaunch: false });
        // ...you can also add your error handling code here :)
        }
      });
  }
  componentDidUpdate () {
    if (this.state.firstLaunch === false) {
      this._handleNavigation();
    }
  }
  _renderDoneButton = () => {
    return (
      <View style={ styles.btnCircle }>
        <Icon
          style={ styles.btnIcon }
          name={ 'paw' }
        />
      </View>
    );
  }
  _handleNavigation = () => {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'Login' })]
    });
    this.props.navigation.dispatch(resetAction);
  }
  render () {
    if (this.state.firstLaunch === true) {
      return (
        <React.Fragment>
          <StatusBar
            translucent
            barStyle={ 'light-content' }
            hidden
          />
          <Container style={ styles.container }>
            <AppIntroSlider
              slides={ slides }
              onDone={ this._handleNavigation }
              renderDoneButton={ this._renderDoneButton }
            />
          </Container>
        </React.Fragment>
      );
    }
    else {
      // This is the 'tricky' part:
      // The query to AsyncStorage is not finished, but we have to present
      // something to the user.
      // Null will just render nothing, so you can also put a placeholder of
      // some sort, but effectively the interval between the first mount and
      // AsyncStorage retrieving your data won't be noticeable to the user.
      return (null);
    }
  }
}

export default OnboardingScreen;
