import React, { Component } from 'react';
import CelaviveFooter from '../components/footer'
import CelaviveCta from '../components/cta/cta'
import Hero from '../components/introspecific/introheader/header'
import SectionIntro from '../components/introspecific/sectionintro/sectionintro'
import SectionIncell from '../components/introspecific/sectionincell'
import SectionFounded from '../components/introspecific/sectionfounded'
import Navigation from '../components/navigation/navigation'
import {languages} from '../languages/languages'
import { chlan, chpage } from '../actions/actions'
import store from '../store'
import Science from '../components/introspecific/healthyskin/science'
import SectionSocial from '../components/introspecific/sectionsocial'


class Intro extends Component {

    render() {


       const chosenLanguage = languages.find(item => item.language === this.props.match.params.language)
        const currentPage =  this.props.match.params.page
        const currentState = store.getState()

      console.log(currentPage)

      if(currentPage !== null){

         const updatePage = {
           page: currentPage
         }

         store.dispatch(chpage(updatePage))
      }



      if(chosenLanguage !== currentState){
          store.dispatch(chlan(chosenLanguage))
      }

        console.log(chosenLanguage)

        return (
            <div className="full-height">
                <Navigation/>
                <Hero/>
                <SectionIntro/>
                <SectionIncell/>
                <SectionFounded/>
                <Science/>
              <SectionSocial/>
                <CelaviveCta/>
                <CelaviveFooter/>
            </div>
        );
    }

}

export default Intro