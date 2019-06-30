import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Animatable from "react-native-animatable";

import DiseaseItem from '../DiseaseItem';

import { 
  Container, 
} from './styles';

export default class DiseaseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  diseases = ['Câncer','Diabetes','Colesterol','Pressão Alta','Alergia','Rinite','AIDS'];

  render() {
    return (
    <Container>
      {this.diseases.map((item,index) => <DiseaseItem name={item} key={index}/>)}
    </Container>
    );
  }
}
