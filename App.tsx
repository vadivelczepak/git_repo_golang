/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isLoginPage, setisLoginPage] = useState(true);
  const [isInvalid, setisInvalid] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  function login() {
    if(Email == 'vel' && Password == '123'){
      setisLoginPage(false);
      setisInvalid(false);
    }else{
      setisInvalid(true);
    }
  }
  function logout() {
    setEmail("");
    setPassword("");
    setisLoginPage(true);
    setisInvalid(false);
  }
  return (
    <SafeAreaView  style={backgroundStyle}>
      
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        {isLoginPage? 
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
<Text style={{color:'red',textAlign:'center' ,paddingTop:4}}> {isInvalid?'Invalid Email and Password':''}</Text>
          <Text>Login :</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(value) => setEmail(value)}
          />

          <Text>Password :</Text>
          <TextInput
            style={styles.input}
            placeholder="Password" 
            onChangeText={(value) => setPassword(value)}
            />

          <View style={{ padding: 10 }}>
            <Button onPress={login} title="Login" color="#ff69b4" />
          </View>






        </View>:<View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Text style={{fontSize:22}}>Welcome {Email}</Text>
            <Text style={{color:'red',paddingLeft:350,fontSize:17}} onPress={logout}>Logout</Text>
          
          </View> }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  textcolor: {
    color: 'white',
    backgroundColor: 'green',

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    color: 'red'
  },
});

export default App;
