import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

import Style from './Style';

export default class Magic8 extends Component {
    
    render() {
        return (
          <TouchableWithoutFeedback onPress={this.props.onPress}>
            <View style={Style.magicContainer}>
              <View style={Style.magic8}>
                <View style={Style.innerContainer}>
                  <View style={Style.inner8}>
                    <View style={Style.eightContainer}>
                      <Text style={Style.eight}>8</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )
    }
    
}