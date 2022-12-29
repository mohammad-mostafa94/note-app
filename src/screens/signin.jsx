import { View, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import Input from '../components/Input';

export default function SignIn({ navigation }) {
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
        <Input placeholder="Email address" />
        <Input placeholder="Password" />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <Button
          title={"Login"}
          customStyles={{ alignSelf: "center", marginBottom: 60 }}
        />
        <Pressable onPress={() => { navigation.navigate("SignUp") }}>
          <Text>Don't have an account? {" "}
            <Text
              style={{ color: "green", fontWeight: "bold", marginLeft: 5 }}
            >Sign up</Text>
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
    borderBottomColor: '#ccc'
  }
})