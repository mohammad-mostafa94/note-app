import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import Input from '../components/Input';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../App';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigateToSignUp = () => {
    navigation.navigate("SignUp")
  }

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      console.log("Signed in successfully.", res);
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        style={{ height: "40%", width: "80%", alignSelf: "center" }}
        source={require("../../assets/access_account.png")}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
        Never forget your notes.
      </Text>
      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        <Input
          placeholder="Email address"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={"none"}
        />
        <Input
          placeholder="password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >

        {error && <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>}

        {
          loading ? (
            <ActivityIndicator />
          ) : (
            <Button
              title={"Login"}
              customStyles={{ alignSelf: "center", marginBottom: 60 }}
              onPress={login}
            />
          )
        }
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text>Don't have an account? {" "}
            <Text
              style={{ color: "green", fontWeight: "bold", marginLeft: 5 }}
            >Sign up</Text>
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
})