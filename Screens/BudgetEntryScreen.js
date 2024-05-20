import {useState, useEffect} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import {addToList} from './redux/action';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
const BudgetEntryScreen = props => {
  const [name, setName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState(0);
  const [actualAmount, setActualAmount] = useState(0);
  const [nameError, setNameError] = useState(false);
  const [plannedAmountError, setplannedAmountError] = useState(false);
  const [actualAmountError, setactualAmountError] = useState(false);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      // Reset all state variables when unmounting the component
      setName('');
      setPlannedAmount(0);
      setActualAmount(0);

      setNameError(false);
      setplannedAmountError(false);
      setactualAmountError(false);
    };
  }, [isFocused]);
  const handleAddToList = () => {
    if (!name) {
      setNameError(true);
    }
    if (!plannedAmount) {
      setplannedAmountError(true);
    }
    if (!actualAmount) {
      setactualAmountError(true);
    }
    if (!name || !plannedAmount || !actualAmount) {
      return false;
    }
    const newItem = {
      id: Math.random().toString(),
      name,
      plannedAmount: parseFloat(plannedAmount),
      actualAmount: parseFloat(actualAmount),
    };
    // Here you can save the newItem to your list or context
    // console.warn('Saved item:', newItem);
    dispatch(addToList(newItem));
    // Clear input fields after saving
    setName('');
    setPlannedAmount('');
    setActualAmount('');
    setNameError(false);
    setplannedAmountError(false);
    setactualAmountError(false);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      {nameError ? (
        <Text style={{color: 'red', marginLeft: 10}}>
          Please enter valid name
        </Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Enter Planned Amount"
        value={plannedAmount}
        onChangeText={text => setPlannedAmount(text)}
      />
      {plannedAmountError ? (
        <Text style={{color: 'red', marginLeft: 10}}>
          Please enter valid amount
        </Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Enter Actual Amount"
        value={actualAmount}
        onChangeText={text => setActualAmount(text)}
      />
      {actualAmountError ? (
        <Text style={{color: 'red', marginLeft: 10}}>
          Please enter valid amount
        </Text>
      ) : null}
      <Button title="save data" onPress={handleAddToList} />
      <Button
        title="go to list"
        onPress={() => props.navigation.navigate('List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 2,
    margin: 20,
  },
});

export default BudgetEntryScreen;
