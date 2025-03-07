import React from 'react'
import { View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { IonicButton } from '../components/IonicButton'


export function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical:10
      }}>
        <IonicButton color='white' onPress={ ()=> navigation.navigate('items') } />
        <IonicButton name='person' text='Personas' color='white' onPress={ ()=> navigation.navigate('persons') } />
        <IonicButton name='business' text='Ubicaciones' color='white' onPress={ ()=> navigation.navigate('places') } />
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical:10
      }}>
        <IonicButton name='shield-checkmark' text='Asignaciones' color='white' onPress={ ()=> navigation.navigate('assigments') } />
        <IonicButton name='bag-check' text='Inventario' color='white' onPress={ ()=> navigation.navigate('inventary') } />
        <IonicButton name='scan-circle' text='Escanear' color='white' onPress={ ()=> navigation.navigate('scan') } />
      </View>

      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
