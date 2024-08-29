import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <View style={styles.cardContainer}>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Ionicons name="person-outline" size={50} color="#4CAF50" />
                    <Text style={styles.cardTitle}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Ionicons name="briefcase-outline" size={50} color="#2196F3" />
                    <Text style={styles.cardTitle}>Tasks</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.card}>
                    <Ionicons name="notifications-outline" size={50} color="#FF9800" />
                    <Text style={styles.cardTitle}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Ionicons name="settings-outline" size={50} color="#9C27B0" />
                    <Text style={styles.cardTitle}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    cardTitle: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
});

export default Dashboard;
