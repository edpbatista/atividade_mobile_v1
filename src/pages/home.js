import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ButtonNavigate from '../components/button'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function HomeScreen() {

  const navigation = useNavigation()
  const { params } = useRoute();
  const count = params?.count ?? 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Bem-vindo à tela Home!</Text>
      
      <Text>{count}</Text>

      <ButtonNavigate
        navigation={navigation}
        location="ActivityScreen">Atividades
      </ButtonNavigate>
      <ButtonNavigate
        navigation={navigation}
        location="ConfigScreen">Configuração
      </ButtonNavigate>
      <View>
        <ButtonNavigate location='Login' navigation={navigation}>Voltar</ButtonNavigate>
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
  }
})
