import React, { Component } from 'react';
import '../styles/App.css';
import CelaviveHeader from '../components/landingspecific/header'
import CelaviveFooter from '../components/footer'
import CelaviveCta from '../components/cta/cta'
import Navigation from '../components/navigation'

class Landing extends Component {
    render() {
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