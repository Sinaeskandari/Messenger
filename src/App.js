import React from 'react';
import './App.css';
import Login from './component/auth/login'
import SignUp from './component/auth/signup'
import FirstPage from './component/auth/first_page'
import Messenger from './component/messenger/messenger'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import conversation from './reducer/conversation'
import logger from 'redux-logger'

const store = createStore(conversation,applyMiddleware(logger))
class App extends React.Component{
  render () {
    return(
        <Provider store={store}>
          <Router>
            <Route path='/' exact component={FirstPage}/>
            <Route path='/SignIn' component={Login}/>
            <Route path='/SignUp' component={SignUp}/>
            <Route path='/messenger' component={Messenger}/>
          </Router>
        </Provider>
    )
  }
}
export default App;
