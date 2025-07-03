import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  stat: {
    flex: 1,
    textAlign: 'center',
  },
});

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

const StatItem = ({ label, count }) => {
  return <Text style={styles.stat}>{`${label}: ${formatCount(count)}`}</Text>;
};

export default StatItem;