import React from 'react'
import { StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import MainContainer from '../components/MainContainer'
import TmbText from '../components/TmbText'
import { fonts, colors } from '../config/constants'
import convert from '../helpers/PixelSizeHelper'
import Button from '../components/Button'

const AuthScreen = ({ navigation }) => {
    return (
        <MainContainer center>
            <TmbText style={styles.header}>This is an unfoolable AUTHORIZATION</TmbText>
            <Button onPress={() => navigation.navigate('App')} text='LOGIN' />
        </MainContainer>
    )
}

export default withNavigation(AuthScreen)

const styles = StyleSheet.create({
    header: {
        fontFamily: fonts.tmb,
        fontSize: convert(30),
        color: colors.accent,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: convert(30)
    }
})
