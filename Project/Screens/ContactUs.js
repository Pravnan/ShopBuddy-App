// ContactUs.js

import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TextInput } from 'react-native';
import Modal from 'react-native-modal';

const ContactUs = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSignUp = () => {
    // Add your logic for handling sign-up (e.g., send email to server)
    // For now, just show an alert with the entered email
    alert(`Signed up for Newsletter with email: ${email}`);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Sign Up for Newsletter" onPress={toggleModal} />
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text>Enter your email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Your email"
            onChangeText={(text) => setEmail(text)}
          />
          <Button title="Sign Up" onPress={handleSignUp} />
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    padding: 16,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '80%',
  },
});

export default ContactUs;
