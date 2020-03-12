import React from 'react';
import { Modal, TouchableOpacity, View, StyleSheet, Animated, Platform } from 'react-native';
import convert from '../helpers/PixelSizeHelper';
import normalize from '../helpers/FontSizeHelper';
import TmbText from '../components/TmbText';
import Button from '../components/Button';
import BaseScreen from './BaseScreen';
import { colors } from '../config/constants';

class PopUpModal extends BaseScreen {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }
        this.backgroundValue = new Animated.Value(0)
    }

    closeModal = () => {
        Animated.timing(this.backgroundValue, {
            toValue: 0,
            duration: 100
        }).start(() => {
            this.dispatchAction(this.$().RESET_POPUP)
            this.setState({ visible: false })
        })
    }

    cancelModal = () => {
        Animated.timing(this.backgroundValue, {
            toValue: 0,
            duration: 100
        }).start(() => {
            this.dispatchAction(this.$().RESET_POPUP)
            this.setState({ visible: false })
        })
    }

    openModal = () => {
        this.setState({ visible: true })
    }

    onShow = () => {
        Animated.timing(this.backgroundValue, {
            toValue: 1,
            duration: Platform.OS === 'ios' ? 100 : 500
        }).start()
    }

    render() {
        const state = this.$store().getState()

        var color = this.backgroundValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']
        });

        return (
            <Modal

                animationType="slide"
                transparent={true}
                visible={this.state.visible}
                onRequestClose={this.closeModal}
                onShow={this.onShow}
            >
                <Animated.View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: color }} >
                    <View style={styles.modal}>

                        <View style={styles.contentBody}>
                            <View>
                                <TmbText style={styles.title}>WARNING</TmbText >
                                <TmbText style={styles.content}>{state.popup.message}</TmbText >
                            </View>

                            <Button
                                style={styles.buttonStyle}
                                textStyle={styles.buttonText}
                                text='OK'
                                onPress={this.closeModal}
                            />
                        </View>
                    </View>
                </Animated.View>
            </Modal>

        );
    }
}

const styles = StyleSheet.create({
    modal: {
        width: convert(300),
        height: convert(200),
        borderRadius: convert(15),

        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: convert(15)
        },
        shadowRadius: convert(25),
        shadowOpacity: 1,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: convert(20)
    },
    contentBody: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1,
        height: convert(332),
        alignSelf: 'center',
        paddingHorizontal: convert(20)
    },
    title: {
        fontSize: normalize(26),
        letterSpacing: 0.5,
        textAlign: "center",
        color: "#002251",
        marginBottom: convert(20)
    },
    content: {
        fontSize: normalize(16),
        letterSpacing: 0,
        textAlign: "center",
        color: "#7a869a"
    },
    buttonStyle: {
        width: convert(275),
        height: convert(44),
        borderRadius: convert(8),
        backgroundColor: colors.darkGray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: normalize(20),
        letterSpacing: 0,
        textAlign: "center",
        color: colors.accent
    },
});



export default PopUpModal
