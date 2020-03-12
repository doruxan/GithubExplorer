import React from 'react'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import convert from '../helpers/PixelSizeHelper'
import { colors } from '../config/constants'
import TmbText from './TmbText'

const MainListItem = ({ title, description , onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <TmbText style={styles.header}>{title}</TmbText>
                <TmbText style={styles.desc}>{description}</TmbText>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: convert(100),
        width: '100%',
        borderColor: colors.accent,
        borderRadius: convert(8),
        borderWidth: 1,
        marginVertical: convert(8),
        overflow:'hidden'
    },
    header: {
        color: colors.accent,
        marginTop: convert(12),
        marginLeft: convert(12)
    },
    desc: {
        color: colors.accentLight,
        marginTop: convert(8),
        marginLeft: convert(12)
    }
})

export default MainListItem