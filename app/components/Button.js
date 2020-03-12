import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import TmbText from './TmbText'
import { colors, marginHorizontal } from '../config/constants'
import convert from '../helpers/PixelSizeHelper'

const Button = ({ onPress, text, style,textStyle, secondary }) => {
    return (
        <TouchableOpacity style={[!secondary ? styles.primaryButton : styles.secondaryButton, style]} onPress={onPress}>
            <TmbText style={[!secondary ? styles.primaryButtonText : styles.secondayButtonText, textStyle]}>{text}</TmbText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primaryButton: {
        width: convert(321),
        height: convert(56.3),
        backgroundColor: colors.accent,
        borderRadius: convert(4),
        marginHorizontal,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    primaryButtonText: {
        width: 318.5,
        height: 22,
        fontFamily: "Avenir",
        fontSize: 16,
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0.34,
        textAlign: "center",
        color: colors.white
    },
    secondaryButton: {
        width: convert(321),
        height: convert(56.3),
        backgroundColor: colors.white,

        borderRadius: convert(4),
        marginHorizontal,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: convert(4),
        borderColor: colors.accent
    },
    secondayButtonText: {
        height: 22,
        fontFamily: "Avenir",
        fontSize: 16,
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0.34,
        textAlign: "center",
        color: colors.accent
    },
})

export default Button