/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  Dimentions,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
export default class Form1 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      shouldShowForm: false,
      txtEn: '',
      txtVn: '',
    };
  }
  toggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  };
  renderForm = () => {
    const word = {back: '<Trở về' };
    if (this.state.shouldShowForm) {
      return (
        <SafeAreaView style={styles.container3}>
          <View style={styles.container4}>
            <View style={styles.containerTouchBack}>
              <TouchableOpacity
                onPress={this.toggleForm}
                style={styles.TouchBack}>
                <Text style={styles.textStyleBack}>{word.back}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerTextTinh}>
                <Text style={styles.textStyleTinh}>Tỉnh:</Text>
            </View>
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.container2}>
            <View style={styles.containerTextInput}>
              <TextInput placeholder= "Nhập tên tỉnh" style={styles.textInput} />
            </View>
            <View style={styles.containerTouchSearch}>
              <TouchableOpacity
                onPress={this.toggleForm}
                style={styles.TouchSearch}>
                <Text style={styles.textStyleSearch}>Tìm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      );
    }
  };

  render() {
    return this.renderForm();
  }
}
const styles = StyleSheet.create({
  //// Screen 2
  container3: {flex: 1, flexDirection: 'column', backgroundColor: 'yellow'},
  container4: {flex: 0.1, flexDirection: 'column'},
  containerTextTinh: {
    flex: 0.5,
    justifyContent: 'center',
    marginTop: 5,
  },
  textStyleTinh: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 5,
  },
  containerTouchBack: {
    flex: 0.5,
    flexDirection:'row',
    
  },
  TouchBack: {
    flex: 0.2,
    padding: 2,
    backgroundColor: 'gray',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    marginTop: 3,
  },
  textStyleBack: {fontSize: 15, fontWeight: '500', color: 'black'},
  //// Screen 1
  container: {flex: 1, flexDirection: 'column', backgroundColor: 'pink'},
  container2: {flex: 0.1, flexDirection: 'row', justifyContent: 'center'},
  containerTouchSearch: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: 5,
  },
  containerTextInput: {
    flex : 0.8,
    marginTop: 5,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    height: 40,
    fontSize: 15,
    paddingHorizontal: 5,
  },
  TouchSearch: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 100,
  },
  textStyleSearch: {fontSize: 15, fontWeight: '500', color: 'black'},
});
