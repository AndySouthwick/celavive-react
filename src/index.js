import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import {languages} from './languages/languages'
import ReactSEO from 'react-seo'






let searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get("lan")) //123
const chosenLanguage = languages.find(item => item.language === searchParams.get("lan"))

ReactSEO.startMagic([{
  url:'/us-en/1/?lan=us-en',
  isFullMatch:true,
  ajaxFunction:chosenLanguage,
  getEntryPoint: window.location,
}],
renderDOM);

function renderDOM(){
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
}
registerServiceWorker();
