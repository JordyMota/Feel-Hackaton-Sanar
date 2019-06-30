import * as React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";

import Sick from '../../icons/Sick';

import DiseaseList from '../DiseaseList';

import { 
  Container,
  Descript, 
  Title, 
  TextContainer,
  BtnContinue, 
  TextBtnContinue,
  BtnContinueContainer,
  MainContainer, 
} from './styles';

export default class DiseaseIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <Container active={this.props.handleAnimation('step3', 'step4').visible}>
      <ScrollView>

        <MainContainer>
          <Animatable.View 
            animation={this.props.handleAnimation('step3', 'step4').name} 
            easing="ease-out-cubic"
          >
            <Sick />
          </Animatable.View>
          <TextContainer>
            <Animatable.View 
              animation={this.props.handleAnimation('step3', 'step4').name} 
              easing="ease-out-cubic" 
              duration={this.props.handleAnimation('step3', 'step4').duration + 200} 
              delay={this.props.handleAnimation('step3', 'step4').delay}
            >
              <Descript>
                  Oi <Title>{this.props.userName}</Title> !
              </Descript>
            </Animatable.View>

            <Animatable.View 
              animation={this.props.handleAnimation('step3', 'step4').name} 
              easing="ease-out-cubic" 
              duration={this.props.handleAnimation('step3', 'step4').duration + 400} 
              delay={this.props.handleAnimation('step3', 'step4').delay * 2}
            >
              <Descript body>
                  Fala pra gente agora um pouco mais da saude, afinal nossa preucupação aqui é ver você sair bem daqui!
              </Descript>
            </Animatable.View>

          </TextContainer>
          <Animatable.View 
            animation={this.props.handleAnimation('step3', 'step4').name} 
            easing="ease-out-cubic" 
            duration={this.props.handleAnimation('step3', 'step4').duration + 600} 
            delay={this.props.handleAnimation('step3', 'step4').delay * 3}
          >
            <DiseaseList />
          </Animatable.View>

          <Animatable.View 
            animation={this.props.handleAnimation('step3', 'step4').name} 
            easing="ease-out-cubic" 
            duration={this.props.handleAnimation('step3', 'step4').duration + 800} 
            delay={this.props.handleAnimation('step3', 'step4').delay * 4}
          >
            <BtnContinueContainer>
              <BtnContinue onPress={()=>{ this.props.navi.navigate("App") }}>
                <TextBtnContinue>
                  Continuar
                </TextBtnContinue>
              </BtnContinue>
            </BtnContinueContainer>
          </Animatable.View>
        </MainContainer>
      </ScrollView>
    </Container>
    );
  }
}
