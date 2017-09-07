import React, { Component } from 'react';
import CelaviveFooter from '../components/footer'
import CelaviveCta from '../components/cta'
import Hero from '../components/introspecific/header'
import SectionIntro from '../components/introspecific/sectionintro'
import SectionIncell from '../components/introspecific/sectionincell'
import SectionFounded from '../components/introspecific/sectionfounded'
import Navigation from '../components/navigation'
import {languages} from '../languages/languages'
import { chlan } from '../actions/actions'
import store from '../store'
import Science from '../components/introspecific/science'


class Intro extends Component {

    constructor(){
        super()

    }



    render() {


       const chosenLanguage = languages.find(item => item.language === this.props.match.params.language)
        const currentState = store.getState()


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
                <CelaviveCta/>
                <CelaviveFooter/>
            </div>
        );
    }

}

export default Intro