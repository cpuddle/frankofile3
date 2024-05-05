import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, TouchableOpacity } from 'react-native';
import { defaultStyles } from "@/styles"
import { Link } from 'expo-router';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    // Example POST request to your FastAPI backend
    fetch('http://sendmessage.live:8888/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      if (data.success) {
        // Navigate to the home page
        navigation.navigate('Home'); // Replace 'HomePage' with the actual name of your home page route
      } else {
        // Handle unsuccessful login
        Alert.alert('Login Failed', 'Invalid email or password');
      }

      // Handle navigation or state update here based on response
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <View style={defaultStyles.container} className='flex-1 justify-center items-center'>
      <TextInput 
        className='text-2xl font-bold bg-aqua text-white'
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        autoCapitalize='none'
        keyboardType="email-address"
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        autoCapitalize='none'
        secureTextEntry
      />
      
      <View>
        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
        <View>
          <Text>
            Register Here
          </Text>
          <TouchableOpacity>
            <Text>Register</Text>
          </TouchableOpacity>
          <View>
              <Link href={"(tabs)/(songs)"}>
                <Text>Bypass</Text>
              </Link>
          </View>
        </View>
      </View>
    </View>
  );
};


export default LoginScreen