import React from 'react';
import {
  Animated,
  Easing,
  TouchableOpacity,
  Text,
  View
} from 'react-native'
import {
  Container,
  Button,
  Spinner,
  Icon
} from 'native-base';
import styles from './styles';

import { Dimensions } from 'react-native'
const DEVICE_WIDTH = Dimensions.width;
const DEVICE_HEIGHT = Dimensions.height;
const MARGIN = 40;

class AnimatedButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this._color = this.props.color;
    this._title = this.props.title;
    this._onPress = this.props.onPress;
    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    return ;
  }
  onPressHandler = () => {
    if (this.state.isLoading == false) {
      this.setState({ isLoading: true });
      Animated.timing(this.buttonAnimated, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }).start();
      setTimeout (() => {
        this.onGrow();
      }, 2000);
      setTimeout(() => {
        // Actions.secondScreen();
        this._onPress();
        this.setState({ isLoading: false });
        this.buttonAnimated.setValue(0);
        this.growAnimated.setValue(0);
      }, 2300)
    }
    return ;
  }
  onGrow () {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start();
    return ;
  }
  render () {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });
    return (
      <Container style={ styles.container }>
        <Animated.View style={{ width: changeWidth }}>
          <Button
            style={[
              styles.button,
              { backgroundColor: this._color }
            ]}
            block={ true }
            onPress={ this.onPressHandler }
          >
            { this.state.isLoading == true ? (
              <Spinner />
            ) : (
              <Text style={ styles.text }>
                <Icon
                  active={ true }
                  name={ 'log-in' }
                />
                { this._title }
              </Text>
            )}
          </Button>
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ scale: changeScale }]}
            ]}
          />
        </Animated.View>
      </Container>
    );
  }
}

export default AnimatedButton;
