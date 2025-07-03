import { Pressable, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: theme.font.family,
  },
});

const AppBarTab = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.tab}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;