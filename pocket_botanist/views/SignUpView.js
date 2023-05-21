import {React, useState} from 'react';
import {StyleSheet, View, TextInput, Pressable, Text} from 'react-native';
import axios from 'axios';

const SignUpView = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const SignUpWrap = () => {
    SignUp(navigation, username, password);
  };

  async function SignUp(nav, un, pw) {
    console.log(`Username: ${un}, Password: ${pw}`);
    let response = await axios.post('http://10.13.224.147:3000/signup', {
      username: un,
      password: pw,
    });

    if (response.status === 200) {
      nav.navigate('Home');
    }
  }

  return (
    <View style={su_styles.container}>
      <View style={su_styles.title_container}>
        <Text style={su_styles.title}>Welcome to Pocket Botanist!</Text>
      </View>
      <View style={su_styles.input_container}>
        <TextInput
          autoCapitalize={false}
          placeholder="Username"
          onChangeText={text => {
            setUsername(text);
          }}
          value={username}
          style={su_styles.input}
        />
        <TextInput
          autoCapitalize={false}
          placeholder="Password"
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
          style={su_styles.input}
        />
        <Pressable style={su_styles.submit_btn} onPress={SignUpWrap}>
          <Text>Sign Up</Text>
        </Pressable>
        <Pressable
          style={su_styles.submit_btn}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const su_styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dbe1ab',
  },
  text: {
    padding: 5,
    fontFamily: 'Cantora One',
  },
  title_container: {
    marginBottom: 80,
  },
  title: {
    padding: 5,
    fontFamily: 'Cantora One',
    fontSize: 40,
    textAlign: 'center',
  },
  input_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'black',
    margin: 5,
    width: '60%',
  },
  submit_btn: {
    marginTop: 15,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#006633',
    color: 'white',
  },
});

export default SignUpView;
