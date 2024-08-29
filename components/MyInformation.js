import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';

const MyInformation = () => {
    // State to store the employee data
    const [data, setdata] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://10.10.100.4:8013/api/hrm_empCompanyinfo/empCompInfoByEmpID/', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI1MDA4MTc4LCJpYXQiOjE3MjQ5MjE3NzgsImp0aSI6IjNlYjhhZjk5Nzg3NzQwNDZiYjA5YjM5NGVmNDY1MDI3IiwidXNlcl9pZCI6NX0.XDaVWXFT_vp6udp16sYV6u25q09kuHoXAOqbQRsmYUc', // or other authentication method
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        empId: 6408,
                        ipAddress: '10.10.100.26'
                    })
                });
                const data = await response.json();
                
                setdata(data);
            } catch (error) {
                console.error('Error fetching employee data:', error);8-''
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Show a loading spinner while fetching data
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading Employee Information...</Text>
            </View>
        );
    }

    // Render the component with the fetched data
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header Section with Background and Profile Image */}
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/1000x200' }} // Replace with actual background image URL
                    style={styles.backgroundImage}
                />
                <View style={styles.profileContainer}>
                    <Image
                        source={{ uri: 'http://10.10.100.4:8010/media/8502.jpg' }} // Use the profile image from API
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>{data[0]['Employee']['name']}</Text>
                    <Text style={styles.profileDepartment}>{data.department}</Text>
                </View>
            </View>

            {/* Basic Info Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Basic Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.value}>{data[0]['Employee']['name']}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Father Name:</Text>
                    <Text style={styles.value}>{data[0]['Employee']['FatherName']}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>CNIC:</Text>
                    <Text style={styles.value}>{data[0]['Employee']['CNICNO']}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Date of Birth:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Marital Status:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Address:</Text>
                    <Text style={styles.value}></Text>
                </View>
            </View>

            {/* Company Information Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Company Information</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Date of Joining:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Date of Permanent:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Department:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Designation:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Section:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Bank:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Bank Account No:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Report To:</Text>
                    <Text style={styles.value}></Text>
                </View>
            </View>

            {/* Contact Information Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contact Information</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Contact No.:</Text>
                    <Text style={styles.value}></Text>
                </View>
            </View>

            {/* Job Timings Information Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Job Timings Information</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Shift:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Job Start Time:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Job End Time:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Break Start Time:</Text>
                    <Text style={styles.value}></Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Break End Time:</Text>
                    <Text style={styles.value}></Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    backgroundImage: {
        width: '100%',
        height: 150,
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: -50, // Positions the profile image above the header
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff',
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
    },
    profileDepartment: {
        fontSize: 16,
        color: '#888',
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#555',
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
});

export default MyInformation;
