import React, { Component } from 'react';
import './styles/App.css';
import {Route, Switch} from 'react-router-dom'
import Landing from './pages/landing'
import Intro from './pages/intro'

class App extends Component {
  render() {

    return (
      <div className="full-height">
          <Switch>
               <Route exact path="/" component={Landing}/>
               <Route  path="/intro" component={Intro}/>
               <Route exact  path="/:language/introInt" component={Intro}/>
          </Switch>
      </div>
    );

  }

}



export default App;

