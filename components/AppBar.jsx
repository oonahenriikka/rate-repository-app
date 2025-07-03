import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  scrollView: {
    flexDirection: 'row', 
  },
});

const AppBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <AppBarTab
          text="Repositories"
          onPress={() => navigation.navigate('RepositoryList')}
        />
        <AppBarTab
          text="Sign in"
          onPress={() => navigation.navigate('SignIn')}
        />
      </ScrollView>
    </View>
  );
};

export default AppBar;