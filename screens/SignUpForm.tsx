import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import FormComponent from '../components/formComponent';

const SignUpForm = (props: any) => {
  const nav = props.navigation;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logo}> logo</View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigate('Home')}
        >
          Back
        </TouchableOpacity>
        <FormComponent />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    height: 10,
    padding: 20,
    margin: 10,
    borderRadius: 80,
    alignItems: 'stretch',
    backgroundColor: '#5f9ea0'
  },
  button: {
    backgroundColor: '#00ced1',
    height: 5,
    alignSelf: 'center',
    margin: 5,
    marginTop: 25,
    padding: 15,
    textAlign: 'center',
    borderRadius: 15
  }
});

export default SignUpForm;
