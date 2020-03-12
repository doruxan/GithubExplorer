import React, { Component } from 'react'
import Router from './app/Router'
import store from "./app/redux/configureStore";
import { Provider } from 'react-redux'
import NavigationService from './app/services/NavigationService'
import { enableScreens } from 'react-native-screens';
import PopUpModal from './app/screens/PopUpModal';

enableScreens();


export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        <PopUpModal ref={ref => global.popUpModal = ref} />
      </Provider>
    )
  }
}

export default App
