import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ButtonNavigate from '../components/button'

export default function ConfigScreen() {

  const navigation = useNavigation()
  return (
    <View>
      <Text>Config</Text>
      <View>
        <ButtonNavigate location='HomeScreen' navigation={navigation}>Voltar</ButtonNavigate>
      </View>
    </View>
  )
}