import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Board } from './components/board';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      fullName: `Bryan Kulczycki`
    }
  }


  updateState = () => {
    this.setState({fullName: `Bryan 2`});
  }

  render() {
    return (

      <View style={styles.container} >
        <Button onPress = {this.updateState} title="Press Me"/>
        <Text >My name is {this.state.fullName}</Text>
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
