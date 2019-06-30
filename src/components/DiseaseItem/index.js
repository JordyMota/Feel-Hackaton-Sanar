import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import { 
  Container,
  Content,
  BtnContainer,
} from './styles';

export default class DiseaseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handleClick = ()=> {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <BtnContainer>
        <Container active={this.state.active} onPress={()=>{this.handleClick();}}>
          <Content active={this.state.active}>{this.props.name}</Content>
        </Container>
      </BtnContainer>
    );
  }
}
