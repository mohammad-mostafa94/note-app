import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import Input from '../components/Input';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../../App';

import {
  addDoc,
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
  where
} from 'firebase/firestore';

export default function SignUp({ navigation }) {

  const genderOptions = ["Male", "Female"];
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    console.log('signUp button clicked');

    try {
      //   // 1 - create a new user with email and password
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log("result ==> ", result);
      // 2. add user profile to the database.
        await addDoc(collection(db, "users"), {
          name: name,
          email: email,
          age: age,
          gender: gender,
          uid: result.user.uid
        });

      //   console.log("result--->> ", result);
    } catch (error) {
      console.log("error=->", error)
    }

  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        {/* <TextInput placeholder="Email address" style={styles.input} /> */}
        <Input
          placeholder="Email address"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Full name"
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Age"
          onChangeText={(text) => setAge(text)}
        />

        <Text style={{ marginVertical: 20 }}>Select gender</Text>

        {genderOptions.map((option) => {
          const selected = option === gender;// male === male=> true
          return (
            <Pressable
              onPress={() => setGender(option)}
              key={option}
              style={styles.radioContainer}>
              <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
                <View style={[styles.innerCircle, selected && styles.selectedInnerCircle]} />
              </View>
              <Text style={styles.radioText}>{option}</Text>
            </Pressable>
          )
        })
        }

      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <Button
          onPress={signUp}
          title={"Sign Up"}
          customStyles={{ alignSelf: "center", marginBottom: 60 }}
        />
        <Pressable onPress={() => { navigation.navigate("SignIn") }}>
          <Text>Already have an account? {" "}
            <Text
              style={{ color: "green", fontWeight: "bold", marginLeft: 5 }}
            >Sign In</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2
  },
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:10
  },
  innerCircle: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    marginRight: 10,
    marginLeft: 10,
  },
  selectedOuterCircle: {
    borderColor: "orange",

  },
  selectedInnerCircle: {
    backgroundColor: "orange",
    borderColor: "orange"
  }
})