import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DummyDoctor5, DummyDoctor6, DummyDoctor8, DummyDoctor2, DummyDoctor7 } from '../../assets';
import { Header, List } from '../../components';
import { colors } from '../../utils';

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} type="dark" title="Pilih Dokter Anak" />
            <List type="next" profile={DummyDoctor2} name="Bambang Supriyanto" desc="Pria" />
            <List type="next" profile={DummyDoctor5} name="Aprianto Dwiputra" desc="Pria" />
            <List type="next" profile={DummyDoctor6} name="Norine" desc="Wanita" />
            <List type="next" profile={DummyDoctor7} name="Idham Azis" desc="Pria" />
            <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor8} name="Fisa Ayu" desc="Wanita" />
        </View>
    );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    }
})
