import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

// Add the CollapseSidePanel component here
const CollapseSidePanel = ({ onClose }) => {
  return (
    <Animatable.View style={styles.sidePanel} animation="slideInLeft">
      <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
        <MaterialCommunityIcons name="close" size={40} color="white" />
      </TouchableOpacity>
      {/* Replace the text links with a search bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="white"
      />
    </Animatable.View>
  );
};

const StoreLocator = ({ navigation }) => {
  const [nearbyStores, setNearbyStores] = React.useState([]);
  const [showPanel, setShowPanel] = React.useState(false);

  React.useEffect(() => {
    // Placeholder for fetching nearby stores based on user's location
    // You would integrate with location services and API calls here
    // Update the 'nearbyStores' state with the fetched data
    const fetchedStores = [
      {
        id: 1,
        name: 'Green Grocers',
        address: '123 Market St, Cityville',
        hours: '9:00 AM - 8:00 PM',
        contact: '123-456-7890',
        image: require('../assets/Store1.jpg'),
        isOpen: true,
      },
      {
        id: 2,
        name: 'Fresh Mart',
        address: '456 Main St, Townsville',
        hours: '8:00 AM - 9:00 PM',
        contact: '987-654-3210',
        image: require('../assets/Store2.jpg'),
        isOpen: false,
      },
      // Add more stores as needed
      // ...
      // Example additional stores
      {
        id: 3,
        name: 'Organic Delights',
        address: '789 High St, Villagetown',
        hours: '10:00 AM - 7:00 PM',
        contact: '567-890-1234',
        image: require('../assets/Store3.jpg'),
        isOpen: true,
      },
      {
        id: 4,
        name: 'Super Savers',
        address: '101 Oak St, Forestville',
        hours: '7:00 AM - 10:00 PM',
        contact: '210-987-6543',
        image: require('../assets/Store4.jpg'),
        isOpen: false,
      },
      {
        id: 5,
        name: 'Market Fresh',
        address: '234 Pine St, Grovetown',
        hours: '10:00 AM - 6:00 PM',
        contact: '345-678-9012',
        image: require('../assets/Store5.jpg'),
        isOpen: true,
      },
      {
        id: 6,
        name: 'City Grocers',
        address: '567 Elm St, Metropolis',
        hours: '8:00 AM - 7:00 PM',
        contact: '876-543-2109',
        image: require('../assets/Store6.jpg'),
        isOpen: false,
      },
    ];
    setNearbyStores(fetchedStores);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Nearby Stores</Text>
        <TouchableOpacity onPress={() => setShowPanel(!showPanel)}>
          <MaterialCommunityIcons name="menu" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {nearbyStores.map((store) => (
          <TouchableOpacity
            key={store.id}
            style={styles.storeCard}
            onPress={() => console.log('Store details clicked:', store)}
          >
            <Image source={store.image} style={styles.storeImage} />
            <View style={styles.storeInfo}>
              <Text style={styles.storeName}>{store.name}</Text>
              <Text style={styles.storeAddress}>{store.address}</Text>
              <Text style={styles.storeHours}>Hours: {store.hours}</Text>
            </View>
            <View style={styles.indicatorContainer}>
              <Animatable.View
                animation={store.isOpen ? 'pulse' : null}
                duration={1000}
                iterationCount="infinite"
                style={[
                  styles.indicator,
                  { backgroundColor: store.isOpen ? '#4CAF50' : '#FF5733' },
                ]}
              />
              <Text style={styles.indicatorLabel}>{store.isOpen ? 'Open' : 'Closed'}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Side Panel */}
      {showPanel && <CollapseSidePanel onClose={() => setShowPanel(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#04ac94',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  storeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center', // Align items horizontally
  },
  storeImage: {
    width: '30%', // Adjust the width as needed
    height: 150,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  storeInfo: {
    flex: 1, // Take remaining space in the row
    padding: 16,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  storeAddress: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  storeHours: {
    fontSize: 14,
    color: '#666666',
  },
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16, // Add some margin to separate from the store information
  },
  indicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginVertical: 4,
    backgroundColor: '#FF5733', // Choose a color for the glowing effect
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black', // Match the background color
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8, // Adjust the opacity for the glowing effect
    shadowRadius: 10, // Adjust the radius for the spread of the glow
    borderWidth: 1,
    borderColor: 'black', // Border color matching the background color
    borderBottomWidth: 3, // Add a bottom border for a slight 3D effect
  },
  indicatorLabel: {
    color: '#666666',
    fontSize: 12,
  },
  // Updated CollapseSidePanel styles
  sidePanel: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 650,
    width: 250,
    backgroundColor: '#111',
    padding: 20, // Adjust the padding as needed
    zIndex: 2,
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 3,
  },
  searchBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    borderRadius: 8,
    padding: 8,
    marginTop: 70, // Adjust the marginTop to create space between the close button and search bar
    marginBottom: 8,
  },
});

export default StoreLocator;
