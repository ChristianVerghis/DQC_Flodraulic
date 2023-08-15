import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function SearchSystems() {
    const [type, setType] = useState('is/p1p');
    const [date, setDate] = useState('30');


return (
    <View style={StyleSheet.container}>
        <Text>Enter System Type:</Text>
        <TextInput style={styles.input}/>

        <Text>Type: {type}, date: {date}</Text>

    </View>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'centre',
        justifyContent: 'centre',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200
    }
})