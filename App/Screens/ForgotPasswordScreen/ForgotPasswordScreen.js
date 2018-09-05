import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Content,
  Button,
  Icon,
  Item,
  Input,
  Form,
  Text
} from 'native-base';
import styles from './styles';
import BasicoHeader from '../../Components/BasicoHeader';

class ForgotPasswordScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <React.Fragment>
        <StatusBar
          translucent
          barStyle={ 'light-content' }
          hidden
        />
        <Container style={ styles.container }>
          <BasicoHeader
            title={ 'Forgot Password' }
            onPress={ () => this.props.navigation.goBack() }
            icon={ 'arrow-back' }
          />
          <Content padder>
            <Form style={{ flex: 1 }}>
              <Item style={ styles.email }>
                <Input placeholder={ 'Email' } />
                <Icon
                  active
                  name={ 'mail' }
                />
              </Item>
              <Button
                style={ styles.button }
                block={ true }
              >
                <Text>{ 'Submit' }</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

export default ForgotPasswordScreen;
