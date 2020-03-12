import { Dimensions, Platform, PixelRatio } from 'react-native'

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
} = Dimensions.get('window')

let scale = SCREEN_WIDTH / 375

export default function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

export function cardHeader(string) {
    const length = string.length

    const size = (205 - length) / 4.8

    return normalize(size)
}

export function bigHeader(string) {
    const length = string.length

    const size = (160 - length) * 0.514

    return normalize(size)
}
