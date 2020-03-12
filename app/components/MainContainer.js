import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { SCREEN_MARGIN, colors } from '../config/constants'

const MainContainer = ({ children, scrollable, center }) => {
    if (scrollable) {
        return (
            <ScrollView style={[styles.container, center ? styles.center : null]}>
                {children}
            </ScrollView>
        )
    }

    return (
        <View style={[styles.container, center ? styles.center : null]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: SCREEN_MARGIN,
        backgroundColor: colors.darkGray
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MainContainer