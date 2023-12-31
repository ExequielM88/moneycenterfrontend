import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Fondo3 from '../../assets/img/fondo3.png';



const ForgotPasswordScreen = () => {
 
  const navigation = useNavigation(); 

  return (
    <ImageBackground
    source={Fondo3}
    style={styles.backgroundImage}
    >
    <View style={styles.container}>
      
      <View style={styles.seccion}>
        <Text style={styles.title}>Recupera tu contraseña</Text>
      </View>
      <View style={styles.seccion1}>
        <Text style={styles.inputLabel}>Correo electrónico:</Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <View style={styles.seccion2}>
       <TouchableOpacity style={styles.recoverybutton} title="" onPress={() => navigation.navigate('ConfirCode')} >
         <Text style={styles.buttonText}>Continuar</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.recoverybutton} title=""  >
         <Text style={styles.buttonText}>Atras</Text>
       </TouchableOpacity>
     </View>
     
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  seccion: {
    width:"100%",
    marginBottom: 40,
    textAlign: 'center',
  },

  seccion1: {
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  seccion2: {
    width:"100%",
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    textAlign:"center",
    fontSize:40,
    fontWeight: 'bold',    
   },
 
  
  input: {
    width: '80%',
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  inputLabel: {
    marginBottom: 5,
    width: "80%",
    
  },
  buttonText: {
    color: '#fff', 
    fontSize: 20, 
    
  },
  recoverybutton: {
    backgroundColor: '#008000', 
    borderRadius: 10, 
    padding: 10, 
    margin: 10, 
    width: '40%', 
    alignItems: 'center', 
  },

});

export default ForgotPasswordScreen;
