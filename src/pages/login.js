
import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import ButtonNavigate from '../components/button'
import { useNavigation } from '@react-navigation/native'

export default function Login() {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <View style={styles.v1}>
      <TextInput
        style={styles.input}
        placeholder="Login"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <ButtonNavigate location='HomeMain' navigation={navigation}>Login</ButtonNavigate>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingLeft: 16,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  }

})