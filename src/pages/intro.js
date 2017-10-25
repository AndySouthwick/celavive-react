import React, { Component } from 'react';
import CelaviveFooter from '../components/footer'
import CelaviveCta from '../components/cta/cta'
import Hero from '../components/introspecific/introheader/header'
import SectionIntro from '../components/introspecific/products/products'
import FoundedOnScience from '../components/introspecific/foundedonscience/foundedonscience'
import SectionIncelligence from '../components/introspecific/incelligence/sectionincelligence'
import Navigation from '../components/navigation/navigation'
import {languages} from '../languages/languages'
import { chlan, chpage } from '../actions/actions'
import store from '../store'
import Science from '../components/introspecific/healthyskin/science'
import SectionSocial from '../components/introspecific/sectionsocial'
import DocumentMeta from 'react-document-meta';


class Intro extends Component {

    render() {



      const metaData = {
        title: 'Introducing Celavive',
        description: 'Best Skin Care Line – Healthy Skin for the Win - Celavive',
        canonical: '/',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'react,meta,document,html,tags'
          }
        }
      };


       const chosenLanguage = languages.find(item => item.language === this.props.match.params.language)
        const currentPage =  this.props.match.params.page
        const currentState = store.getState()
         const storeLanguage = this.props.match.params.language

            localStorage.setItem('languageRedirectIfVisited', storeLanguage)

      console.log(currentPage)

      if(currentPage !== null){

         const updatePage = {
           page: currentPage
         }

         store.dispatch(chpage(updatePage))
      }



      if(chosenLanguage !== currentState){
          store.dispatch(chlan(chosenLanguage))
      }

        console.log(chosenLanguage)

        return (
            <div className="full-height">
              <DocumentMeta {...metaData} extend />
                <Navigation/>
                <Hero/>
                <Science/>
                <FoundedOnScience/>
                <SectionIncelligence/>
              <SectionIntro/>
              <SectionSocial/>
                <CelaviveCta/>
                <CelaviveFooter/>
            </div>
        );
    }

}

export default Intro