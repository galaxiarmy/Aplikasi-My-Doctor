import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, List, Profile, Gap } from '../../components';

const UserProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={() => navigation.goBack()} />
            <Gap height={10} />
            <Profile name="Shafira Amalia" desc="IOS Developer" />    
            <Gap height={14} />
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile" onPress={() => navigation.navigate('UpdateProfile')} />
            <List name="Languange" desc="Last Update Yesterday" type="next" icon="edit-language" />
            <List name="Rate Doctor" desc="Last Update Yesterday" type="next" icon="edit-rate" />
            <List name="Help Us" desc="Last Update Yesterday" type="next" icon="edit-help" />
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
})
