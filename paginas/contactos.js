import * as Contacts from 'expo-contacts';
import React, {  useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Contactos() {
  const [contactos, setContactos] = useState([]);
  const [saved, setSaved] = useState();


  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
        });
        if(data.length > 0) {
          setContactos(data)
        }
        console.log(contactos)
      }
    })();
  },[]);

  useEffect(() => {
    const traerNumSaved = async () => {
        setSaved(await AsyncStorage.getItem("celu"));
    }
    traerNumSaved();
    console.log("CONATACTO DE EMERGENCIA:!!!!!!!!!!!!!!!!!!!!",saved)
  }, []);

    return (
      <SafeAreaView style={styles.container}>
        <Text style={{marginBottom:'7%'}}>Tus Contactos:</Text>
        <FlatList 
        data={contactos} 
        
        keyExtractor={item => item.id}

        renderItem={({item}) =>{
        return(
        <View style={styles.contactosEstilo}>
          <Text style={{bottom:4}}>Nombre: {item.name}</Text>
          <Text style={{bottom:4}}>Num: {item.phoneNumbers[0].number}</Text>  
          {item.phoneNumbers && item.phoneNumbers[0].number == saved ? (
            <>
            <View style={styles.contactoEmergencia}>
            <Text style={{color: "white"}}>CONTACTO DE EMERGENCIA</Text>
              </View></>
            ) : (null)
          }
        </View>
        )}
      } 
        
         />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgray",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 40,
        fontWeight: "500",
        marginTop: 20,
    },
    logo: {
        height: 150,
        width: 150,
        marginTop: 20,
    },
    featureTitle: {
        fontSize: 20,
        fontWeight: "400",
        marginTop: 10,
        marginBottom: 10
    },
    featureContainer: {
        flex: 2,
        flexDirection: 'column'
      },
    contactosEstilo:{
      marginBottom:'5%',
      borderBottomWidth:2,
    },
    contactoEmergencia:{
      color:'red',
      backgroundColor:'red',
      width:'100%',
      heigth:'100%',
    }
  });

export default Contactos;