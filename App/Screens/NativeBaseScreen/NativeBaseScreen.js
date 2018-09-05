import React from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  H1,
  Header,
  Icon,
  Left,
  Right,
  Title
} from 'native-base';
import styles from './styles';
import BasicoHeader from '../../Components/BasicoHeader';
import {
  BadgesContainer,
  ButtonsContainer,
  CardsContainer,
  CheckBoxContainer,
  FormContainer,
  IconsContainer,
  ListsContainer,
  LoadersContainer,
  RadioButtonsContainer
} from '../../Containers/NativeBaseContainers';
import { connect } from 'react-redux';
import {
  StackActions,
  NavigationActions
} from 'react-navigation';
import '../../Config';
import { DrawerNavigator } from 'react-navigation';

class NativeBaseScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <Container style={ styles.container }>
        <BasicoHeader
          title={ 'NativeBase' }
          onPress={ () => this.props.navigation.openDrawer() }
          icon={ 'menu' }
        />
        <Content style={ styles.content }>
          <H1>{ 'Components' }</H1>
          <BadgesContainer />
          <ButtonsContainer />
          <CardsContainer />
          <CheckBoxContainer />
          <FormContainer />
          <IconsContainer />
          <ListsContainer />
          <LoadersContainer />
          <RadioButtonsContainer />
        </Content>
      </Container>
    );
  }
}

export default NativeBaseScreen;
