import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Animatable from "react-native-animatable";

import { 
  Container,
  Descript, 
  Title, 
  TextContainer,
  BtnContinue, 
  TextBtnContinue,
  NameInput,
  BtnContinueContainer,
  MainContainer, 
} from './styles';


import Intro from '../../icons/Intro';

export default class Wellcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <Container behavior="padding" active={this.props.handleAnimation('step1', 'step2').visible}>
      <MainContainer>
        <Animatable.View 
          animation={this.props.handleAnimation('step1', 'step2').name} 
          easing="ease-out-cubic"
        >
          <Intro />
        </Animatable.View>
        <TextContainer>
          <Animatable.View 
            animation={this.props.handleAnimation('step1', 'step2').name} 
            easing="ease-out-cubic" 
            duration={this.props.handleAnimation('step1', 'step2').duration + 200} 
            delay={this.props.handleAnimation('step1', 'step2').delay}
          >
            <Descript>
              Bem Vido ao <Title>FEED</Title> !
            </Descript>
          </Animatable.View>

          <Animatable.View 
            animation={this.props.handleAnimation('step1', 'step2').name} 
            easing="ease-out-cubic" 
            duration={this.props.handleAnimation('step1', 'step2').duration + 400} 
            delay={this.props.handleAnimation('step1', 'step2').delay * 2}
          >
            <Descript body>
            Aqui, estamos sempre buscando seu bem estar, tentando fazer você se sentir melhor, mas para fazer isso precisamos te conhecer um pouco mais, pode nos dizer seu nome?
            </Descript>
          </Animatable.View>

        </TextContainer>
        <Animatable.View 
          animation={this.props.handleAnimation('step1', 'step2').name} 
          easing="ease-out-cubic" 
          duration={this.props.handleAnimation('step1', 'step2').duration + 600} 
          delay={this.props.handleAnimation('step1', 'step2').delay * 3}
        >
        
        </Animatable.View>

          <NameInput
            onChangeText={(text) => this.props.userType(text)}
            value={this.props.userName}
            placeholderTextColor="rgba(255,255,255,.6)"
            placeholder="Ex. John Smith"
          /> 

        <Animatable.View 
          animation={this.props.handleAnimation('step1', 'step2').name} 
          easing="ease-out-cubic" 
          duration={this.props.handleAnimation('step1', 'step2').duration + 800} 
          delay={this.props.handleAnimation('step1', 'step2').delay * 4}
        >
          <BtnContinueContainer>
            <BtnContinue onPress={()=>{ this.props.handleChangeStep(2) }}>
              <TextBtnContinue>
                Continuar
              </TextBtnContinue>
            </BtnContinue>
          </BtnContinueContainer>
        </Animatable.View>
      </MainContainer>
    </Container>
    );
  }
}
