import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


import SelectedProfileSpec from './SelectedProfileSpec';
import SelectedProfileGTKY from './SelectedProfileGTKY';
import { changeProfile } from '../actions/action_updateInfo';

class UserProfileEdit extends Component {

  changeProfile(prop, value, index) {
    console.log(prop, value, index);
    this.props.changeProfile(prop, value, index);
  }

  render() {
    const user = this.props.login.temp;


    let education = "";
    let work = "";
    let relationship_status = "";
    let relation = "";
    let lived = "";
    let gtkys = "";
      if (user) {
        if (user.first_name) {
        education = user.education.map((spec, i) => {
          let educSpec = {value: spec.value + " (" + spec.start + " - " + spec.end + ")"}
          return <SelectedProfileSpec
            spec={educSpec}
            key={i} />
        });
        work = user.work.map((spec, i) => {
          let workSpec = {value: spec.value + " at " + spec.employer + " (" + spec.start + " - " + spec.end + ")"}
          return <SelectedProfileSpec
            spec={workSpec}
            key={i} />
        });
        if(user.relationship_status !== ""){
          const relationSpec = {value: user.relationship_status}
          relationship_status = <SelectedProfileSpec
            spec={relationSpec} />
        }
        relation = user.relation.map((spec, i) => {
            let type = "";
            switch (spec.value) {
              case 'Pet(s)':
                if (Number(spec.quantity) === 1) {
                  type = 'Pet';
                } else {
                  type = 'Pets';
                }
                break;
              case 'Child(ren)':
                if (Number(spec.quantity) === 1) {
                  type = 'Child';
                } else {
                  type = 'Children';
                }
                break;
              case 'Sibling(s)':
                if (Number(spec.quantity) === 1) {
                  type = 'Sibling';
                } else {
                  type = 'Siblings';
                }
                break;
              default:

            }
          let relationSpec = {value: spec.quantity + " " + type}
          return <SelectedProfileSpec
            spec={relationSpec}
            key={i} />
        });


        lived = user.lived.map((spec, i) => {
          return <SelectedProfileSpec
            spec={spec}
            key={i} />
        });


        gtkys = user.gtky.map((gtky, i) => {
          if (gtky) {
            return <SelectedProfileGTKY
              question={this.props.gtkyKEY[i]}
              answer={gtky}
              key={this.props.gtkyKEY[i]} />
          }
        });
      }
    }

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
          <Text style={styles.titleTop}>Name</Text>
          <View style={styles.textTopContainer}>
            <TextInput onChangeText={first_name => this.changeProfile('first_name', first_name)} style={styles.textTop} value={user.first_name} />
            <TextInput onChangeText={last_name => this.changeProfile('last_name', last_name)} style={styles.textTop} value={user.last_name} />
          </View>
        </View>
        <View>
          <View style={styles.hrContainer}>
            <Image style={styles.hrImage} source={{uri: 'https://s3-us-west-2.amazonaws.com/goodturn-pics/education2.png'}}/>
            <View style={styles.hr}></View>
          </View>
          <Text style={styles.title}>Education</Text>
          {(education === "") ? <Text>education</Text> : education}
        </View>
        <View>
          <View style={styles.hrContainer}>
            <Image style={styles.hrImage} source={{uri: 'https://s3-us-west-2.amazonaws.com/goodturn-pics/work.png'}}/>
            <View style={styles.hr}></View>
          </View>
          <Text style={styles.title}>Work Experience</Text>
          {(work === "") ? <Text>work</Text> : work}
        </View>
        <View>
          <View style={styles.hrContainer}>
            <Image style={styles.hrImage} source={{uri: 'https://s3-us-west-2.amazonaws.com/goodturn-pics/relationship.png'}}/>
            <View style={styles.hr}></View>
          </View>
          <Text style={styles.title}>Relationship Status</Text>
          {(relationship_status === "") ? <Text>{relationship_status}</Text> : relationship_status}
          <Text style={styles.title}>Other Relations</Text>
          {(relation === "") ? <Text>relation</Text> : relation}
        </View>
        <View>
          <View style={styles.hrContainer}>
            <Image style={styles.hrImageLived} source={{uri: 'https://s3-us-west-2.amazonaws.com/goodturn-pics/location.png'}}/>
            <View style={styles.hr}></View>
          </View>
          <Text style={styles.title}>Places You Lived</Text>
          {(lived === "") ? <Text>lived</Text> : lived}
        </View>
        <View>
          <View style={styles.hrContainer}>
            <View style={styles.hr}></View>
          </View>
          <Text style={styles.title}>Optional Inputs</Text>
          {(gtkys === "") ? <Text>gtkys</Text> : gtkys}
        </View>
        <TouchableWithoutFeedback  onPress={() => Actions.userProfileEdit()}>
          <View style={styles.editContainer}>
            <Text style={styles.editText}>Save</Text>
          </View>
        </TouchableWithoutFeedback>
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
    height: 26,
    width: 100,
    padding: 5,
    marginHorizontal: 5,
    borderColor: '#d1cbc7',
    borderWidth: 1,
    borderRadius: 5
  },
  textTopContainer: {
    flexDirection: 'row'
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
  },
  editContainer: {
    backgroundColor: '#597d9e',
    height: 40,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10
  },
  editText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  }
};

function mapStateToProps(store) {
  return {
    login: store.login,
    gtkyKEY: store.gtkyKEY,
  };
}

export default connect(mapStateToProps, { changeProfile })(UserProfileEdit);
