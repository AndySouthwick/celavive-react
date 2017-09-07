import React, {Component} from 'react'

class Scinece extends Component {
    render(){
        return(
            <section className="section-science">
                <div className="container">
                    <div className="row animatedRow ">
                        <img src={require("../../img/bubbles-mobile.png")} className="ae7 visible-xs visible-sm" alt=""/>
                        <img src={require("../../img/celavive-pic-1.png")} alt="" className="celavive-pic-1 img-responsive hidden-sm hidden-xs"/>
                        <img src={require("../../img/healthy-rect.png")} alt="" className="healthy-rect img-responsive hidden-sm hidden-xs"/>
                        <img src={require("../../img/healthy-looking-skin.png")} alt="" className="healthy-quote img-responsive hidden-sm hidden-xs"/>
                        <img src={require("../../img/healthy-mobile.png")} alt="" className="visible-sm visible-xs img-responsive"/>
                    </div>
                </div>
            </section>
        )
    }
}
export default Scinece