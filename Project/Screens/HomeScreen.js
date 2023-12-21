import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const buttons = [
    { screenName: 'ShoppingListsScreen', text: 'Shopping Lists', icon: require('../images/note.png') },
    { screenName: 'FoodBlogScreen', text: 'Food Blog' , icon: require('../assets/barcode.png') },
    { screenName: 'StoreLocator', text: 'Store Locator' , icon: require('../assets/store.png')},
    { screenName: 'ContactUs', text: 'Contact Us' , icon: require('../assets/expense.png')},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>Welcome to Shop Buddy!</Text>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigateToScreen(button.screenName)}
          >
            <View style={styles.buttonContent}>
              {button.icon && <Image source={button.icon} style={styles.icon} />}
              <Text style={styles.buttonText}>{button.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#04ac94',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: '700',
    color: 'white',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#04ac94',
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Add this line
  },
  icon: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  buttonText: {
    color: '#04ac94',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default HomeScreen;
