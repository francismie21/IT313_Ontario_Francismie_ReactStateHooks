import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Practice Tracker</Text>

      <Text style={styles.solved}>
        Solved: {solved}
      </Text>

      <View style={styles.buttonRow}>
        <Pressable style={styles.button} onPress={onSolve}>
          <Text style={styles.buttonText}>Solve +1</Text>
        </Pressable>

        <Pressable style={styles.resetButton} onPress={onReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>

      {solved >= 5 && (
        <Text style={styles.greatJob}>Great job!</Text>
      )}
    </View>
  );
}

function useStopwatch(isRunning) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return seconds;
}

function Stopwatch({ seconds, isRunning }) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${String(minutes).padStart(2, '0')}:` +
    `${String(remainingSeconds).padStart(2, '0')}`;

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Lab Stopwatch</Text>

      <Text style={styles.timer}>
        {formattedTime}
      </Text>

      <Text style={styles.status}>
        {isRunning ? 'Running...' : 'Paused'}
      </Text>
    </View>
  );
}

function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Lab Timer & Practice Tracker
      </Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        seconds={seconds}
        isRunning={isRunning}
      />

      <Pressable
        style={styles.startButton}
        onPress={() => setIsRunning((running) => !running)}
      >
        <Text style={styles.buttonText}>
          {isRunning ? 'Stop' : 'Start'}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default function App() {
  return <LabScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f6f8',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },

  solved: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 15,
  },

  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },

  status: {
    fontSize: 18,
    textAlign: 'center',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#2196F3',
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 5,
  },

  resetButton: {
    backgroundColor: '#777777',
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginLeft: 5,
  },

  startButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  greatJob: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
});