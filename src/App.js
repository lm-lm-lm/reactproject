import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Login from './components/Login'
import Index from './components/Index'
import Regist from './components/Regist'
<<<<<<< HEAD
import Quanqiu from './components/Quanqiu'

=======
import Huiyuan from './components/Huiyuan'
import Grzl from './components/Grzl'
>>>>>>> 6e74ede67732d27515e6e39d08970ff3b75b9f40
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>

            <Switch>
              <Route path="/login" component={Login}></Route>
<<<<<<< HEAD
              <Route path="/index" component={Index}></Route>
              <Route path='/quanqiu' component={Quanqiu}></Route>
              <Redirect to="/index"/>
=======
              <Route path="/index" component={Index}>
                
              </Route>
              <Route path="/regist" component={Regist}></Route>
              <Route path="/huiyuan" component={Huiyuan}></Route>
              <Route path="/grzl" component={Grzl}></Route>
              <Redirect to="/index" />
>>>>>>> 6e74ede67732d27515e6e39d08970ff3b75b9f40
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
