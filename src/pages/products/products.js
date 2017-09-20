import React, {Component} from 'react'
import Hero from './hero/hero'
import Cleanse from './cleanse/cleanse'
import Tone from './tone/tone'
import Enhance from './enhance/enhance'
import Hydrate from './hydrate/hydrate'
import Cta from '../../components/cta/cta'
import Footer from '../../components/footer'
import './products.css'
import Navigation from '../../components/navigation/navigation'
import {languages} from '../../languages/languages'
import { chlan, chpage } from '../../actions/actions'
import store from '../../store'


class Products extends Component{

  constructor(){
    super()
  }




  render(){


    const currentPage =  this.props.match.params.page

    console.log(currentPage)

    if(currentPage !== null){

      const updatePage = {
        page: currentPage
      }

      store.dispatch(chpage(updatePage))
    }


    const chosenLanguage = languages.find(item => item.language === this.props.match.params.language)

    const currentState = store.getState()


    if(chosenLanguage !== currentState){
      store.dispatch(chlan(chosenLanguage))
    }

    console.log(this.props.match.params.page)


    return(
      <div className="products">
        <Navigation/>
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