import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Profile, ProfileItem } from '../../components';
import { colors } from '../../utils';

const DoctorProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
            <Profile name="Shafira Amalia" desc="Dokter Bedah" />
            <Gap height={10} />
            <ProfileItem label="Alumnus" value="Universitas Gunadarma, 2020" />
            <ProfileItem label="Tempat Praktik" value="Rumah Sakit Internasional Gunadarma"  />
            <ProfileItem label="No. STR" value="454848151548545"  />
            <View style={styles.action}>
            <Button title="Mulai Konsultasi" onPress={() => navigation.navigate('Chatting')} />
            </View>
            
        </View>
    );
};

export default DoctorProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    action: {
        paddingHorizontal: 40,
        paddingTop: 23,
    },
})
