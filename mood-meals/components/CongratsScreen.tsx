import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // ✅ Add this
import { CongratsScreenStyles as styles } from './styles/CongratsScreenStyles';

const CongratsScreen = () => {
  const router = useRouter(); // ✅ Set up router

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

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/onboarding/name')} // ✅ Navigate to name.tsx
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CongratsScreen;
