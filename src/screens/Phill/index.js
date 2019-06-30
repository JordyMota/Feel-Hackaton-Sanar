import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import ProfileButton from '../../components/ProfileButton';

import { primaryColor } from '../../util/colors';
const avatar =
  'https://images.clipartlogo.com/files/istock/previews/9069/90698177-pills-vitamin-icon-of-medication-and-medicaments-flat-vector.jpg';

const image = 'https://ak6.picdn.net/shutterstock/videos/24224086/thumb/1.jpg';

export default class Phill extends React.Component {
  state = {
    messages: [],
    isSubmited: false
  };

  static navigationOptions = {
    title: 'Phill',
    headerStyle: {
      backgroundColor: primaryColor
    },
    headerTintColor: 'white'
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text:
            'Olá, eu sou o Phill, seus assistente pessoal! Diga pra mim como está se sentindo',
          createdAt: new Date(),
          quickReplies: {
            type: 'checkbox',
            values: [
              {
                title: 'Dor de cabeça',
                value: 'yes'
              },
              {
                title: 'Dor de abdobem',
                value: 'yes_picture'
              },
              {
                title: 'Dor na barriga',
                value: 'no'
              }
            ]
          },
          user: {
            _id: 2,
            name: 'Phill',
            avatar
          }
        }
      ]
    });
  }

  onSend() {
    const messages = [
      {
        _id: 1,
        text: 'Ok, deixe me ver...',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Phill',
          avatar
        }
      }
    ];

    this.setState(
      previousState => ({
        messages: GiftedChat.append(previousState.messages, messages)
      }),
      () => this.requestFromApi()
    );
  }

  requestFromApi = () => {
    setTimeout(() => {
      const messages = [
        {
          _id: 1,
          text: 'Ja tenho o resultado!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Phill',
            avatar
          }
        }
      ];

      this.setState(
        previousState => ({
          messages: GiftedChat.append(previousState.messages, messages)
        }),
        () => this.nextStep()
      );
    }, 1500);
  };

  nextStep = () => {
    setTimeout(() => {
      const messages = [
        {
          _id: 1,
          text: 'Estou te encaminhando pro seu perfil...',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Phill',
            avatar
          }
        }
      ];

      this.setState(
        previousState => ({
          messages: GiftedChat.append(previousState.messages, messages)
        }),
        () => this.sendImage()
      );
    }, 2000);
  };

  sendImage = () => {
    setTimeout(() => {
      const messages = [
        {
          _id: 1,
          text: 'Sempre acompanhe com a gente!',
          image,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Phill',
            avatar
          }
        }
      ];

      this.setState(
        previousState => ({
          messages: GiftedChat.append(previousState.messages, messages)
        }),
        () => this.navigate()
      );
    }, 2000);
  };

  navigate = () => {
    setTimeout(() => this.props.navigation.navigate('Profile'), 7000);
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        user={{
          _id: 1
        }}
        renderInputToolbar={() => null}
        onQuickReply={() => this.onSend()}
      />
    );
  }
}
