// FoodBlogScreen.js

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Image, StyleSheet} from 'react-native';


// Sample data for recipes
const recipeData = [
  {
    id: '1',
    name: 'Spaghetti Bolognese',
    ingredients: ['Pasta', 'Tomato Sauce', 'Ground Beef', 'Onion', 'Garlic'],
    cookingTime: '30 minutes',
    serves: '4',
    image: require('../images/spaghetti.jpg'), // Replace with the actual image path
  },
  {
    id: '2',
    name: 'Grilled Lemon Herb Chicken',
    ingredients: ['Chicken breasts', 'Lemon juice', 'Olive oil', 'Garlic', 'Fresh herbs (rosemary, thyme)', 'Salt and pepper to taste'],
    cookingTime: '20 minutes',
    serves: '2',
    image: require('../images/Grilled Lemon Herb Chicken.jpg'), // Replace with the actual image path
  },
  {
    id: '3',
    name: 'Vegetarian  Spinach ',
    ingredients: [
      'Bell peppers',
      'Spinach',
      'Feta cheese',
      'Quinoa',
      'Cherry tomatoes',
      'Red onion',
      'Olive oil',
      'Italian seasoning',
      'Salt and pepper to taste',
    ],
    cookingTime: '40 minutes',
    serves: '3',
    image: require('../images/Vegetarian Spinach.jpg'), // Replace with the actual image path
  },

  {
    id: '3',
    name: 'Teriyaki Salmon Bowl',
    ingredients: [
      'Salmon fillets',
      'Teriyaki sauce',
      'Brown rice',
      'Broccoli',
      'Carrots',
      'Sesame seeds',
      'Green onions',
    ],
    cookingTime: '25 minutes',
    serves: '2',
    image: require('../images/teriyaki salmon bowl.jpg'),
  },

  {
    id: '4',
    name: 'Mango Avocado Salad',
    ingredients: [
      'Mango',
      'Avocado',
      'Mixed greens',
      'Red onion',
      'Cherry tomatoes',
      'Feta cheese',
      'Balsamic vinaigrette',
    ],
    cookingTime: '15 minutes',
    serves: '4',
    image: require('../images/Mango Avocado Salad.jpg'),
  },

  {
    id: '5',
    name: 'Pasta Primavera',
    ingredients: [
      'Pasta',
      'Assorted vegetables (zucchini, bell peppers, cherry tomatoes)',
      'Olive oil',
      'Garlic',
      'Parmesan cheese',
      'Fresh basil',
    ],
    cookingTime: '30 minutes',
    serves: '3',
    image: require('../images/Pasta Primavera.jpg'),
  },

  {
    id: '6',
    name: 'Chicken and Vegetable Stir-Fry',
    ingredients: [
      'Chicken breast strips',
      'Broccoli',
      'Carrots',
      'Snap peas',
      'Soy sauce',
      'Sesame oil',
      'Ginger',
      'Garlic',
    ],
    cookingTime: '20 minutes',
    serves: '2',
    image: require('../images/Chicken and Vegetable Stir-Fry.jpg'),
  },

  {
    id: '7',
    name: 'Caprese Salad',
    ingredients: [
      'Tomatoes',
      'Fresh mozzarella',
      'Fresh basil',
      'Balsamic glaze',
      'Olive oil',
      'Salt and pepper to taste',
    ],
    cookingTime: '10 minutes',
    serves: '2',
    image: require('../images/Caprese Salad.jpg'),
  },

  {
    id: '8',
    name: 'Shrimp Scampi Pasta',
    ingredients: [
      'Shrimp',
      'Linguine pasta',
      'Garlic',
      'White wine',
      'Lemon juice',
      'Red pepper flakes',
      'Parsley',
      'Parmesan cheese',
    ],
    cookingTime: '25 minutes',
    serves: '2',
    image: require('../images/Shrimp Scampi Pasta.jpg'),
  },

  {
    id: '9',
    name: 'Vegetable Curry',
    ingredients: [
      'Mixed vegetables (potatoes, carrots, peas, cauliflower)',
      'Curry sauce',
      'Coconut milk',
      'Onion',
      'Garlic',
      'Ginger',
      'Basmati rice',
    ],
    cookingTime: '35 minutes',
    serves: '4',
    image: require('../images/Vegetable Curry.jpg'),
  },

  {
    id: '10',
    name: 'Lemon Blueberry Pancakes',
    ingredients: [
      'Pancake mix',
      'Blueberries',
      'Lemon zest',
      'Milk',
      'Egg',
      'Maple syrup',
      'Butter',
    ],
    cookingTime: '15 minutes',
    serves: '2',
    image: require('../images/Lemon Blueberry Pancakes.jpg'),
  },

  {
    id: '11',
    name: 'Ratatouille',
    ingredients: [
      'Eggplant',
      'Zucchini',
      'Bell peppers',
      'Tomatoes',
      'Onion',
      'Garlic',
      'Fresh thyme',
      'Olive oil',
    ],
    cookingTime: '45 minutes',
    serves: '4',
    image: require('../images/Ratatouille.jpg'),
  },


];

const FoodBlogScreen = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
  
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={styles.recipeButton}
        onPress={() => handleRecipePress(item)}
      >

          <View style={styles.recipeCard}>
            <Image source={item.image} style={styles.recipeImage} />
            <View style={styles.recipeNameContainer}>
              <Text style={styles.recipeName}>{item.name}</Text>
            </View>
          </View>

      </TouchableOpacity>
    );

  const handleRecipePress = (recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Recipe Blog</Text>
      <FlatList
        data={recipeData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={3} 
      />


      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={selectedRecipe?.image} style={styles.recipeImage} />
            <View style={styles.recipeNameContainer}>
              <Text style={styles.recipeName}>{selectedRecipe?.name}</Text>
            </View>
            <Text style={styles.recipeDetail}>Ingredients: {selectedRecipe?.ingredients.join(', ')}</Text>
            <Text style={styles.recipeDetail}>Cooking Time: {selectedRecipe?.cookingTime}</Text>
            <Text style={styles.recipeDetail}>Serves: {selectedRecipe?.serves}</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    sectionHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      color: '#04ac94',
    },
    recipeButton: {
      flex: 1,
      margin: 5,
    },
    recipeCard: {
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: '#04ac94', 
      elevation: 200, 
    },


    recipeImage: {
      width: '100%',
      height: 150,
    },
    recipeNameContainer: {
      height: 50, 
      backgroundColor: 'white',
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    recipeName: {
      textAlign: 'center',
      color: '#04ac94',
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      elevation: 50,
    },
    closeButton: {
      color: '#04ac94',
      marginTop: 10,
    },
    recipeDetail: {
      marginVertical: 5,
      color: '#333',
    },
  });
  
  export default FoodBlogScreen;