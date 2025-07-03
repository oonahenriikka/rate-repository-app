import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import LanguageTag from './LanguageTag';
import StatItem from './StatItem';

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.fullName}>{item.fullName}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <LanguageTag language={item.language} />
        <View style={styles.statsContainer}>
          <StatItem label="Stars" count={item.stargazersCount} />
          <StatItem label="Forks" count={item.forksCount} />
          <StatItem label="Rating" count={item.ratingAverage} />
          <StatItem label="Reviews" count={item.reviewCount} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: theme.colors.itemBackground,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    fontFamily: theme.font.family,
  },
  description: {
    color: '#666',
    marginBottom: 10,
    fontFamily: theme.font.family,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default RepositoryItem;