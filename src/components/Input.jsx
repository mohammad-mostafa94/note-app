import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input({
    placeholder,
    value,
    secureTextEntry = false,
    onChangeText,
    autoCapitalize
}) {
    return (
        <TextInput
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            autoCapitalize = {autoCapitalize}
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
})