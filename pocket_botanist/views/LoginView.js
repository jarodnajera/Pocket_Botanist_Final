import {React, useState} from 'react';
import {StyleSheet, View, TextInput, Pressable, Text} from 'react-native';
import axios from 'axios';

const LoginView = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const LoginWrap = () => {
    Login(navigation, username, password);
  };

  async function Login(nav, un, pw) {
    console.log(`Username: ${un}, Password: ${pw}`);
    let response = await axios.post('http://10.13.224.147:3000/login', {
      username: un,
      password: pw,
    });

    if (response.status === 200) {
      nav.navigate('Home', {user: username});
    }
  }

  return (
    <View style={login_styles.container}>
      <View style={login_styles.title_container}>
        <Text style={login_styles.title}>Welcome to Pocket Botanist!</Text>
      </View>
      <View style={login_styles.input_container}>
        <TextInput
          autoCapitalize={false}
          placeholder="Username"
          onChangeText={text => {
            setUsername(text);
          }}
          value={username}
          style={login_styles.input}
        />
        <TextInput
          autoCapitalize={false}
          placeholder="Password"
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
          style={login_styles.input}
        />
        <Pressable style={login_styles.submit_btn} onPress={LoginWrap}>
          <Text>Login</Text>
        </Pressable>
        <Pressable
          style={login_styles.submit_btn}
          onPress={() => {
            navigation.navigate('Sign Up');
          }}>
          <Text>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const login_styles = StyleSheet.create({
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

export default LoginView;
