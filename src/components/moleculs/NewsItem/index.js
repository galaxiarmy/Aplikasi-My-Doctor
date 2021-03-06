import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DummyNews1 } from '../../../assets';
import { fonts, colors } from '../../../utils';

const NewsItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
            <Text style={styles.title}>Is it safe to stay at home during coronavirus?</Text>
            <Text>Today</Text>
            </View>
            <Image source={DummyNews1} style={styles.image} />
        </View>
    );
};

export default NewsItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 12,
        paddingTop: 16,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    date: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 4,
    },
    image: {
        width: 80,
        height: 60,
        borderRadius: 11,
    },
    titleWrapper: {
        flex: 1,
    }
});
