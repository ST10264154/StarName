import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [starDiagram, setStarDiagram] = useState('');
  const [nameLength, setNameLength] = useState(0);

  const calculateStars = (inputName: string) => {
    const length = inputName.length;
    let stars = '';

    for (let i = 1; i <= length; i++) {
      stars += '*'.repeat(i) + '\n';
    }

    setStarDiagram(stars);
    setNameLength(length);
  };
  const getOddEvenText = () => {
    return nameLength % 2 === 0 ? 'Even' : 'Odd';
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Star Diagram</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Display Stars" onPress={() => calculateStars(name)} />
      <Text style={styles.result}>
        Name: {name}
      </Text>
      <Text style={styles.result}>
        {getOddEvenText()}, {nameLength} letters
      </Text>
      <Text style={styles.result}>{starDiagram}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 30,
    color: 'purple', 
    marginBottom: 16,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 8,
    marginBottom: 16,
  },
  result: {
    fontSize: 30,
    marginTop: 16,
    fontFamily: 'monospace',
    backgroundColor: 'pink', 
  },
});

export default App;