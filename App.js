import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import RNShake from 'react-native-shake';
import Style from './src/Style';
import Magic8 from './src/Magic8';

const answers = [
  "Hell yeah!",
  "Ummmm, no.",
  "SO 👏  MUCH 👏  NO!",
  "SO 👏  MUCH 👏  YES!",
  "💩💩💩",
  "idk.",
  "Try again later.",
  "You're kidding right?!",
  "Sure, why not?",
  "Unlikely.",
  "Yassssss Queen! 👑",
  "Certainly!",
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
    }
    this.getAnswer = this.getAnswer.bind(this);
  }

  getAnswer() {
    const questionAnswer = answers[Math.floor(Math.random() * (answers.length))];
    this.setState({
      answer: questionAnswer,
    })
  };

  componentWillMount() {
    RNShake.addEventListener('shake', () => {
      getAnswer();
    });
  }

  componentWillUnmount() {
    RNShake.removeEventListener('shake');
  }

  render() {    
    return (
      <View style={Style.container}>
        <View style={Style.welcomeContainer}>
          <Text style={Style.welcomeText}>Welcome to</Text>
          <Text style={Style.titleText}>Magic 8!</Text>
          <Text style={Style.question}>
           What would you like to know?
          </Text>
          <Text style={Style.howTo}>
            Ask a 'yes' or 'no' question, then tap the 8 ball or shake your phone to get the answer!
          </Text>
        </View>
        <Magic8 onPress={this.getAnswer}/>
        <Text style={Style.answer}>{this.state.answer}</Text>
      </View>
    );
  }
}


