import React, {useEffect, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';

const SignUpTemplate = {
  name: {value: '', error: ''},
  phone: {value: '', error: ''},
  email: {value: '', error: ''},
  password: {value: '', error: ''},
  confirmPassword: {value: '', error: ''},
};

export default function SignUp() {
  const [signUpForm, setSignUpForm] = useState({...SignUpTemplate});

  const [loading, setLoading] = useState(false);

  const handleFormError = (key: string, value: string) => {
    let error = '';
    // data validation
    if (key === 'name') {
      if (value.length < 3) {
        error = 'Name must be at least 3 characters long';
      }
    } else if (key === 'phone') {
      if (value.length !== 10) {
        error = 'Name must include 10 characters only';
      }
    } else if (key === 'email') {
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
        error = 'Invalid Email';
      }
    } else if (key === 'password') {
      if (value.length < 6) {
        error = 'Password must be at least 6 character long';
      }
    } else if (key === 'confirmPassword') {
      if (value !== signUpForm.password.value) {
        error = 'Password does not match';
      }
    }
    return error;
  };

  const handleForm = (key: string, value: string) => {
    let currentSignUpForm: any = {...signUpForm};

    //Second way to update state
    currentSignUpForm[key]['value'] = value;
    currentSignUpForm[key]['error'] = handleFormError(key, value);
    setSignUpForm(currentSignUpForm);
  };

  useEffect(() => {
    console.log('signUpForm', signUpForm);
  }, [signUpForm]);

  const extractFormData = () => {
    let data: any = {};
    Object.entries(signUpForm).forEach(([key, value]) => {
      data[key] = value.value;
    });
    delete data['confirmPassword'];
    return data;
  };

  const postUser = async (data: any) => {
    try {
      const res = await axios.post('http://localhost:3000/users', data, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': 'dasdafsftasvavydsvya',
        },
      });
      return res;
    } catch (err) {
      throw err;
    }
  };

  const handleSubmit = async () => {
    const data = extractFormData();
    console.log('handleSubmit_signUpForm', signUpForm);
    console.log('handleSubmit_extractedData', data);
    setLoading(true);
    try {
      const response: any = await postUser(data);
      if (response.status === 200) {
        setLoading(false);
        Alert.alert('Success', 'user created successfully');
      } else {
        throw response;
      }
    } catch (error: any) {
      //error handling
      console.log('handleSubmit_error', error);
      setTimeout(() => {
        setLoading(false);
        Alert.alert('Error', error.message);
      }, 5000);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#000"
            value={signUpForm.name.value}
            onChangeText={text => handleForm('name', text)}
          />
          <Text style={styles.error}>{signUpForm.name.error}</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            placeholderTextColor="#000"
            keyboardType="numeric"
            value={signUpForm.phone.value}
            onChangeText={text => handleForm('phone', text)}
          />
          <Text style={styles.error}>{signUpForm.phone.error}</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000"
            value={signUpForm.email.value}
            onChangeText={text => handleForm('email', text)}
          />
          <Text style={styles.error}>{signUpForm.email.error}</Text>

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#000"
            value={signUpForm.password.value}
            onChangeText={text => handleForm('password', text)}
          />
          <Text style={styles.error}>{signUpForm.password.error}</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#000"
            value={signUpForm.confirmPassword.value}
            onChangeText={text => handleForm('confirmPassword', text)}
          />
          <Text style={styles.error}>{signUpForm.confirmPassword.error}</Text>

          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    marginTop: 4,
    marginBottom: 15,
    color: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formContainer: {
    width: '85%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },
  heading: {
    fontSize: 22,
    color: '#333',
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    color: '#000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#aaa',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
  btnContainer: {
    width: 150,
    alignSelf: 'center',
    marginTop: 30,
  },
});
