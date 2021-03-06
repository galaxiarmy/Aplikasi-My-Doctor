import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, InputChat, } from '../../components';
import { fonts, colors } from '../../utils';
import { ChatItem } from  '../../components'

const Chatting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} type="dark-profile" title="Fisa Ayu" />
            <View style={styles.content}>
            <Text style={styles.chatDate}>Kamis, 28 Maret 2020</Text>
            <ChatItem isMe />
            <ChatItem />
            <ChatItem isMe />
            </View>
            <InputChat />
            

        </View>
    );
};

export default Chatting;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center'
    },
    content: {
        flex: 1
    }
})
