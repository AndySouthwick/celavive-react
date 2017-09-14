import React, {Component} from 'react'
import './header.css'

class Hero extends Component {
    render() {
        return (
            <header>
                <div className="header-content">
                    <div className="header-content-inner" data-color="#FFA500, #bada55, #4964A1">
                        <img src={require('../../../img/celavive-hero.png')} alt=""
                             className="img-responsive productReveal" />
                    </div>
                </div>

            </header>
        )
    }
}

export default Hero