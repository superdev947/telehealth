import SideMenu from './SideMenu';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '../containers/AuthScreen/SignInScreen';
import SignUpScreen from '../containers/AuthScreen/SignUpScreen';
import ForgetScreen from '../containers/AuthScreen/ForgetScreen';
import VerificationScreen from '../containers/AuthScreen/VerificationScreen';
import ResetpasswordScreen from '../containers/AuthScreen/ResetpasswordScreen';
import ExploreScreen from '../containers/AuthScreen/ExploreScreen';
import HomeScreen from '../containers/MainScreens/HomeScreen';
import { LAYOUT } from '../constants';

const HomeNavigator = createStackNavigator(
	{
		ExploreScreen: {
			screen: ExploreScreen,
			navigationOptions: { header: null },
		},
		SignInScreen: {
			screen: SignInScreen,
			navigationOptions: { header: null },
		},
		SignUpScreen: {
			screen: SignUpScreen,
			navigationOptions: { header: null },
		},
		ForgetScreen: {
			screen: ForgetScreen,
			navigationOptions: { header: null },
		},
		VerificationScreen: {
			screen: VerificationScreen,
			navigationOptions: { header: null },
		},
		ResetpasswordScreen: {
			screen: ResetpasswordScreen,
			navigationOptions: { header: null },
		},

		HomeScreen: {
			screen: HomeScreen,
			navigationOptions: { header: null },
		},
	},
	{
		initialRouteName: 'ExploreScreen',
	}
)

const RootStack = createDrawerNavigator({
Home: {
	screen: HomeNavigator,
	},
}, {
	contentComponent: SideMenu,
	drawerWidth: LAYOUT.window.width * .7,
	drawerOpenRoute: 'DrawerOpen',
	drawerCloseRoute: 'DrawerClose',
	drawerToggleRoute: 'DrawerToggle',
});
	
export default createAppContainer(RootStack)