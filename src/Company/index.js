

import {createStackNavigator} from 'react-navigation-stack'
import  CompanyScreen from './CompanyScreen'
import CompanyDetail from './CompanyDetail';
    
const CompanyStackNavigator = createStackNavigator(
    {
        Company:{
            screen:CompanyScreen
        },
        CompanyDetail: {
            screen: CompanyDetail
        },
    },
    {   
        initialRouteName:'Company',
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
    }
)

CompanyStackNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
    return {
      tabBarVisible,
    };
};
  
export default CompanyStackNavigator;