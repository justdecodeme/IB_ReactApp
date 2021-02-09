import React from 'react'
import {
    View, Text, SafeAreaView, StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Button
} from 'react-native'
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
const AllProjects = ({ navigation }) => {
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 100, backgroundColor: "white" }} >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '100%',
                            height: "100%",
                            flexDirection: "row",
                            backgroundColor: "C3C3C3",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            borderBottomColor: "#C3C3C3",
                            borderBottomWidth: 1,
                            // borderRadius: SIZES.radius
                        }}
                    >
                        <Image
                            source={icons.messages}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: "#fa4d29",
                            }}
                        />
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ left: 40, fontSize: 25, fontWeight: "800", backgroundColor: "transparent", color: "#fa4d29", fontStyle: "italic" }}>All Projects</Text>

                        </View>
                        <Image
                            source={icons.forward}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                left: 10,
                                tintColor: "#fa4d29",
                            }}
                        />
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={icons.addition}
                                resizeMode="contain"
                                style={{
                                    width: 50,
                                    height: 50,
                                    left: 30,
                                    tintColor: "#fa4d29",
                                    transform: [{ rotate: '45deg' }]
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View >
            </View >
        )
    }

    function renderCards() {
        return (
            <View style={{ flexDirection: 'column', flex: 1, backgroundColor: "#E4E4E4" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", top: 10 }}>
                    <Text style={{ fontSize: 24, fontWeight: "800", color: "#555657" }} >
                        MY UNSELVED HAZARDS
                    </Text>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: "white", width: 380, left: 18, top: 18, height: 140, borderColor: "#CECECE", borderWidth: 2, borderRadius: 10, justifyContent: "space-around" }}>
                    <Image
                        source={icons.warning}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40,
                            top: 30,
                            left: 10
                            // tintColor: "#555657",
                        }}
                    />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{
                            fontSize: 16, margin: 10, fontWeight: "600", color: "#555657"
                        }}>
                            Resolve Hazard #C05746
                    </Text >
                        <Text style={{ left: 10, color: "#555657" }}>
                            Example Project
                    </Text >
                        <Text style={{ left: 10, top: 10, color: "#555657" }}>
                            Example Team 1
                    </Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ left: -15, top: 10, color: "#555657" }}>
                            Jan 20, 2021
                    </Text>
                        <View style={{ flexDirection: "column", height: 24, width: 68, top: "16%", backgroundColor: "#E55326" }}>
                            <Text style={{ color: "white", padding: 4, fontWeight: "600" }}>
                                Overdue
                    </Text>
                        </View>
                        <View style={{ flexDirection: "column", height: 24, width: 68, top: "20%", backgroundColor: "#ECAE50" }}>
                            <Text style={{ color: "white", padding: 4, fontWeight: "600" }}>
                                Medium
                    </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", top: 38 }}>
                    <Text style={{ fontSize: 24, fontWeight: "800", color: "#555657" }} >
                        MY ACTIONS THIS WEEK
                    </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "white", width: 380, left: 18, top: 50, height: 140, borderColor: "#CECECE", borderWidth: 2, borderRadius: 10 }}>
                    <Image
                        source={icons.loudSpeaker}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40,
                            top: 30,
                            tintColor: "#555657",
                        }}
                    />
                    <View style={{ width: 150 }}>
                        <Text style={{
                            fontSize: 16, margin: 10, fontWeight: "600", color: "#555657"
                        }}>
                            Think of this as a safty to-do list.
                            We gave you some actions to start
                    </Text>
                    </View>
                    <View style={{ flexDirection: "column", height: 24, top: "14%", backgroundColor: "#50AD5A" }}>
                        <Text style={{ color: "white", padding: 4, fontWeight: "600" }}>
                            Overdue
                    </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "white", width: 380, left: 18, top: 60, height: 140, borderColor: "#CECECE", borderWidth: 2, borderRadius: 10 }}>

                    <Image
                        source={icons.inbox}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: "#555657",
                            top: 30
                        }}
                    />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{
                            fontSize: 16, margin: 10, fontWeight: "600", color: "#555657", justifyContent: "space-evenly", top: "25%"
                        }}>
                            Verify Your Email
                    </Text>
                    </View>
                    <View style={{ flexDirection: "column", height: 24, top: "14%", backgroundColor: "#50AD5A" }}>
                        <Text style={{ color: "white", padding: 4, fontWeight: "600" }}>
                            Overdue
                    </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "white", width: 380, left: 18, top: 70, height: 140, borderColor: "#CECECE", borderWidth: 2, borderRadius: 10 }}>
                    <Image
                        source={icons.user}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            top: 30,
                            height: 40,
                            tintColor: "#555657",
                        }}
                    />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{
                            fontSize: 16, margin: 10, fontWeight: "600", color: "#555657", justifyContent: "space-evenly", top: "25%"
                        }}>
                            Complete Your Profile
                    </Text>
                    </View>
                    <View style={{ flexDirection: "column", height: 24, top: "14%", backgroundColor: "#50AD5A" }}>
                        <Text style={{ color: "white", padding: 4, fontWeight: "600" }}>
                            Overdue
                    </Text>
                    </View>
                </View>
            </View >
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderCards()}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff"
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})
export default AllProjects
