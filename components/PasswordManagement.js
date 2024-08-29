import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PasswordManagement = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Password Management</Text>
            
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="#333" />
                <TextInput
                    placeholder="Current Password"
                    style={styles.input}
                    secureTextEntry={true}
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="#333" />
                <TextInput
                    placeholder="New Password"
                    style={styles.input}
                    secureTextEntry={true}
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="#333" />
                <TextInput
                    placeholder="Confirm New Password"
                    style={styles.input}
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Update Password</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PasswordManagement;
