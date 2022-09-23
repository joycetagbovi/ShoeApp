import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>Get Started</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ECB903',
        width: 254,
        height: 70,
        borderRadius: 37,
        alignItems: 'center',
        justifyContent: 'center',
        
          shadowColor: '#00000040',
          shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.22,
        
        elevation: 25,
    },
    text: {
       color: '#122A2F',
       fontSize: 20,
       fontFamily: "montserrat-bold"
      
      
    }
})

