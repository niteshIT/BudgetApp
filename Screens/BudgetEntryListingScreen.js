import {useEffect, useState} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteDataById} from './redux/action';

const BudgetEntryListingScreen = () => {
  const listData = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteDataById(id));
  };

  const renderContactItem = ({item}) => (
    <View>
      <View style={styles.contactItemContainer}>
        <View style={styles.contactDetails}>
          <Text style={styles.contactName}>Name: {item.name}</Text>
          <Text style={styles.contactNumber}>
            Planned Amount: {item.plannedAmount}
          </Text>
          <Text style={styles.contactNumber}>
            Actual Amount: {item.actualAmount}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => handleDelete(item.id)}>
          <Text style={styles.saveButtonText}>delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      {listData.length > 0 ? (
        <View>
          <FlatList
            data={listData}
            renderItem={renderContactItem}
            keyExtractor={(item, index) => index.toString()} // You can change this based on your item's unique key
          />
        </View>
      ) : (
        <View>
          <Text style={{margin: 20, color: 'red', fontSize: 20}}>No Items</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  contactItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  saveButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    flex: 0.5,
    margin: 10,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contactDetails: {
    flex: 1,
    margin: 10,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 14,
    color: '#888',
  },
});

export default BudgetEntryListingScreen;
