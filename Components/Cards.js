
import { View, StyleSheet, Dimensions } from "react-native";

import Colors from "../Util/Colors";

function Cards ({children}) {
    return <View style = {styles.inputContainer}>{children}</View>
}

export default Cards;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18:36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation:4,
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.25,
    },
});