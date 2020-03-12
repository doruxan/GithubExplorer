import { Dimensions, Platform } from "react-native";
import convert from "../helpers/PixelSizeHelper";

const { width, height } = Dimensions.get("window");

const screen = {
  width,
  height
};

const SCREEN_MARGIN = convert(30);

const fonts = {
  tmb: "Avenir",
};

const colors = {
  primary: '#1C1E23',
  primaryDark: '#16181C',
  accent: '#FF6300',
  accentLight:'#FFE300',
  white: '#FFFFFF',
  darkGray:'#272A31'
}

export {
  screen,
  fonts,
  colors,
  SCREEN_MARGIN,
};