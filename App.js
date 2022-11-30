import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import llamadoEmergencia from './events/llamadoDeEmergencia';
import contacts from './paginas/contactos';
import temperatura from './paginas/temperatura';
import about from './paginas/about';
import Home from './paginas/home';
import emergencyContact from './paginas/configNroEmergencia';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={about} />
      <Stack.Screen name="Contactos" component={contacts} />
      <Stack.Screen name="Emergency" component={emergencyContact} /> 
      <Stack.Screen name="Temperatura" component={temperatura} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;