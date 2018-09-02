#!/usr/bin/env node

/*
** LoginScreen
** ---------------------------------------------------------------------------|
** Author: jraleman
** Date: Sat, Sep 01 2018
** Dependencies: I18n
*/

// ~~ Basic Stuff ~~
import React from 'react';
import {
  Keyboard,
  Image,
  View,
  TouchableWithoutFeedback,
  TextInput,
  AppRegistry,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form,
  H2,
  Label,
  Text,
  Textarea
} from "native-base";

// ~~ Configuration ~~
import '../../Config';

// ~~ Dependencies ~~
import I18n from 'react-native-i18n';

// ~~ Local Dependencies ~~
import styles from './styles';
import { Images } from '../../Themes';
import WallpaperContainer from '../../Containers/WallpaperContainer';

// ~~ Constants ~~
const WALLPAPER_OPACITY = 0.25;
const WALLPAPER_BLUR = 2.25
const WALLPAPER_OVERLAY = '#e4e4a1';

// ~~ React Component ~~
class LoginScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      loading: false,
      visible: true
    };
    this.inputs = {};
    // this._focusNextField = this._focusNextField.bind(this);
    return;
  }
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    return ;
  }
  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    return ;
  }
  _keyboardDidShow = () => {
    this.setState({ visible: false });
    // alert(this.state.visible);
    // this.forceUpdate();
    return ;
  }
  _keyboardDidHide = () => {
    this.setState({ visible: true });
    // alert(this.state.visible);
    // this.forceUpdate();
    return ;
  }
  _handleNavigation () {
    this.props.navigation.navigate('DrawerNavigation');
    return ;
  }
  _onLoginHandler = () => {
    this._handleNavigation();
    return ;
  }
  _onSignupHandler = () => {
    alert('SignupHandler')
    return ;
  }
  _onForgotPassHandler = () => {
    alert('ForgotPassHandler')
    return ;
  }
  _focusNextField = (id) => {
    this.inputs[id].focus();
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <Container style={ styles.container }>
          <WallpaperContainer
            image={ Images.loginBackground }
            overlay={ WALLPAPER_OVERLAY }
            opacity={ WALLPAPER_OPACITY }
            blur={ WALLPAPER_BLUR }
          >
            <TouchableWithoutFeedback
              onPress={ Keyboard.dismiss }
              accessible={ false }
            >
              <Image
                source={ Images.logoBlack }
                style={ styles.logo }
                resizeMode={ 'contain' }
              />
            </TouchableWithoutFeedback>
            <Form style={ styles.form }>
              <Item floatingLabel={ true }>
                <Label>{ "Email" }</Label>
                <TextInput
                  keyboardType={ 'email-address' }
                  returnKeyType={ 'next' }
                  onSubmitEditing={ () => { this._focusNextField('passRef'); }}
                  ref={ input => { this.inputs['emailRef'] = input; }}
                />
              </Item>
              <Item
                floatingLabel={ true }
                last={ true }
              >
                <Label>{ "Password" }</Label>
                <TextInput
                  onSubmitEditing={ Keyboard.dismiss }
                  ref={ input => { this.inputs['passRef'] = input; }}
                />
              </Item>
              <Button
                block={ true }
                light={ true }
                style={ styles.button }
                onPress={ this._onLoginHandler }
              >
                <Text>{ "Login" }</Text>
              </Button>
            </Form>
            { this.state.visible ? (
              <React.Fragment>
                <View style={ styles.forgotPassword }>
                  <Button
                    onPress={ this._onForgotPassHandler }
                    transparent={ true }
                    dark={ true }
                  >
                    <Text>{ "Forgot password?" }</Text>
                  </Button>
                </View>
                <View style={ styles.signup }>
                  <Button
                    onPress={ this._onSignupHandler }
                    info={ true }
                  >
                    <Text>{ "Tap here to Sign up!" }</Text>
                  </Button>
                </View>
              </React.Fragment>
              ) : (null)
            }
          </WallpaperContainer>
        </Container>
      </React.Fragment>
    );
  }
}

export default LoginScreen;
