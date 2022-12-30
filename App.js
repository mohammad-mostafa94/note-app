// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import SignIn from './src/screens/signin';
import SignUp from './src/screens/signup';
import Edit from './src/screens/edit';
import Create from './src/screens/create';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKFNLBzwCKpS_p44YAQnsZ_3YETsrQRIc",
  authDomain: "note-app-507f8.firebaseapp.com",
  projectId: "note-app-507f8",
  storageBucket: "note-app-507f8.appspot.com",
  messagingSenderId: "4382603348",
  appId: "1:4382603348:web:06c9345edf7ff1d99b15c1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading,setLoading] = React.useState(false);
  const [user,setUser] = React.useState(false);
 
  return (
    <NavigationContainer theme={AppTheme} >
      <Stack.Navigator >
        {
          user ? (
            <>
              {/* <Stack.Screen name="Home" component={Home} /> */}

              <Stack.Screen name="Home" options={{headerShown:false}}>
                {(props) => <Home {...props} user={user} />}
              </Stack.Screen>
              
              <Stack.Screen name="Create" >
                {(props) => <Create {...props} user={user} />}
              </Stack.Screen>
              <Stack.Screen name="Create" component={Create} />
              <Stack.Screen name="Edit" component={Edit} />
            </>
          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
