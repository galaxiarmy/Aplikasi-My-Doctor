import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { ILHospital, DummyHospital1, DummyHospital2, DummyHospital3 } from '../../assets';
import { fonts, colors } from '../../utils';
import { ListHospital } from '../../components';

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospital} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
            <ListHospital 
            type="Rumah Sakit" 
            name="Mitra Keluarga" 
            address="jl.bekasi timur no.16" 
            pic={DummyHospital1} 
            />
            <ListHospital 
            type="Rumah Sakit Anak" 
            name="Hermina" 
            address="jl. jatinegara timur no.15" 
            pic={DummyHospital2} 
            />
            <ListHospital 
            type="Rumah Sakit Jiwa" 
            name="Tile" 
            address="jl. muwardi no.4" 
            pic={DummyHospital3} 
            />
            </View>

            
        </View>
    );
};

export default Hospitals;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    background: {
        height: 240,
        paddingTop: 30,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center',
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.white,
        marginTop: 6,
        textAlign: 'center',
    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 20,
        flex: 1,
        marginTop: -30,
        paddingTop: 14,
    },
});
