import React, { Component } from 'react';
import CelaviveFooter from '../components/footer'
import CelaviveCta from '../components/cta'
import Hero from '../components/introspecific/header'

class Intro extends Component {


    render() {
        return (
            <div className="full-height">
                <Hero/>
                <CelaviveCta/>
                <CelaviveFooter/>
            </div>
        );
    }

}

export default Intro