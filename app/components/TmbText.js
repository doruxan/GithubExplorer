import React from 'react'
import { Text } from 'react-native'

const TmbText = ({children,...props }) => {
    return (
        <Text allowFontScaling={false} {...props}>{children}</Text >
    )
}

export default TmbText