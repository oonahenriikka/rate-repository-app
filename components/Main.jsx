import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppBar />
        <Stack.Navigator>
          <Stack.Screen name="RepositoryList" component={RepositoryList} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

export default Main;