import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


import SelectedProfileSpec from './SelectedProfileSpec';
import SelectedProfileGTKY from './SelectedProfileGTKY';

class UserPicEdit extends Component {


  render() {
    const user = this.props.login.data;




    return (
      <View>
        <View style={styles.containerStyle1}>
          <TouchableWithoutFeedback  onPress={() => Actions.userProfile()}>
            <View style={styles.arrowContainer}>
              <Text style={styles.arrowText}>&larr;</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.topContainer}>
          <Text style={styles.titleTop}>Profile Picture</Text>
          <Image style={styles.imageProfile} source={{uri: user.pic}} />
        </View>
      </View>
    )
  }
}


const styles = {
  title: {
    marginVertical: 10,
    marginLeft: 30,
    color: '#597d9e',
    fontSize: 20
  },
  textSpec: {
    color: '#aaa',
    fontSize: 16,
    marginLeft: 42
  },
  titleTop: {
    marginBottom: 10,
    marginTop: 20,
    color: '#597d9e',
    fontSize: 20
  },
  textTop: {
    color: '#aaa',
    fontSize: 16,
  },
  arrowContainer: {
    backgroundColor: '#597d9e',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10
  },
  arrowText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22
  },
  hr: {
    height: 1,
    backgroundColor: '#d1cbc7',
    flex: 7
  },
  hrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  hrImage: {
    height: 35,
    width: 38,
    flex: 1,
    marginRight: 5
  },
  hrImageLived: {
    height: 37,
    width: 27,
    flex: 1,
    marginRight: 5
  },
  imageProfile: {
    height: 130,
    width: 130,
    borderRadius: 65
  },
  topContainer: {
    alignItems: 'center'
  }
};

function mapStateToProps(store) {
  return {
    login: store.login,
    gtkyKEY: store.gtkyKEY,
  };
}

export default connect(mapStateToProps)(UserPicEdit);
