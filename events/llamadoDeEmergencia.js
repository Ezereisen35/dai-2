import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import {StyleSheet, View, TextInput, Linking} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function enviarMensaje() {
  const saved = await AsyncStorage.getItem("celu");
  Linking.openURL('whatsapp://send?text=¡AYUDAA!&phone='+saved)
}

export default function MnsajeDeEmergencia() {

  const agitar = onShake => {
  Accelerometer.setUpdateInterval(100);  

    const onUpdate = ({ x, y, z }) => {
      const acceleration = Math.sqrt(x * x + y * y + z * z);
      const sensibility = 2;
      if (acceleration > sensibility) {
        onShake(acceleration);
      }
    };
    Accelerometer.addListener(onUpdate);
  };
  
  agitar(acceleration => {
    console.log("¡Agitar!" + acceleration);
    enviarMensaje();
  });

  return (<></>);
}