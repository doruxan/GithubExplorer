import { createAppContainer, createSwitchNavigator, } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './screens/MainScreen'
import DetailScreen from './screens/DetailScreen'
import IssuesScreen from './screens/IssuesScreen'
import PRsScreen from './screens/PRsScreen'
import { colors, fonts } from './config/constants'
import AuthScreen from './screens/AuthScreen'


const AppStack = createStackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: {
            title: 'REPOS',
        }
    },
    Detail: {
        screen: DetailScreen
    },
    Issues: {
        screen: IssuesScreen,
        navigationOptions: {
            title: 'ISSUES',
        }
    },
    PRs: {
        screen: PRsScreen,
        navigationOptions: {
            title: 'PRs', 
        }
    }
},
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.primaryDark,
            },
            headerTintColor: colors.accent,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: fonts.tmb
            },
        },
    }
)

const AuthSwitch = createSwitchNavigator({
    Auth: AuthScreen,
    App: AppStack
})

const AppContainer = createAppContainer(AuthSwitch)

export default (AppContainer)
