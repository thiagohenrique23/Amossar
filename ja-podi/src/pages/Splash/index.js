import React from "react";
import LottieView from "lottie-react-native";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Splah() {

  const navigation = useNavigation()

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
        <LottieView 
        source={require('../../assets/animation_lmjmges6.json')}
        loop={false}
        autoPlay
        onAnimationFinish={() => navigation.navigate('Home')}
        />
    </View>
  );
}