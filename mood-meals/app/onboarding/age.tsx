import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function AgeScreen({ onNext }: Props) {
  const [age, setAge] = useState('');

  const handleNext = () => {
    if (!age) return;
    onNext();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.progressBar}>
        <View style={styles.progressDot} />
        <View style={[styles.progressDot, styles.inactiveDot]} />
      </View>

      <Text style={styles.title}>How old are you?</Text>

      <TextInput
        style={styles.input}
        placeholder="Type your age"
        placeholderTextColor="#444"
        value={age}
        onChangeText={setAge}
      />

      <TouchableOpacity
        style={[
          styles.nextButton,
          { backgroundColor: age ? '#43274F' : '#B9AFAF' },
        ]}
        onPress={handleNext}
        disabled={!age}
      >
        <Ionicons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4E9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  progressBar: {
    flexDirection: 'row',
    gap: 8,
    position: 'absolute',
    top: 60,
  },
  progressDot: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A49A9A',
  },
  inactiveDot: {
    backgroundColor: '#DDD5D5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#3C2A3E',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#D3CCC8',
    paddingHorizontal: 16,
    fontSize: 18,
    color: '#000',
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    right: 24,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
