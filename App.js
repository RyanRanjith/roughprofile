import * as React from 'react';
import { Button, View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import profile from './assets/profile.png';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import bi from './assets/bi.png';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <Text style={{
        marginTop: 1
      }}>Ranjith Gopinath</Text>
      <Image source={profile} style={{
        width: 90,
        height: 90,
        borderRadius: 10,
        marginTop: 10,
        marginBottom:10
      }}></Image>
 
 <View style={styles.container}>
    <ImageBackground source={bi} resizeMode="cover" style={styles.bi}>
      <Button  title="View Profile"
      onPress={() => navigation.navigate('Details') }/>
    </ImageBackground>
  </View>
   </View>
   );
}




function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <Text style={{

      }}>Details Screen</Text>
      <Text style={{
        fontSize: 12,
        color: 'black'

      }}> here you can see my profile details</Text>

       <Button title='Education'
       onPress={()=>navigation.navigate('Education')}/>
    </View>

  
    
  );
}

function EducationScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <Text style={{

      }}>Here are my Universities I studied</Text>
      <Text style={{
        fontSize: 12,
        color: 'black'

      }}> Anna univerity
      Csudh</Text>

       
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Education" component={EducationScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  Button:{
    marginBottom: 20,
    padding: 20,
  },
  
  bi: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 200,
    //paddingTop: 200,
    paddingBottom:10,
    padding:100,
    marginTop:10
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
})