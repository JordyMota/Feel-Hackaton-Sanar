import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Container, FrontView } from './styles';

import ProfileButton from '../../components/ProfileButton';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container behavior="padding">
            <ProfileButton />
            <FrontView>
              
            </FrontView>
      </Container>
    );
  }
}
