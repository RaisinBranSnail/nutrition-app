import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// DUMMY DATA
const currentWeight = 146;
const goalWeight = 135;
const diet = 'Clean eating';
const water = 10;
const kcal = 1457;
const intensity = 'Steady';

export default function PredictionScreen() {
  const router = useRouter();

  const handleFinish = () => {
    console.log('Onboarding complete!');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Text style={styles.header}>
          You’ll reach your goal in about <Text style={styles.highlight}>11 weeks</Text>
        </Text>

        <Text style={styles.subheader}>
          Just 3 hours of exercise each week can get you to your goal
        </Text>

        {/* Weight card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Lose 11 lb</Text>
          <Text style={styles.cardText}>Starting from 146lb.</Text>
          <View style={styles.divider} />
          <Text style={styles.cardKcal}>1457 kcal</Text>
          <Text style={styles.cardText}>Daily calorie intake.</Text>
          <FontAwesome5 name="fire" size={24} color="#43274F" style={styles.cardIcon} />
        </View>

        {/* Lifestyle summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryItem}>
            Your diet: <Text style={styles.bold}>Clean eating</Text>
          </Text>
          <View style={styles.divider} />

          <Text style={styles.summaryItem}>
            Intensity: <Text style={styles.bold}>Steady</Text>
            {'\n'}<Text style={styles.small}>11 weeks</Text>
          </Text>
          <View style={styles.divider} />

          <Text style={styles.summaryItem}>
            Water intake: <Text style={styles.bold}>10 glasses</Text>
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
          <Ionicons name="checkmark" size={20} color="#fff" />
          <Text style={styles.finishText}>Start Now!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 24,
    backgroundColor: '#FFF4E9',
  },
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#43274F',
    textAlign: 'center',
    marginBottom: 8,
  },
  highlight: {
    fontSize: 28,
    color: '#43274F',
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#DDBFB9',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    position: 'relative',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#43274F',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  cardKcal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#43274F',
  },
  cardIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  summaryCard: {
    backgroundColor: '#D7C9A6',
    padding: 20,
    borderRadius: 12,
    marginBottom: 40,
  },
  summaryItem: {
    fontSize: 16,
    color: '#3C2A3E',
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  small: {
    fontSize: 12,
    color: '#555',
  },
  finishButton: {
    flexDirection: 'row',
    backgroundColor: '#C6AFA2',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 8,
    marginTop: 32,
  },
  finishText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});