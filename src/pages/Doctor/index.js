import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeProfile, DoctorCategory, RatedDoctor, NewsItem, Gap } from '../../components';
import { fonts, colors } from '../../utils';
import { ScrollView } from 'react-native-gesture-handler';
import { JSONCategoryDoctor, DummyDoctor1, DummyDoctor6, DummyDoctor8 } from '../../assets';


const Doctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
            </View>
            <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
            <Gap width={32}  />
            {JSONCategoryDoctor.data.map(item => {
            return <DoctorCategory category={item.category} key={item.id} onPress={() => navigation.navigate('ChooseDoctor') } />;
            })}
            <Gap width={22} />
            </View>
            </ScrollView>
            </View> 
            <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor onPress={() => navigation.navigate('DoctorProfile')} avatar={DummyDoctor1} name="Fisa Ayu" desc="Dokter Bedah" />
            <RatedDoctor onPress={() => navigation.navigate('DoctorProfile')} avatar={DummyDoctor8} name="Norine" desc="Dokter Syaraf" />
            <RatedDoctor onPress={() => navigation.navigate('DoctorProfile')} avatar={DummyDoctor6} name="Shafira" desc="Dokter Anak"/>
            <Text style={styles.sectionLabel}>Good News</Text>
            </View>
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <Gap height={30} />
            </ScrollView>
            </View>
        </View>
    );
};

export default Doctor;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209,
    },
    category: {
        flexDirection: 'row',
    },
    wrapperScroll: { marginHorizontal: -16 },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
    },
    wrapperSection: {
        paddingHorizontal: 16,
    }
});
