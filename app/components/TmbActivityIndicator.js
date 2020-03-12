import React from 'react'
import { ActivityIndicator} from 'react-native'
import MainContainer from './MainContainer'
import { colors } from '../config/constants'

const TmbActivityIndicator = () => {
    return (
        <MainContainer>
            <ActivityIndicator size="large" color={colors.accent} />
        </MainContainer>
    )
}

export default TmbActivityIndicator