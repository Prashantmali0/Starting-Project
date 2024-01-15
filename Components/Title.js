import { Text, StyleSheet, Platform } from "react-native";

function Title({children}) {
    return <Text style ={styles.title}> {children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding:2,
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({android:2, ios:0, web: 0}),
        borderColor: 'white',
        maxWidth: '80%',
        width: 300
    }
});
