import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ILCatAnak, ILCatObat, ILCatPsi, ILCatUmum } from '../../../assets';
import { colors, fonts } from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
    const Icon = () => {
        if(category ===  'Dokter Umum') {
            return <ILCatUmum style={styles.illustration} />
        }
        if(category === 'Dokter Psikiater') {
            return <ILCatPsi style={styles.illustration} />
        }
        if(category === 'Obat') {
            return <ILCatObat style={styles.illustration} />
        }
        if(category === 'Dokter Anak') {
            return <ILCatAnak style={styles.illustration} />
        }
        return <ILCatUmum style={styles.illustration} />
    };
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon />
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
    );
};

export default DoctorCategory;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 115,
        height: 130,
    },
    illustration :{
        marginBottom: 24,
    },
    label: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary,
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    avatar: {
        width: 46,
        height: 46,
    }
});
