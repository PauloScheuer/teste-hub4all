import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function App() {
  const [color, setColor] = useState<string>('white');

  const handleChangeColor = () => {
    const time = new Date().getTime();
    const lastCharTime = time.toString().substr(-1, 1);
    switch (Number(lastCharTime)) {
      case 0:
        setColor('white');
        break;
      case 1:
        setColor('black');
        break;
      case 2:
        setColor('grey');
        break;
      case 3:
        setColor('blue');
        break;
      case 4:
        setColor('green');
        break;
      case 5:
        setColor('yellow');
        break;
      case 6:
        setColor('red');
        break;
      case 7:
        setColor('orange');
        break;
      case 8:
        setColor('purple');
        break;
      case 9:
        setColor('brown');
        break;
      default:
        setColor('white');
        break;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.section}>
        <Text style={styles.title}>Go 4all!</Text>
        <RectButton onPress={handleChangeColor} style={styles.button}>
          <Text style={styles.buttonText}>Trocar cor</Text>
        </RectButton>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    borderRadius: 8,
    padding: 32,
    backgroundColor: '#f3f3f3',
    shadowColor: '#272727',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 12,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#2d5bfc',
  },
  buttonText: {
    color: '#fff',
  },
});
