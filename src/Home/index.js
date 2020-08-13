import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    }
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'rgb(29,216,200)',
      },
      gestureEnabled: true,
      gestureResponseDistance: 100,
    },
  },
);
export default HomeStackNavigator;
