import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { AddHazard, AllProjects } from "./screens";
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName={"Home"}
			>
				<Stack.Screen name="Home" component={Tabs} />
				<Stack.Screen name="AddHazard" component={AddHazard} />
				<Stack.Screen name="AllProjects" component={AllProjects} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;