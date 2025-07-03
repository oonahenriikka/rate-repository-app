import { Platform } from 'react-native';

export default {
  colors: {
    appBarBackground: '#24292e',
    primary: '#0366d6',
    mainBackground: '#e1e4e8',
    itemBackground: '#ffffff',
  },
  font: {
    family: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System', // Fallback for other platforms
    }),
  },
};