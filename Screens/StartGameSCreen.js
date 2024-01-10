import { TextInput, Button, View,StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import { useState } from "react";
import Colors from "../Util/Colors";
import Title from "../Components/Title";
import Cards from "../Components/Cards";
import InstructionText from "../Components/InstructionText";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');


    function numberInputHandler(enterText) {
        setEnteredNumber(enterText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chooseNumber = parseInt(enteredNumber);
        if(isNaN(chooseNumber) || chooseNumber <=0 || chooseNumber > 99) {
            Alert.alert(
                'Invalid Number', 
                'Number has to be a number between 1 and 99.',
                [
                    {text:'Okay',
                     style: 'destructive', 
                     onPress: resetInputHandler
                    }
                ]
            );
            return;
        }
        console.log('Valid Number!');
        onPickNumber(chooseNumber);
    }
    return(
        <View style = {styles.rootContainer}>
            <Title>Guess My Number</Title>
        <Cards>
            <InstructionText> Enter a Number</InstructionText>
            <TextInput 
                style = {styles.numberInput} 
                textAlign= 'center'
                maxLength={2} 
                keyboardType="number-pad" 
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value= {enteredNumber}
            />
            <View  style ={styles.buttonsContainer}>
                <View style ={styles.buttonContainer}>
                 <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style ={styles.buttonContainer}>
                 <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Cards>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },    
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor:Colors.accent500,
        borderBottomWidth:2,
        color:Colors.accent500,
        marginVertical: 8,
        fontWeight:'bold',
    },
    buttonsContainer: {
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1.
    }

});