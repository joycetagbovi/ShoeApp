import { StyleSheet, Text, View, Image,ImageBackground ,Dimensions,useWindowDimensions} from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { LinearGradient } from 'expo-linear-gradient';



const LoginScreen = () => {
  const { height, width } = Dimensions.get('window');

  return (
    <LinearGradient colors={['#3AAD96', '#005B49']} style={styles.container}>
    {/* <View style={styles.container}> */}
      <View style={{marginTop: 50}}>
        <Image source={require('../assets/images/icons8-nike-50.png')} 
         style={{width: 50, height: 50}}
         resizeMode='cover'
        />
      </View>
      <ImageBackground source={require( '../assets/images/Ellipse.png')} 
      resizeMode='contain' 
      style={styles.bgImage}
      />
      <ImageBackground source={require( '../assets/images/curve.png')} 
      resizeMode='contain' 
      style={[styles.bgCurve, {width: width * 0.50}]} 
      
      />
      <View style={{alignItems:'center'}}>
        <Image source={require('../assets/images/shoe.png')} 
        resizeMode='cover' 
        style={styles.shoe} />
      </View>

      <View style={{justifyContent: 'center'}}>
      <Text style={styles.heading}>Summer Collections</Text>
      <Text style={styles.title}>2022</Text>
      <Text style={styles.body}>His ability to control his movement keeps defenders guessing</Text>
      </View>
      <View style={{alignItems:'center', marginTop: 30}}>
       <Button />
      </View>
    {/* </View> */}
    </LinearGradient>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 10,
  },

  shoe:{
    position: 'relative',
    width: 428, 
    height: 328
  },

  bgCurve: {
  //  width: 282,
   height: 282,
   position: 'absolute',
   top: 6,
   overflow: 'hidden',
   zIndex: 0,
   left: 251,
  },

  bgImage: {
   width: '100%',
   height:   282,
   position: 'absolute',
   top: 211,
   overflow: 'hidden',
   zIndex: 0,
   left: -120
  },

  heading: {
    fontSize: 45,
    fontFamily: 'montserrat-bold',
    textTransform: 'uppercase',
    color: '#122A2F;',
  },
  
  title: {
    fontSize: 45,
    fontFamily: 'montserrat-bold',
    textTransform: 'uppercase',
    color: '#ffffff',
  },

  body: {
    fontSize: 20,
    fontFamily: 'montserrat',
    lineHeight: 26,
    color: '#122A2F;',
    marginVertical: 20,

  }

})