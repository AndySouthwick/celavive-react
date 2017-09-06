import React, { Component } from 'react';
import CelaviveFooter from '../components/footer'
import CelaviveCta from '../components/cta'
import Hero from '../components/introspecific/header'
import SectionIntro from '../components/introspecific/sectionintro'
import SectionIncell from '../components/introspecific/sectionincell'
import SectionFounded from '../components/introspecific/sectionfounded'
import {languages} from '../languages/languages'
import { chlan } from '../actions/actions'
import store from '../store'

class Intro extends Component {

    constructor(){
        super()
        const currentState = store.getState()
        this.state = currentState
    }

componentWillMount(){

}
    render() {
        const currentState = store.getState()
        console.log(currentState)

        const Selectors = languages.map((lan) =>
            <div key={lan.id}>
                <li onClick={() => this.setState({
                    id: lan.id,
                    language: lan.language,
                    intro: lan.intro,
                    founded: lan.founded,
                    science: lan.science
                })}>
                    {lan.language}
                </li>
            </div>
        );
        const localStateId = this.state.id

        if(currentState.id !== localStateId){
           store.dispatch(chlan(this.state))
        }

        {console.log(this.state)}
        return (
            <div className="full-height">
              {Selectors}
                <Hero/>
                <SectionIntro/>
                <SectionIncell/>
                <SectionFounded/>
                <CelaviveCta/>
                <CelaviveFooter/>
            </div>
        );
    }

}

export default Intro