import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Container, ProfileButton } from './styles';

import Avatar from '../../icons/Avatar';

export default class Wellcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <Container>
        <ProfileButton>
            <Avatar />
        </ProfileButton>
    </Container>
    );
  }
}
