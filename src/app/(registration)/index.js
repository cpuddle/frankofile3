import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationScreen = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement registration logic here
    // Example POST request to your FastAPI backend
    fetch('http://sendmessage.live:8888/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        password: password,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      navigation.navigate('Login');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <ScreenWrapper>
      <View>
      <TextInput
        style={tailwind('border border-gray-300 p-2 rounded mb-4')}
        onChangeText={setFirstName}
        value={first_name}
        placeholder="First Name"
        autoComplete='none'
      />
      <TextInput
        style={tailwind('border border-gray-300 p-2 rounded mb-4')}
        onChangeText={setLastName}
        value={last_name}
        placeholder="Last Name"
        autoComplete='none'
      />
      <TextInput
        style={tailwind('border border-gray-300 p-2 rounded mb-4')}
        onChangeText={setUsername}
        value={username}
        autoCapitalize='none'
        placeholder="Username"
        autoComplete='none'
      />
      <TextInput
        style={tailwind('border border-gray-300 p-2 rounded mb-4')}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        autoCapitalize='none'
        keyboardType="email-address"
        autoComplete='none'
      />
      <TextInput
        style={tailwind('border border-gray-300 p-2 rounded mb-4')}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        autoCapitalize='none'
        secureTextEntry
        autoComplete='none'
      />
      <Button title="Register" onPress={handleRegister} />
      <View style={tailwind('mt-4')}>
        <Text style={styles.color}>Already registered?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.backgroundColor}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignContent: 'center',
    justifyContent: 'center',
    color: '#ebdbb2'
  }
})
export default RegistrationScreen;