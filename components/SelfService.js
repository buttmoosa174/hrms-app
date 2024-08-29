import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SelfService = ({ navigation }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <View style={styles.container}>
            {/* Sidebar */}
            {isSidebarVisible && (
                <View style={styles.sidebar}>
                    <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Dashboard')}>
                        <Ionicons name="home-outline" size={25} color="#fff" />
                        <Text style={styles.sidebarItemText}>Dashboard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('SelfService')}>
                        <Ionicons name="person-outline" size={25} color="#fff" />
                        <Text style={styles.sidebarItemText}>Self Service</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Tasks')}>
                        <Ionicons name="briefcase-outline" size={25} color="#fff" />
                        <Text style={styles.sidebarItemText}>Tasks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Notifications')}>
                        <Ionicons name="notifications-outline" size={25} color="#fff" />
                        <Text style={styles.sidebarItemText}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Settings')}>
                        <Ionicons name="settings-outline" size={25} color="#fff" />
                        <Text style={styles.sidebarItemText}>Settings</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Main Content */}
            <View style={styles.mainContent}>
                <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
                    <Ionicons name="menu-outline" size={35} color="#333" />
                </TouchableOpacity>
                
                <Text style={styles.title}>Self Service</Text>
                <View style={styles.cardContainer}>
                    <TouchableOpacity  style={styles.card} onPress={() => navigation.navigate('MyInformation')}>
                        <Ionicons name="information-circle-outline" size={50} color="#4CAF50" />
                        <Text style={styles.cardTitle}>My Information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <Ionicons name="cash-outline" size={50} color="#2196F3" />
                        <Text style={styles.cardTitle}>Payroll</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer}>
                    <TouchableOpacity style={styles.card}>
                        <Ionicons name="document-text-outline" size={50} color="#FF9800" />
                        <Text style={styles.cardTitle}>Attendance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <Ionicons name="settings-outline" size={50} color="#9C27B0" />
                        <Text style={styles.cardTitle}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
    },
    sidebar: {
        width: 250,
        backgroundColor: '#007BFF',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    sidebarItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    sidebarItemText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    menuButton: {
        alignSelf: 'flex-start',
        marginBottom: 20,
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

export default SelfService;
