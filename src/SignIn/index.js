import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Image,
  ScrollView,
} from 'react-native';

export default function SignIn() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [DOB, setDOB] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const nextButtonHandler = () => {
    //validation if any textfield is blank
    if (!name) {
      Alert.alert('', 'Please enter your name');
      return false;
    } else if (!email) {
      Alert.alert('', 'Please enter your email');
      return false;
    } else if (!DOB) {
      Alert.alert('', 'Please enter your DOB');
      return false;
    } else if (!country) {
      Alert.alert('', 'Please enter your country');
      return false;
    } else if (!phoneNumber) {
      Alert.alert('', 'Phone number is required');
    } else {
      Alert.alert(
        '',
        `
    ${name}
    ${email}
    ${DOB}
    ${country}
    ${phoneNumber}`,
      );
    }
    //This resets textfield after next button click
    setName('');
    setEmail('');
    setDOB('');
    setCountry('');
    setPhoneNumber('');
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
        <View style={{backgroundColor: '#fff'}}>
          <Image
            style={{right: 150, width: 20, height: 20}}
            source={require('../assets/Left_Arrow_Icon.png')}
            resizeMode="cover"
          />
        </View>
        <Text
          style={{
            color: '#000',
            right: 150,
            fontSize: 16,
            color: '#5a5868',
            fontWeight: 'bold',
          }}>
          SIGNIN
        </Text>
      </View>
      <View
        style={{
          top: 90,
          zIndex: 1,
          borderColor: '#fff',
          borderRadius: 70,
          borderWidth: 2,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 4,
        }}>
        <Image
          style={{borderRadius: 70, width: 120, height: 120}}
          source={require('../assets/Profile_DP.png')}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          top: 55,
          left: 45,
          zIndex: 2,
          borderRadius: 70,
          backgroundColor: '#fff',
        }}>
        <Image
          style={{borderRadius: 70, width: 30, height: 30}}
          source={require('../assets/Edit_Icon.png')}
          resizeMode="cover"
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.nameContainer}>
          <Text style={{color: '#b30e0f', fontWeight: 'bold'}}>
            Samuel_ceaser
          </Text>
        </View>
        <Text style={styles.heading}>PERSONAL INFORMATION</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          placeholderTextColor="#b8bbbb"
          onChangeText={name => setName(name)}
        />
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email Address"
          placeholderTextColor="#b8bbbb"
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          placeholder="DOB"
          value={DOB}
          placeholderTextColor="#b8bbbb"
          onChangeText={DOB => setDOB(DOB)}
        />
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={country}
          placeholderTextColor="#b8bbbb"
          onChangeText={country => setCountry(country)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number *"
          value={phoneNumber}
          placeholderTextColor="#b8bbbb"
          keyboardType="numeric"
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
        />
        <TouchableOpacity onPress={nextButtonHandler}>
          <View style={styles.btnContainer}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
  },

  formContainer: {
    width: '93%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#eeee',
  },
  heading: {
    fontSize: 12,
    color: '#5a5868',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#aaa',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  nameContainer: {
    marginTop: 80,
    backgroundColor: '#fff',
    width: 330,
    height: 40,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  btnContainer: {
    backgroundColor: '#b30e0f',
    width: 330,
    height: 40,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
