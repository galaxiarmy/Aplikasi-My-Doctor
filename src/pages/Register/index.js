import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Gap, Header, Input } from '../../components';
import { colors, useForm } from '../../utils';

const Register = ({navigation}) => {

    const [form, setForm] = useForm({
        fullName: '',
        profession: '',
        email: '',
        password: '',
    })

    const onContinue = () => {
        console.log(form)
       // navigation.navigate('UploadPhotos')

    }


    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
            <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Input 
                label="Full Name" 
                value={form.fullName} 
                onChangeText={value => setForm('fullName', value)} 
            />
            <Gap height={24} />
            <Input 
                label="Pekerjaan" 
                value={form.profession} 
                onChangeText={value => setForm('profession', value)} 
            />
            <Gap height={24} />
            <Input 
                label="Email" 
                value={form.email} 
                onChangeText={value => setForm('email', value)} 
            />
            <Gap height={24} />
            <Input 
                label="Password" 
                value={form.password} 
                onChangeText={value => setForm('password', value)}
                secureTextEntry 
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
            </ScrollView>
            </View>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container:{
        padding: 40,
        paddingTop: 0,
    },
    page: {
        backgroundColor: colors.white,
        flex: 1,
    }
})