import React from 'react'
import { View, StyleSheet, } from 'react-native'
import { connect } from 'react-redux'
import BaseScreen from './BaseScreen'
import MainContainer from '../components/MainContainer'
import TmbText from '../components/TmbText'
import { fonts, colors } from '../config/constants'
import convert from '../helpers/PixelSizeHelper'
import normalize from '../helpers/FontSizeHelper'
import Markdown from 'react-native-markdown-renderer'
import { ActivityIndicator } from 'react-native'
import Button from '../components/Button'

export class DetailScreen extends BaseScreen {

    static navigationOptions = {
        title: 'DETAIL',
    };

    componentDidMount(){
        this.dispatchAction(this.$().README_REQUEST, this.props.detail.title)
    }

    issuesOnPress = () => {
        let query = {
            page: 1,
            repo: this.props.detail.title
        }
        this.dispatchAction(this.$().ISSUES_REQUEST, query)
        this.navigate('Issues')
    }

    prsOnPress = () => {
        let query = {
            page: 1,
            repo: this.props.detail.title
        }
        this.dispatchAction(this.$().PRS_REQUEST, query)
        this.navigate('PRs')
    }

    render() {
        const { detail } = this.props
        return (
            <MainContainer scrollable>
                <TmbText style={styles.header}>{detail.title}</TmbText>
                <TmbText style={styles.desc}>{detail.description}</TmbText>
                <View style={styles.buttonContainer}>
                    <Button style={styles.buttonLeft} text='Issues' onPress={this.issuesOnPress} />
                    <Button secondary style={styles.buttonRight} text='PRs' onPress={this.prsOnPress} />
                </View>
                {!this.props.readMe && <ActivityIndicator size="large" color={colors.accent} />} 
                <Markdown style={styles}>{this.props.readMe}</Markdown>

            </MainContainer>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontFamily: fonts.tmb,
        color: colors.accent,
        fontSize: normalize(30),
        marginTop: convert(30)
    },
    desc: {
        fontFamily: fonts.tmb,
        color: colors.accent,
        marginTop: convert(30),
        marginBottom: convert(10)
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: convert(15)
    },
    buttonLeft: {
        width: convert(150)
    },
    buttonRight: {
        width: convert(150)
    },
    heading: {
        fontFamily: fonts.tmb,
        color: colors.accentLight,
    },
    heading1: {
        fontFamily: fonts.tmb,
        color: colors.accentLight,
    },
    heading2: {
        fontFamily: fonts.tmb,
        color: colors.accentLight,
    },
    heading3: {
        fontFamily: fonts.tmb,
        color: colors.accentLight,
    },
    codeBlock: {
        fontFamily: fonts.tmb,
        color: colors.accentLight,
    },
    del: {
        fontFamily: fonts.tmb,
        color: colors.accentLight,
    },
    em: {
        fontFamily: fonts.tmb,
        color: colors.accentLight,
    },

    text: {
        fontFamily: fonts.tmb,
        color: colors.accentLight,
    },
    strikethrough: {
        fontFamily: fonts.tmb,
        color: colors.accentLight,
    },
    a: {
        fontFamily: fonts.tmb,
        color: colors.accentLight,
    },
    u: {
        fontFamily: fonts.tmb,
        color: colors.accentLight,
    }

})

const mapStateToProps = (state) => ({
    detail: state.detail.detail,
    readMe: state.detail.readMe
})

export default connect(mapStateToProps)(DetailScreen)
