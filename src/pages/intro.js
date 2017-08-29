import React, { Component } from 'react';
import CelaviveFooter from '../components/footer'
import CelaviveCta from '../components/cta'

class Intro extends Component {
    render() {
        return (
            <div className="full-height">
                <CelaviveCta/>
                <CelaviveFooter/>
            </div>
        );
    }
}

export default Intro