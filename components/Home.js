import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import requestCameraAndAudioPermission from './permission';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AppID: '*ENTER APP ID HERE*', //Set your APPID here
      ChannelName: '', //Set a default channel or leave blank
    };
    if (Platform.OS === 'android') {
      //Request required permissions from Android
      requestCameraAndAudioPermission().then(_ => {
        console.log('requested!');
      });
    }
  }
  /**
   * @name handleSubmit
   * @description Helper function to handle data on submit click
   */
  handleSubmit = () => {
    let AppID = this.state.AppID;
    let ChannelName = this.state.ChannelName;
    if (AppID !== '' && ChannelName !== '') {
      Actions.video({AppID, ChannelName});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formLabel}>App ID</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={AppID => this.setState({AppID})}
          value={this.state.AppID}
        />
        <Text style={styles.formLabel}>Channel Name</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={ChannelName => this.setState({ChannelName})}
          value={this.state.ChannelName}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            title="Start Call!"
            onPress={this.handleSubmit}
            style={styles.submitButton}>
            <Text style={styles.white}> Start Call </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 0,
    padding: 20,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  formLabel: {
    paddingBottom: 10,
    paddingTop: 10,
    color: '#0093E9',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  submitButton: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    backgroundColor: '#0093E9',
    borderRadius: 25,
  },
  formInput: {
    height: 40,
    backgroundColor: '#f5f5f5',
    color: '#0093E9',
    borderRadius: 4,
    paddingLeft: 20,
  },
  white: {
    color: '#fff',
  },
});

export default Home;
