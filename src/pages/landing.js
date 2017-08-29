import React, { Component } from 'react';
import '../styles/App.css';
import CelaviveHeader from '../components/landingspecific/header'
import CelaviveFooter from '../components/footer'
import CelaviveCta from '../components/cta'

class Landing extends Component {
    render() {
        return (
            <div className="full-height">
                <CelaviveHeader/>
                <CelaviveCta/>
                <CelaviveFooter/>
            </div>
        );
    }
}

export default Landing