#!/usr/bin/env node

/**
 *      |    o             |
 * ,---.|---..,---.,---. --|--- ,---.
 * ,---||   |||---'|       |    |   |
 * `---^`---'``---'`    o  `---'`---'
 *
 * ProfileScreen/ProfileScreen.js
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import React from 'react';
import { BackHandler } from 'react-native';
import {
  Button,
  Container,
  Content,
  Icon,
  Text,
  H1,
  H2,
  Thumbnail,
  Item,
  Label,
  Input,
  Left,
  Right,
  Textarea,
  View
} from 'native-base';
// ~~ Local Dependencies ~~
import AppHeader from '../../Components/AppHeader';
import styles from './styles';

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class ProfileScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return;
  }
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return (true);
    });
  }
  /**
   * Renders the component.
   * @return { string } - RN markup for the component
   */
  render () {
    return (
      <React.Fragment>
        <Container style={ styles.container }>
          <AppHeader
            title={ 'Profile' }
            icon={ 'menu' }
            onPress={ () => this.props.navigation.openDrawer() }
            iconRight={ 'more' }
            onPressRight={ () => window.alert('edit') }
          />
          <Content
            padder={ true }
            style={ styles.content }
          >
            <ProfileAvatar
              firstName={ "John" }
              lastName={ "Doe" }
              picture={{ uri: 'https://api.adorable.io/avatars/256/basico@adorable.io.png' }}
              lastLogin={ '2 hours ago...' }
            />
            <ProfileInfo
              email={ 'example@basico.app' }
              phone={ '+1 (322) 233-4354' }
              gender={ 'male' }
              dateOfBirth={ 'January 30, 1993' }
            />
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};


const BasicoItemInput = (props) => {
  return (
    <Item
      inlineLabel={ true }
      style={{ borderColor: '#f9f9f9' }}
    >
      <Left>
        <Label>{ props.label }</Label>
      </Left>
      <Right>
        <Input
          placeholder={ props.data }
          disabled={ true }
          underline={ false }
        />
      </Right>
    </Item>
  );
};

const BasicoTextArea = (props) => {
  return (
    <View>
      <Label>{ props.label }</Label>
      <Textarea
        placeholder={ props.data }
        disabled={ true }
        rowSpan={ 3 }
        bordered={ true }
      />
    </View>
  );
};

const BasicoTransparentBtn = (props) => {
  return (
    <View>
      <Button
        info={ true }
        transparent={ true }
        iconRight={ true }
        onPress={ props.onPress }
        block={ true }
        style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}
      >
        <Icon
          name={ "create" }
          type={ "Ionicons" }
        />
        <Text>{ 'Edit' }</Text>
      </Button>
    </View>
  );
};


const ProfileAvatar = (props) => {
  return (
    <View style={ styles.avatar }>
      <Text style={ styles.mb10 }>
        { props.firstName + props.lastName }
      </Text>
      <Thumbnail
        large={ true }
        source={ props.picture }
        style={ styles.mb10 }
       />
      <Text style={ styles.mb10 }>
        { /* "Last login: " + props.lastLogin */ }
        { "Last login: 16 hours ago" }
      </Text>
    </View>
  );
};

const ProfileInfo = (props) => {
  return (
    <View style={{ marginTop: 36, marginBottom: 12 }}>
      <H1>{ 'profile info' }</H1>
      <BasicoItemInput
        label={ 'Email' }
        data={ props.email }
      />
      <BasicoItemInput
        label={ 'Phone Number' }
        data={ props.phone }
      />
      <BasicoItemInput
        label={ 'Gender' }
        data={ props.gender }
      />
      <BasicoItemInput
        label={ 'Date of Birth' }
        data={ props.dob }
      />
    </View>
  );
};


export default ProfileScreen;
