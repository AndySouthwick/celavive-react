import React, { Component } from 'react';
import '../styles/App.css';
import CelaviveHeader from '../components/landingspecific/header'
import CelaviveFooter from '../components/footer'
import CelaviveCta from '../components/cta/cta'
import Navigation from '../components/navigation/navigation'
import {languages} from '../languages/languages'
import { chlan, chpage } from '../actions/actions'
import store from '../store'

class Landing extends Component {
  constructor(){
    super()

  }

    render() {

      const currentPage =  this.props.match.params.page

      console.log(currentPage)

      if(currentPage !== null){

        const updatePage = {
          page: currentPage
        }

        store.dispatch(chpage(updatePage))
      }

      const chosenLanguage = languages.find(item => item.language === this.props.match.params.language)

      const currentState = store.getState()


      if(chosenLanguage !== currentState){
        store.dispatch(chlan(chosenLanguage))
      }

      console.log(chosenLanguage)
        return (
            <div className="full-height">
                <Navigation/>
                <CelaviveHeader/>
                <CelaviveCta/>
                <CelaviveFooter/>
            </div>
        );
    }
}

export default Landing