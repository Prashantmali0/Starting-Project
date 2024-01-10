import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../Util/Colors";

function NumberContainer({children}) {
    return(
        <View style={styles.container}>
            <Text style = {styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWdth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding:deviceWdth < 380 ? 12:24,
        margin:deviceWdth < 380? 12:24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText:{
        color:Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    }

});