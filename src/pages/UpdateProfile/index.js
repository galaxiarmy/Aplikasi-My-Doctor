import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Header, Input, Profile, Button, Gap } from '../../components';

const UpdateProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()}  />
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
            <Profile isRemove name="Shafira Amalia" desc="IOS Developer" />
            <Gap height={26} />
            <Input label="Full Name" />
            <Gap height={24} />
            <Input label="Pekerjaan" />
            <Gap height={24} />
            <Input label="Email" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={40} />
            <Button title="Save Profile" onPress={() => navigation.goBack('UserProfile')}  />
            </View>
            </ScrollView>
        </View>
    );
};

export default UpdateProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    },
    content: {
        padding: 40,
        paddingTop: 0,
    }

})
