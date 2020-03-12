import {Dimensions, PixelRatio } from 'react-native'

const {
    width:SCREEN_WIDTH,
    height:SCREEN_HEIGHT
} = Dimensions.get('window')

let scale = SCREEN_WIDTH / 375
let scaleY = SCREEN_HEIGHT / 812

export default function convert(size){
    const newSize = size * scale 
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export function convertY(size){
    const newSize = size * scaleY 
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
}