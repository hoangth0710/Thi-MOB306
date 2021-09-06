import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect } from 'react';
import firebase from 'firebase';
import { useState } from 'react';


function newCOntacts(name, number) {


    firebase.database().ref('Contacts/').push({
        soMin: name,
        soMax: number
    }, function (error) {
        if (error) {
            // The write failed...
            alert('Loi' + error)
        } else {
            // Data saved successfully!
            alert('Thanh cong!!!')
        }
    });
}

export default function Add({navigation}) {

    useEffect(() => {
        // if (!firebase.apps.length) {
        //     firebase.initializeApp(config);
        // }
        var firebaseConfig = {
            apiKey: "AIzaSyBpuPnAIsmBzEieCZzVlxURKLfbTLRcqB8",
            authDomain: "demospring-lab8-rn.firebaseapp.com",
            projectId: "demospring-lab8-rn",
            storageBucket: "demospring-lab8-rn.appspot.com",
            messagingSenderId: "838756076177",
            appId: "1:838756076177:web:e3d3005b99ac44989b0d30",
            measurementId: "G-SG416D5Q55"
             };
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
    }, [])
    const [names, setName] = useState();
    const [numbers, setNumber] = useState();

    const _storeData = async (names) => {
        try {
            await AsyncStorage.setItem('TASKS', names);
        } catch (error) {
            // Error saving data
        }
    };
    // hàm nhận dữ liệu đã lưu trước đó, key là TASKS
    const _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('TASKS');
            if (value !== null) {
                setNumber(value);
            }
        } catch (error) {

        }
    };



    return (
        <View style={styles.container}>
            
            <TextInput style={styles.texinput} placeholder='Nhập số Min' value={names} onChangeText={value => { setName(value) }} />
            <TextInput style={styles.texinput} placeholder='Nhập số Max' value={numbers} onChangeText={value => { setNumber(value) }} />
            <View style={{ height : 10}}></View>
            <View style={{ height : 10}}></View>

            {/* <Button title="HTTP POST" onPress={() => 
                fetch('https://randommer.io/number')
                .then(response => response.json())
                .then(data =>)
            } /> */}

            <Button title="RANDOM" onPress={() => newCOntacts(names, numbers)} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, texinput: {
        width: 250,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        borderWidth: 2
    },
});

