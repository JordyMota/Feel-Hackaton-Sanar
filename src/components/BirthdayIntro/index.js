import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity, DatePickerAndroid } from "react-native";
import * as Animatable from "react-native-animatable";

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

import Baby from '../../icons/Baby';

export default class BirthdayIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      chosenDate: new Date(),
      androidDate: `${new Date().getUTCDate()}/${new Date().getUTCMonth() + 1}/${new Date().getUTCFullYear()}`,
    };
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  
  setDateAndroid = async () => {
    try {
      const {action, year, month, day,} = await DatePickerAndroid.open({
      date: new Date(),
      maxDate: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ androidDate: `${day}/${month + 1}/${year}` });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  handleInputType = (text)=> {
    this.setState({
      name: text
    });
  }

  render() {
    return (
    <Container behavior="padding" active={this.props.handleAnimation('step2', 'step3').visible}>
      <MainContainer>
        <Animatable.View 
          animation={this.props.handleAnimation('step2', 'step3').name} 
          easing="ease-out-cubic"
        >
          <Baby />
        </Animatable.View>
        <TextContainer>
          <Animatable.View 
            animation={this.props.handleAnimation('step2', 'step3').name} 
            easing="ease-out-cubic" 
            duration={this.props.handleAnimation('step2', 'step3').duration + 200} 
            delay={this.props.handleAnimation('step2', 'step3').delay}
          >
            <Descript>
                Oi <Title>{this.props.userName}</Title> !
            </Descript>
          </Animatable.View>

          <Animatable.View 
            animation={this.props.handleAnimation('step2', 'step3').name} 
            easing="ease-out-cubic" 
            duration={this.props.handleAnimation('step2', 'step3').duration + 400} 
            delay={this.props.handleAnimation('step2', 'step3').delay * 2}
          >
            <Descript body>
                Mal te conheço e já te considero pakas, diz ai quando você nasceu pra eu poder te ajudar ainda mais?
            </Descript>
          </Animatable.View>

        </TextContainer>
        <Animatable.View 
          animation={this.props.handleAnimation('step2', 'step3').name} 
          easing="ease-out-cubic" 
          duration={this.props.handleAnimation('step2', 'step3').duration + 600} 
          delay={this.props.handleAnimation('step2', 'step3').delay * 3}
        >
          <View style={{marginTop: '12%'}}>
            <TouchableOpacity onPress={() => this.setDateAndroid()} style={{padding: 15,borderColor: '#fff',borderWidth: 1,borderRadius: 5}}>
              <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>{this.state.androidDate}</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>


        <Animatable.View 
          animation={this.props.handleAnimation('step2', 'step3').name} 
          easing="ease-out-cubic" 
          duration={this.props.handleAnimation('step2', 'step3').duration + 800} 
          delay={this.props.handleAnimation('step2', 'step3').delay * 4}
        >
          <BtnContinueContainer>
            <BtnContinue onPress={()=>{ this.props.handleChangeStep(3) }}>
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
