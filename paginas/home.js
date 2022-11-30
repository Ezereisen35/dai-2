import React, {useEffect, useState} from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MensajeDeEmergencia from '../events/llamadoDeEmergencia';

function Home() {
    const navigation = useNavigation();
    const [saved, setSaved] = useState();

    useEffect(() => {
        const traerNumSaved = async () => {
            setSaved(await AsyncStorage.getItem("celu"));
        }
        traerNumSaved();
        console.log("CONATACTO DE EMERGENCIA:!!!!!!!!!!!!!!!!!!!!",saved)
      }, []);

    return (
        <View >
            <View style={{marginVertical: 10}}>
                <Button title="Contactos" onPress={() => navigation.navigate('Contactos')}/>
            </View>
            <View style={{marginVertical: 10}}>
                <Button title="About Us" onPress={() => navigation.navigate("About")}/>
            </View>
            <View style={{marginVertical: 10}}>
                <Button title="Contacto de emergencia" onPress={() => navigation.navigate("Emergency")}/>
            </View>
            <View style={{marginVertical: 10}}>
                <Button title="Temperatura" onPress={() => navigation.navigate("Temperatura")}/>
            </View>
            {saved ? (
                <MensajeDeEmergencia/>
            )
            :
            (console.log(":)"))

            }
        </View>   
    );        

}



const styles = StyleSheet.create({



});

export default Home;