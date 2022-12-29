import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import Input from '../components/Input';

export default function SignUp({ navigation }) {
  const genderOptions = ["Male", "Female"];

  const [gender, setGender] = useState(null);

 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        {/* <TextInput placeholder="Email address" style={styles.input} /> */}
        <Input placeholder="Email address" />
        <Input placeholder="password" />
        <Input placeholder="Full name" />
        <Input placeholder="Age" />

        {genderOptions.map((option) => {
           const selected = option === gender;
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


              // <Pressable
              //   onPress={() => setGender(option)}
              //   key={option}
              //   style={styles.radioContainer}
              // >
              //   <View style={styles.outerCircle}>
              //     <View style={styles.innerCircle} />
              //   </View>
              //   <Text style={styles.radioText}>{option}</Text>
              // </Pressable>
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
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 100
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
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