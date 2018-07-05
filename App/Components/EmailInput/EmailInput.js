import React from 'react';
import {
  Container,
  Item,
  Input,
  Label
} from 'native-base'
import styles from './styles';

class EmailInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <Item>
          <Input
            placeholder={ "Email" }
            placeholderTextColor={ 'white' }
            keyboardType={ 'email-address' }
          />
        </Item>
      </Container>
    );
  }
}

export default EmailInput;
