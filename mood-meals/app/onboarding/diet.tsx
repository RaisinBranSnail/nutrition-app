import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface Props {
  onNext: () => void;
  onBack: () => void;
}

type DietOption = 'clean' | 'mediterranean' | 'keto' | 'lowcarb';

export default function DietScreen({ onNext, onBack }: Props) {
  const [selectedDiet, setSelectedDiet] = useState<DietOption | null>(null);

  const handleNext = () => {
    if (selectedDiet) {
      onNext();
    }
  };

  const diets = [
    {
      value: 'clean' as DietOption,
      label: 'Clean eating',
      description: 'The perfectly balanced classic.',
      recommended: true,
    },
    {
      value: 'mediterranean' as DietOption,
      label: 'Mediterranean',
      description: 'Go Euro with fresh, wholesome food.',
    },
    {
      value: 'keto' as DietOption,
      label: 'Keto',
      description: 'Kick out carbs, fill up on fats.',
    },
    {
      value: 'lowcarb' as DietOption,
      label: 'Low carb',
      description: 'Curb “bad carbs,” feel your best.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Progress bar */}
      <View style={styles.progressBar}>
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
        <View style={[styles.progressDot, styles.inactiveDot]} />
      </View>

      <Text style={styles.title}>Choose a diet</Text>

      {diets.map((diet) => (
        <TouchableOpacity
          key={diet.value}
          style={[
            styles.option,
            selectedDiet === diet.value && styles.selectedOption,
          ]}
          onPress={() => setSelectedDiet(diet.value)}
        >
          <View style={styles.optionTextWrapper}>
            <Text style={styles.optionLabel}>{diet.label}</Text>
            {diet.recommended && (
              <View style={styles.recommendedPill}>
                <Text style={styles.recommendedText}>Recommended</Text>
              </View>
            )}
          </View>
          <Text style={styles.optionDescription}>{diet.description}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navButtonBack} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navButtonNext,
            { backgroundColor: selectedDiet ? '#43274F' : '#B9AFAF' },
          ]}
          onPress={handleNext}
          disabled={!selectedDiet}
        >
          <Ionicons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF4E9',
    padding: 24,
    paddingBottom: 60,
  },
  progressBar: {
    flexDirection: 'row',
    gap: 8,
    alignSelf: 'center',
    marginBottom: 24,
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
    marginBottom: 24,
  },
  option: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 16,
  },
  selectedOption: {
    borderColor: '#43274F',
    borderWidth: 2,
  },
  optionTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D1A1A',
  },
  optionDescription: {
    marginTop: 4,
    fontSize: 14,
    color: '#555',
  },
  recommendedPill: {
    backgroundColor: '#A3C78D',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  recommendedText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
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
    backgroundColor: '#43274F',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
