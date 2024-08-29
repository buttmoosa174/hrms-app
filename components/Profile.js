import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://example.com/profile-picture.jpg' }} // Replace with actual image URL or local asset
                style={styles.profileImage}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>johndoe@example.com</Text>

            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Position:</Text>
                <Text style={styles.infoValue}>Software Developer</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Department:</Text>
                <Text style={styles.infoValue}>IT</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Location:</Text>
                <Text style={styles.infoValue}>San Francisco, CA</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 10,
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoValue: {
        fontSize: 16,
        color: '#555',
    },
    button: {
        marginTop: 30,
        padding: 15,
        backgroundColor: '#007BFF',
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Profile;
