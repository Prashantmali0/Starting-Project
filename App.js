import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import {useFonts} from'expo-font';

import Colors from './Util/Colors';
import AppLoading from 'expo-app-loading';
// import  SplashScreen from 'expo-splash-screen';

import StartGameScreen from './Screens/StartGameSCreen';
import GameScreen from './Screens/GameScreen';
import GameOver from './Screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRound] = useState(0);

  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
});

if(!fontLoaded) {
  return <AppLoading />
}

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler (numberOfRounds) {
    setGameIsOver(true);
    setGuessRound(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRound(0);
  }


  let screen = <StartGameScreen onPickNumber ={pickedNumberHandler}/>

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameOver 
    userNumber={userNumber} 
    roundsNumber={guessRound} 
    onStartNewGame={startNewGameHandler} />
  }



  return (
    <>
    <StatusBar style="Light"/>
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style ={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/Image/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle = {styles.backgroundImage}
        >
       <SafeAreaView style = {styles.rootScreen}>
         {screen}
       </SafeAreaView>
      </ImageBackground>

    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1
  },
  backgroundImage:{
    opacity:0.20
  }
});
