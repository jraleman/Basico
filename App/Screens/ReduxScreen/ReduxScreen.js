import React from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Content,
  Icon,
  Text,
  Label,
  Input
} from 'native-base';
import AppHeader from '../../Components/AppHeader';
import styles from './styles';

class ReduxScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    }
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <StatusBar
          hidden={ false }
          barStyle={ 'dark-content' }
          animated={ true }
        />
        <Container style={ styles.container }>
          <AppHeader
            title={ 'Redux Example' }
            icon={ 'arrow-back' }
            onPress={ () => this.props.navigation.goBack() }
          />
          <Content>
            <Label>{ "Current counter" }</Label>
            <Input
              value={ String(this.props.counter) }
              editable={ false }
            />
            <Button onPress={ this.props.increaseCounter }>
              <Icon active={ true } name='paw' />
              <Text>{ "Increase" }</Text>
            </Button>
            <Button onPress={ this.props.decreaseCounter }>
              <Icon active={ true } name='paw' />
              <Text>{ "Decrease" }</Text>
            </Button>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}


function mapStateToProps(state) {
  return ({
    counter: state.counter
  });
}

function mapsDispatchToProps(dispatch) {
  return ({
    increaseCounter: () => dispatch({ type: 'INCREASE_COUNT' }),
    decreaseCounter: () => dispatch({ type: 'DECREASE_COUNT' })
  });
}

export default connect(mapStateToProps)(ReduxScreen);