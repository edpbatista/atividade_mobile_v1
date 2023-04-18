import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function ButtonNavigate({ navigation, location, children, style }) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(location)}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#6C63FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 20, 
  },
});
