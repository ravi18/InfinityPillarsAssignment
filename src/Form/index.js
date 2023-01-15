import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import SignUp from '../SignUp';
import SignIn from '../SignIn';

export default function Form() {
  const [active, setActive] = React.useState('SignInScreen');
  const [signInButton, setSignInButton] = React.useState('SignInButton');

  const SignInToggleHandler = () => {
    setActive('SignInScreen');
    setSignInButton('SignInButton');
  };

  const SignUpToggleHandler = () => {
    setActive('SignUpScreen');
    setSignInButton('SignUpButton');
  };

  return (
    <View
      style={{
        backgroundColor: signInButton === 'SignUpButton' ? '#eee' : '#fff',
        ...styles.mainFormContainer,
      }}>
      {active === 'SignInScreen' && <SignIn />}
      {active === 'SignUpScreen' && <SignUp />}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          justifyContent: 'space-evenly',
          bottom: 50,
        }}>
        <TouchableOpacity onPress={SignInToggleHandler}>
          <View
            style={{
              height: 45,
              width: 140,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor:
                signInButton === 'SignInButton' ? '#b30e0f' : 'transparent',
            }}>
            <Text
              style={{
                color: signInButton === 'SignInButton' ? '#fff' : '#000',
              }}>
              Sign In
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={SignUpToggleHandler}>
          <View
            style={{
              height: 45,
              width: 140,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor:
                signInButton === 'SignUpButton' ? '#2197f2' : 'transparent',
            }}>
            <Text
              style={{
                color: signInButton === 'SignUpButton' ? '#fff' : '#000',
              }}>
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainFormContainer: {
    flex: 1,
  },
});
