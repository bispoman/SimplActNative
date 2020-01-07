import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class newComp extends Component {
    render() {
        return (
            <View style={myStyle.viewTainer}>
                <Text style={myStyle.butinstructtions}>Please DO NOT TOUCH the button below!</Text>
                <Button 
                    title='Press me'
                    onPress={() => Alert.alert("I told you not to press it. I'm  very disapointed :(")}
                />
            </View>
        )
    }
}

const myStyle = StyleSheet.create({
    viewTainer: {
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#EFC',
        },
    butinstructtions: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
    },
});