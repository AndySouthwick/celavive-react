import React, { Component } from 'react';
import './styles/App.css';
import {Route, Switch, } from 'react-router-dom'
import Landing from './pages/landing'
import Intro from './pages/intro'
import Products from './pages/products/products'

class App extends Component {
  render() {

    return (
      <div className="full-height">
          <Switch>

            <Route exact path="/" component={Landing}/>
            <Route exact path="/:language" component={Landing}/>
            <Route exact path="/:language/:page" component={Landing}/>
            <Route exact path="/:language/:page/?lan=us-en" component={Landing}/>
            <Route  path="/intro" component={Intro}/>
            <Route exact  path="/:language/:page/intro" component={Intro}/>
            {/*<Route exact  path="/:language/:page/products" component={Products}/>*/}
          </Switch>
      </div>
    );

  }

}



export default App;

