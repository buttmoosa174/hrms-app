import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import SelfService from './components/SelfService';
import PasswordManagement from './components/PasswordManagement';
import MyInformation from './components/MyInformation';
import { CardNoProvider } from './Store/CardNoContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <CardNoProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={ { headerShown: false } }>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={Signup} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="SelfService" component={SelfService} />
            <Stack.Screen name="PasswordManagement" component={PasswordManagement} />
            <Stack.Screen name="MyInformation" component={MyInformation} />
          </Stack.Navigator>
        </NavigationContainer>
      </CardNoProvider>
    </View>
  );
}

