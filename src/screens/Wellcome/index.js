import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Container } from './styles';

import NameIntro from '../../components/NameIntro';
import BirthdayIntro from '../../components/BirthdayIntro';
import DiseaseIntro from '../../components/DiseaseIntro';

export default class Wellcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step1: true,
      step2: false,
      step3: false,
      step4: false,
    };
  }

  handleChangeStep = (step)=> {
    switch (step) {
      case 2: 
        this.setState({
          step1: true,
          step2: true,
          step3: false,
        });
      break;
      case 3: 
        this.setState({
          step1: true,
          step2: true,
          step3: true,
        });
      break;
      default: 
        this.setState({
          step1: true,
          step2: false,
          step3: false,
        });
    }
  }

  handleAnimation = (currentStep, nextStep) =>{
    let status = this.state[currentStep] && !this.state[nextStep];
    let secondatyStatus = !this.state[currentStep] && !this.state[nextStep];
    let name = status ? 
    'bounceInRight' :
    (secondatyStatus ?
    'fadeIn':
    'bounceOutLeft');
    let animationStatus = {
      name: name,
      duration: status ? 1000 : 400,
      delay: status ? 150 : 50,
      visible: status,
    }
    return animationStatus;
  }

  render() {
    return (
      <Container>
            <NameIntro
              handleAnimation={this.handleAnimation} 
              handleChangeStep={this.handleChangeStep} 
              steps={this.state}
            />
            <BirthdayIntro
              handleAnimation={this.handleAnimation} 
              handleChangeStep={this.handleChangeStep} 
              steps={this.state}
            />
            <DiseaseIntro
              handleAnimation={this.handleAnimation} 
              handleChangeStep={this.handleChangeStep} 
              steps={this.state}
              navi={this.props.navigation}
            />
      </Container>
    );
  }
}
    