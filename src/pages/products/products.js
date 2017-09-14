import React, {Component} from 'react'
import Hero from './hero/hero'
import Cleanse from './cleanse/cleanse'
import Tone from './tone/tone'
import Enhance from './enhance/enhance'
import Hydrate from './hydrate/hydrate'
import Cta from '../../components/cta/cta'
import Footer from '../../components/footer'
import './products.css'


class Products extends Component{
  render(){
    return(
      <div className="products">
        <Hero/>
        <Cleanse/>
        <Tone/>
        <Enhance/>
        <Hydrate/>
        <Cta/>
        <Footer/>
      </div>
    )
  }
}
export default Products