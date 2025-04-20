import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type GenderOption = 'female' | 'male' | 'other';

interface Props {
    onNext: () => void;
    onBack: () => void;
}  

export default function GenderScreen({ onNext, onBack }:Props) {
  const [selectedGender, setSelectedGender] = useState<GenderOption | null>(null);

  const handleNext = () => {
    if (selectedGender) {
      onNext();
    }
  };

  const genderOptions: {
    value: GenderOption;
    label: string;
    icon: 'venus' | 'mars' | 'transgender';
    color: string;
  }[] = [
    { value: 'female', label: 'Female', icon: 'venus', color: '#FFB6C1' },
    { value: 'male', label: 'Male', icon: 'mars', color: '#00BFFF' },
    { value: 'other', label: 'Other', icon: 'transgender', color: '#A18BFF' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
        <View style={[styles.progressDot, styles.inactiveDot]} />
      </View>

      <Text style={styles.title}>What’s your gender?</Text>

      <View style={styles.optionsContainer}>
        {genderOptions.map(({ value, label, icon, color }) => (
          <TouchableOpacity
            key={value}
            style={[
              styles.option,
              selectedGender === value && styles.selectedOption,
            ]}
            onPress={() => setSelectedGender(value)}
          >
            <Text style={styles.optionLabel}>{label}</Text>
            <FontAwesome5 name={icon} size={24} color={color} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navButtonBack} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navButtonNext,
            { backgroundColor: selectedGender ? '#43274F' : '#B9AFAF' },
          ]}
          disabled={!selectedGender}
          onPress={handleNext}
        >
          <Ionicons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4E9',
    padding: 24,
    justifyContent: 'center',
  },
  progressBar: {
    flexDirection: 'row',
    gap: 8,
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
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
    color: '#3C2A3E',
    textAlign: 'center',
    marginBottom: 40,
  },
  optionsContainer: {
    gap: 16,
  },
  option: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  selectedOption: {
    borderColor: '#43274F',
    borderWidth: 2,
  },
  optionLabel: {
    fontSize: 18,
    color: '#3C2A3E',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 12,
  },
  navButtonBack: {
    backgroundColor: '#FDBE9C',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonNext: {
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
