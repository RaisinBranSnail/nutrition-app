import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CongratsScreenStyles as styles } from './styles/CongratsScreenStyles';

const CongratsScreen = ({ onContinue }: { onContinue: () => void }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/circle_guy.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Congrats!</Text>
      <Text style={styles.subtitle}>
        You are a new member of Moo’dMeal!
      </Text>

      <TouchableOpacity style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CongratsScreen;
