
import { View, Image,Text, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Title from "../Components/Title";
import Colors from "../Util/Colors";
import PrimaryButton from '../Components/PrimaryButton';

function GameOver ({roundsNumber,userNumber,onStartNewGame}) {
    const {width,height} = useWindowDimensions();

    let imgSize = 300; 

    if(width < 380){
        imgSize = 150;
    }

    if(height < 400) {
        imgSize = 80;
    }

    const imgStyle = {
        width: imgSize,
        height: imgSize,
        borderRadius: imgSize/2,
    };

return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer,imgStyle]}>
            <Image 
            style={styles.image} 
            source={require('../assets/Image/success.png')}/>
        </View>
        <Text style={styles.summaryText}>
            Your phone needed <Text style = {styles.highlight}>{roundsNumber} </Text>  
            roounds to guess the number <Text style = {styles.highlight}> {userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
);
}

export default GameOver;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen:{
        flex: 1
    },
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth:3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin:36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize: 24,
        textAlign:'center',
        marginBottom:24
    },
    highlight:{
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }

});