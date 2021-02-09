import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import { isIphoneX } from "react-native-iphone-x-helper";

import { AddHazard, AllProjects, Home } from "../screens";

import { COLORS, icons } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
	var isSelected = accessibilityState.selected;

	if (isSelected) {
		return (
			<View style={{ flex: 1, alignItems: "center" }}>
				<View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
					<View style={{ flex: 1, backgroundColor: "#FA4D29" }}></View>
					<Svg width={75} height={61} viewBox="0 0 75 61">
						<Path
							d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
							fill={"#FA4D29"}
						/>
					</Svg>
					<View style={{ flex: 1, backgroundColor: "#FA4D29" }}></View>
				</View>

				<TouchableOpacity
					style={{
						// top: 20,
						justifyContent: "center",
						alignItems: "center",
						width: 60,
						height: 60,
						borderRadius: 25,
						backgroundColor: "transparent",
					}}
					onPress={onPress}
				>
					{children}
				</TouchableOpacity>
			</View>
		);
	} else {
		return (
			<TouchableOpacity
				style={{
					flex: 1,
					height: 60,
					backgroundColor: "#FA4D29",
				}}
				activeOpacity={1}
				onPress={onPress}
			>
				{children}
			</TouchableOpacity>
		);
	}
};

const CustomTabBar = (props) => {
	if (isIphoneX()) {
		return (
			<View>
				<View
					style={{
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						height: 30,
						backgroundColor: "#FA4D29",
					}}
				></View>
				<BottomTabBar {...props.props} />
			</View>
		);
	} else {
		return <BottomTabBar {...props.props} />;
	}
};
const Tabs = ({ navigation, route }) => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: true,
				labelStyle: {
					fontSize: 14,
					color: "white",
					padding: 0,
				},
				style: {
					position: "absolute",
					left: 0,
					bottom: 0,
					right: 0,
					height: 70,
					borderTopWidth: 0,
					borderTopColor: "#DC3E1B",
					borderTopWidth: 1.5,
					backgroundColor: "#FA4D29",
					elevation: 0,
				},
			}}
			tabBar={(props) => <CustomTabBar props={props} />}
		>
			<Tab.Screen
				name="Actions"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={icons.home}
							resizeMode="contain"
							style={{
								width: 30,
								height: 30,
								tintColor: focused ? COLORS.primary : COLORS.secondary,
							}}
						/>
					),
					tabBarButton: (props) => <TabBarCustomButton {...props} />,
				}}
			/>

			<Tab.Screen
				name="Projects"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={icons.location}
							resizeMode="contain"
							style={{
								width: 30,
								height: 30,
								tintColor: focused ? COLORS.primary : COLORS.secondary,
							}}
						/>
					),
					tabBarButton: (props) => <TabBarCustomButton {...props} />,
				}}
			/>
			{route.name === "AddProjects" ? (
				<Tab.Screen
					name="Cancel"
					component={Home}
					options={{
						tabBarLabel: "",
						tabBarIcon: ({ focused }) => (
							<Image
								source={icons.cancel}
								resizeMode="contain"
								style={{
									width: 85,
									height: 100,
									tintColor: "white",
									backgroundColor: "#3E8EC5",
									borderBottomRightRadius: 20,
									borderTopLeftRadius: 20,
									marginBottom: 40,
								}}
							/>
						),
						tabBarButton: (props) => <TabBarCustomButton {...props} />,
					}}
				/>
			) : (
				<Tab.Screen
					name="Add"
					component={AllProjects}
					options={{
						tabBarLabel: "",
						tabBarIcon: ({ focused }) => (
							<Image
								source={icons.addition}
								resizeMode="contain"
								style={{
									width: 85,
									height: 100,
									tintColor: "white",
									backgroundColor: "#3E8EC5",
									borderBottomRightRadius: 20,
									borderTopLeftRadius: 20,
									marginBottom: 40,
								}}
							/>
						),
						tabBarButton: (props) => <TabBarCustomButton {...props} />,
					}}
				/>
			)}

			<Tab.Screen
				name={"sachin"}
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={icons.inbox}
							resizeMode="contain"
							style={{
								width: 30,
								height: 30,
								tintColor: focused ? COLORS.primary : COLORS.secondary,
							}}
						/>
					),
					tabBarButton: (props) => <TabBarCustomButton {...props} />,
				}}
			/>
			<Tab.Screen
				name="Safety HQ"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={icons.safety}
							resizeMode="contain"
							style={{
								width: 30,
								height: 30,
								tintColor: focused ? COLORS.primary : COLORS.secondary,
							}}
						/>
					),
					tabBarButton: (props) => <TabBarCustomButton {...props} />,
				}}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
