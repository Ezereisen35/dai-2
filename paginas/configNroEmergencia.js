import React, {useEffect, useState} from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function NumEmergencia(){
    const [celu, setCelu] = useState();
    const [saved, setSaved] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        const traerNumSaved = async () => {
            setSaved(await AsyncStorage.getItem("celu"));
        }
        traerNumSaved();
    }, []);

    const guardarCelu = async () => {
        if (celu.length < 10) {
            setError(true);
        } else {
            setError(false);
            await AsyncStorage.setItem('celu', celu);
            setSaved(await AsyncStorage.getItem("celu"));
        }
    }


    return (
        <View>
            <Text style={styles.titulo}>Numero de Emergencia: {saved}</Text>
            <TextInput placeholder="Telefono de emergencia" onChangeText={setCelu} value={celu} keyboardType="numeric"
            />
            <Button title="Guardar" onPress={guardarCelu} />
            {error && <Text >El numero ingresado es incorrecto, intente de nuevo</Text>}
        </View>
    );
}
export default NumEmergencia;

const styles = StyleSheet.create({

titulo: {
    alignItems:'center',
},

});