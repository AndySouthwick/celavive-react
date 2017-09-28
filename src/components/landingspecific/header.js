import React, {Component} from 'react'
import ReactSVG from 'react-svg'
import {connect} from'react-redux'


class CelaviveHeader extends Component {

    render(){



        return(

            <header>
            <div className="header-content">
                <div className="header-content-inner" data-color="#FFA500, #bada55, #4964A1">
                    <ReactSVG
                      path={this.props.landinghero}
                      callback={svg => console.log(svg)}
                      className="example"
                    />


                </div>
            </div>
            <div className="img-reveal">
                <img src={require('../../img/img-reveal.png')} alt="" id="imgReveal" className="animated fadeInUp img-responsive text-center"/>
            </div>
            </header>


        )
    }
}
const mapStatetoProps = state => ({
  landinghero: state.changeit.landinghero
})
const withReduxConnect = connect(mapStatetoProps)(CelaviveHeader)
export default withReduxConnect