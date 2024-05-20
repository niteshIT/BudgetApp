import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BudgetEntryScreen from './Screens/BudgetEntryScreen';
import BudgetEntryListingScreen from './Screens/BudgetEntryListingScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={BudgetEntryScreen} />
        <Stack.Screen name="List" component={BudgetEntryListingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
