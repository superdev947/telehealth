import SideMenu from './SideMenu';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../containers/MainScreens/HomeScreen';
import DoctorScreen from '../containers/MainScreens/DoctorScreen';
import AppointmentsScreen from '../containers/MainScreens/AppointmentsScreen';
import BookAppointmentScreen from '../containers/MainScreens/BookAppointmentScreen';
import { LAYOUT } from '../constants';

const HomeNavigator = createStackNavigator(
{
	HomeScreen: {
		screen: HomeScreen,
		navigationOptions: { header: null },
	},
	DoctorScreen: {
		screen: DoctorScreen,
		navigationOptions: { header: null },
	},
	AppointmentsScreen: {
		screen: AppointmentsScreen,
		navigationOptions: { header: null },
	},
	BookAppointmentScreen: {
		screen: BookAppointmentScreen,
		navigationOptions: { header: null },
	},
});

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