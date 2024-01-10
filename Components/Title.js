import { Text, StyleSheet } from "react-native";

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
        borderWidth:2,
        borderColor: 'white',
        maxWidth: '80%',
        width: 300
    }
});
