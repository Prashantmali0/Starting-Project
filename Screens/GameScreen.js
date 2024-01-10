import { Text, View, StyleSheet, Alert,FlatList } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import {Ionicons} from '@expo/vector-icons';

import Title from "../Components/Title";
import NumberContainer from "../Components/Game/NumberContainer";
import PrimaryButton from "../Components/PrimaryButton";
import Cards from "../Components/Cards";
import InstructionText from "../Components/InstructionText";
import GuessLogItem from "../Components/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if(rndNum == exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber,onGameOver}) {
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    },[currentGuess, userNumber, onGameOver])

    useEffect(()=>{
        minBoundary = 1;
        maxBoundary = 100;
    },[]);

    function nextGuessHandler(direction) {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!!", "You know that this is wrong...", [{text: "Sorry!", style: "cancel"}]);
            return;
        }
        if(direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(previousGuessRounds => [newRndNumber,...previousGuessRounds]);
    }

    const guesRoundsListLength = guessRounds.length;
    return <View style = {styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        {/*Guess*/}
        <Cards>
            <InstructionText style={styles.instructionText}>Heigher or lower</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white"/>
                    </PrimaryButton>
                </View>
                 <View style={styles.buttonContainer}>
                     <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                     <Ionicons name="md-add" size={24} color="white"/>
                     </PrimaryButton>
                </View>
            </View>
        </Cards>
        <View style ={styles.listContainer}>
            {/* {guessRounds.map(guessRound => <Text>{guessRound}</Text>)} */}
            <FlatList 
                data={guessRounds}
                renderItem={(itemData)=>  
                // <Text>{itemData.item}</Text>}
                <GuessLogItem 
                roundNumber={guesRoundsListLength - itemData.index} 
                Guess={itemData.item}
                />} 
                keyExtractor = {item=> item}
            />
        </View>
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:24,
        alignItems:'center'
    },
    buttonsContainer: {
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1.
    },
    instructionText:{
        marginBottom: 12
    },
    listContainer: {
        flex:1,
        padding:8
    }

})