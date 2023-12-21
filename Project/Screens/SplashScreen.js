import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

export default function SplashScreen({ navigation }) {
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
    const [isResetPasswordModalVisible, setResetPasswordModalVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  
    // ... (other functions and useEffect)
  
    const handleLogin = () => {
      // Implement your login logic here
      console.log('Logging in with:', { username, password });
  
      // For demonstration purposes, show a success modal
      setSuccessModalVisible(true);
    };
  
    const handleSignup = () => {
      // Implement your signup logic here
      console.log('Signing up...');
      // For demonstration purposes, navigate to the Signup screen
      navigation.replace('Signup');
    };
  
    const handleForgotPassword = () => {
      // Show the modal for resetting the password
      setResetPasswordModalVisible(true);
    };
  
    const handleResetPassword = () => {
      // Implement your logic for resetting the password with the entered email
      console.log('Reset Pressed with Email:', email);
  
      // Close the modal after handling password reset
      setResetPasswordModalVisible(false);
    };
  
    const handleDone = () => {
      // Implement your logic when the "Done" button is pressed
      setSuccessModalVisible(false);
  
      // For demonstration purposes, navigate to the HomeScreen after login
      navigation.replace('Home');
    };
  
    return (
      <View style={styles.container}>
        {/* Login Successful Modal */}
        <Modal isVisible={isSuccessModalVisible} animationIn="fadeIn" animationOut="fadeOut">
          <View style={styles.modalContent}>
            <Text>Login Successful!</Text>
            <TouchableOpacity onPress={handleDone}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
        </Modal>
  
        {/* Reset Password Modal */}
        <Modal isVisible={isResetPasswordModalVisible} animationIn="fadeIn" animationOut="fadeOut">
          <View style={styles.modalContentrp}>
            <Text>Enter your email to reset password:</Text>
            {/* Add TextInput for email */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TouchableOpacity onPress={handleResetPassword}>
              <Text>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </Modal>
  
        {/* Your component JSX */}
        <View style={styles.logoContainer}>
          {/* Your logo image */}
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
  
        {/* Login form */}
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Welcome to Shopping Buddy</Text>
  
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
  
          <TouchableOpacity style={styles.buttonln} onPress={handleLogin}>
            <Text style={styles.buttonlnText}>Login</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.buttonsp} onPress={handleSignup}>
            <Text style={styles.buttonspText}>SignUp</Text>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.fpText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  loginContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 8,
  },
  buttonln: {
    backgroundColor: '#04ac94',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginTop: 10,
  },
  buttonlnText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonsp: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginTop: 10,
  },
  buttonspText: {
    color: 'white',
    textAlign: 'center',
  },
  fpText: {
    color: '#3498db',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContentrp: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContentrptext: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
