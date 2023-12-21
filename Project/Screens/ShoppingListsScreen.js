import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  Modal,
} from 'react-native';

const ShoppingListsScreen = () => {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');
  const [selectedList, setSelectedList] = useState(null);
  const [isAddItemsEnabled, setAddItemsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemBrand, setItemBrand] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [editedItemIndex, setEditedItemIndex] = useState(null);
  const [listVersion, setListVersion] = useState(0);

  const addShoppingList = () => {
    if (newListName.trim() !== '') {
      setLists((prevLists) => [...prevLists, { name: newListName, items: [] }]);
      setNewListName('');
      setListVersion((prevVersion) => prevVersion + 1);
    }
  };

  const removeShoppingList = () => {
    if (selectedList !== null) {
      setLists((prevLists) => prevLists.filter((_, index) => index !== selectedList));
      setSelectedList(null);
      setAddItemsEnabled(false);
      setListVersion((prevVersion) => prevVersion + 1);
    }
  };

  const handleLongPress = (index) => {
    setSelectedList(index);
    setAddItemsEnabled(true);
  };

  const addNewItem = () => {
    if (selectedList !== null) {
      setModalVisible(true);
    }
  };

  const saveNewItem = () => {
    if (itemName && itemBrand && itemPrice) {
      setLists((prevLists) => {
        const newLists = [...prevLists];
        if (editedItemIndex !== null) {
          // Update existing item
          newLists[selectedList].items[editedItemIndex] = {
            name: itemName,
            brand: itemBrand,
            price: itemPrice,
          };
        } else {
          // Add new item
          newLists[selectedList].items.push({
            name: itemName,
            brand: itemBrand,
            price: itemPrice,
          });
        }
        return newLists;
      });
      setModalVisible(false);
      setEditedItemIndex(null);
      setListVersion((prevVersion) => prevVersion + 1);
    }
  };

  const showActionSheet = (index) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Edit', 'Delete'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        handleActionSheet(index, buttonIndex);
      }
    );
  };

  const handleActionSheet = (index, buttonIndex) => {
    if (buttonIndex === 1) {
      // Edit
      setEditedItemIndex(index);
      setItemName(lists[selectedList].items[index].name);
      setItemBrand(lists[selectedList].items[index].brand);
      setItemPrice(lists[selectedList].items[index].price);
      setModalVisible(true);
    } else if (buttonIndex === 2) {
      // Delete
      setLists((prevLists) => {
        const newLists = [...prevLists];
        newLists[selectedList].items.splice(index, 1);
        return newLists;
      });
      setListVersion((prevVersion) => prevVersion + 1);
    }
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.listContainer, index === selectedList && styles.selectedList]}
      onLongPress={() => handleLongPress(index)}
    >
      <Text style={styles.listName}>{`${index + 1}. ${item.name}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Lists</Text>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter list name"
            value={newListName}
            onChangeText={(text) => setNewListName(text)}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.addButton} onPress={addShoppingList}>
            <Text style={styles.addButtonText}>Add List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.addItemsButton,
              { opacity: selectedList !== null ? 1 : 0.5 },
            ]}
            onPress={addNewItem}
            disabled={selectedList === null}
          >
            <Text style={styles.addItemsButtonText}>Add Items</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.removeButton, { opacity: selectedList !== null ? 1 : 0.5 }]}
            onPress={removeShoppingList}
            disabled={selectedList === null}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        key={`${listVersion}`} // Use the list version as the key
        data={lists}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      {/* Modal for adding/editing item */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {editedItemIndex !== null ? 'Edit Item' : 'Add New Item'}
            </Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Name"
              value={itemName}
              onChangeText={(text) => setItemName(text)}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Brand"
              value={itemBrand}
              onChangeText={(text) => setItemBrand(text)}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Price"
              value={itemPrice}
              onChangeText={(text) => setItemPrice(text)}
            />
            <TouchableOpacity style={styles.modalButton} onPress={saveNewItem}>
              <Text style={styles.modalButtonText}>
                {editedItemIndex !== null ? 'Update' : 'Save'}
              </Text>
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  textInputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  addButton: {
    backgroundColor: '#04ac94',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  addItemsButton: {
    backgroundColor: '#4285f4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  addItemsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  listName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedList: {
    borderColor: '#04ac94',
    borderWidth: 2,
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
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalButton: {
    backgroundColor: '#04ac94',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ShoppingListsScreen;
