import React from 'react'
import {
    View, Text, SafeAreaView, StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Button
} from 'react-native'
import Textarea from 'react-native-textarea';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const AddHazard = ({ route, navigation }) => {
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 80, backgroundColor: "white", marginTop: 10 }}>
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
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ left: 40, fontSize: 25, fontWeight: "800", backgroundColor: "transparent", color: "#fa4d29", fontStyle: "italic" }}>Example Project</Text>
                            <Text style={{ left: 80, fontSize: 20, fontWeight: "500", backgroundColor: "transparent", color: "#fa4d29", fontStyle: "italic" }}>Add Hazard</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={icons.addition}
                                resizeMode="contain"
                                style={{
                                    width: 50,
                                    height: 50,
                                    left: 40,
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
    const displayForm = () => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: "#E4E4E4" }}>
                <View style={{ backgroundColor: "white", width: 380, left: 18, top: 18, height: 1000, borderRadius: 10 }}>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: "#C3C3C3" }} >
                        <Text style={{ fontSize: 18, margin: 18, fontWeight: "500" }}>
                            Details
                    </Text >
                    </View>
                    <Text style={{ fontSize: 18, margin: 18, fontWeight: "600" }}>
                        Description
                    </Text>
                    <Textarea
                        style={{ backgroundColor: "white", width: 350, height: 100, borderColor: "#0E3963", borderWidth: 2, borderRadius: 10, left: 15 }}
                    />
                    <View style={{ height: 80, borderColor: "#0E3963", width: 350, borderWidth: 3, left: 15, borderTopLeftRadius: 15, borderBottomEndRadius: 15 }}>

                        <Image
                            source={icons.camera}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                top: 20,
                                left: 150,
                                tintColor: "black",
                            }}
                        />

                    </View>
                    <Text style={{ fontSize: 14, margin: 18, color: "grey", fontWeight: "800", top: 20 }}>
                        Location - Drag marker icon to desired location
                    </Text>
                    <View style={{ height: 200, backgroundColor: "#DDDDDD", width: 350, left: 15, top: 15 }}>
                    </View>
                </View>
            </View >
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {displayForm()}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
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
export default AddHazard
