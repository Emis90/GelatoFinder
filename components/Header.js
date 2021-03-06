import React, { Component } from 'react';
import { Text, View,  TouchableOpacity, Image } from 'react-native';
import { CreatePost } from './CreatePost';
import styles from '../styles/Format'
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      text: ''
    }
  }

  closeModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  render() {
    return (
      <View style={styles.containerHeader}>
        <Text style={styles.text}>
          {this.props.text}
        </Text>

        <TouchableOpacity onPress={() => this.setState({ isModalVisible: true })} style={styles.buttonContainer}>

        </TouchableOpacity>

        <CreatePost isModalVisible={this.state.isModalVisible} closeModal={() => this.closeModal()} />

      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     height: 50,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingLeft: 30,
//     borderBottomWidth: 1,
//     borderBottomColor: '#dadada'
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     flex: 1
//   },
//   button: {
//     width: 30,
//     height: 30,
//     resizeMode: 'contain',
//   },
//   buttonContainer: {
//     paddingRight: 5
//   }
// })

