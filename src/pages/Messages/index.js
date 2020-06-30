import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List } from '../../components';
import { colors, fonts } from '../../utils';
import { DummyDoctor7, DummyDoctor2, DummyDoctor5 } from '../../assets';

const Messages = ({navigation}) => {
    const [doctors] = useState([
        {
            id: 1,
            profile: DummyDoctor7,
            name: 'Hanif Pratama',
            desc: 'Baik bu, terimakasih banyak atas waktunya',
        },
        {
            id: 2,
            profile: DummyDoctor2,
            name: 'Rendy De Puni',
            desc: 'thanksnya atas konsultasinya',
        },
        {
            id: 3,
            profile: DummyDoctor5,
            name: 'Andhika Alif',
            desc: 'Senang bertemu dengan anda',
        },
    ])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
            <Text style={styles.title}>Messages</Text>
            {doctors.map(doctor => {
                    return (
                    <List 
                    key={doctor.id}
                    profile={doctor.profile}
                    name={doctor.name}
                    desc={doctor.desc}
                    onPress={() => navigation.navigate('Chatting')}
                     />
                    );
                })}
            </View>
        </View>
    );
};

export default Messages;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    },

});
