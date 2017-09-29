import React, { Component } from 'react';
import '../styles/App.css';
import CelaviveHeader from '../components/landingspecific/header'
import CelaviveFooter from '../components/footer'
import CelaviveCta from '../components/cta/cta'
import Navigation from '../components/navigation/navigation'
import {languages} from '../languages/languages'
import { chlan, chpage } from '../actions/actions'
import store from '../store'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import DocumentMeta from 'react-document-meta';




class Landing extends Component {
  constructor(){
    super()
    this.state = {
      id: '1',
      page:'1',
      redirect: false
    }

  }



    render() {

      const metaData = {
        title: 'Introducing Celavive',
        description: 'I am a description, and I can create multiple tags',
        canonical: 'http://example.com/path/to/page',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'react,meta,document,html,tags'
          }
        }
      };



      const { redirect } = this.state;
      const redirectIfVistised = localStorage.getItem('languageRedirectIfVisited')


      if(redirectIfVistised){
        this.setState({
          redirect: true
        })
      }

      if(redirect){
        return <Redirect to={`${redirectIfVistised}/2/intro`}/>;
      }





console.log(this.state)
      const currentPage =  this.props.match.params.page


      //check for current page if null update the redux store
      console.log(currentPage)
      if(currentPage !== null){
        const updatePage = {
          page: currentPage
        }
        store.dispatch(chpage(updatePage))
      }else{
        const updatePage = {
          page: 1
        }
        store.dispatch(chpage(updatePage))
      }



      //get language from file languages/languages.js
      let chosenLanguage = languages.find(item => item.language === this.props.match.params.language)

      //assign the current state that is in the store
      //const currentState = store.getState()

      //if the chosen language does not equal current state, update redux store
      if(chosenLanguage){
        store.dispatch(chlan(chosenLanguage))
      }else{
        chosenLanguage = languages.find(item => item.language === 'us-en')
        store.dispatch(chlan(chosenLanguage))
        }


      console.log(chosenLanguage)
        return (
            <div className="full-height">
              <DocumentMeta {...metaData} extend />
                <Navigation/>
                <CelaviveHeader/>
                <CelaviveCta/>
                <CelaviveFooter/>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
   id: state.language.id



  }
}

const reduxConnect = connect(mapStateToProps)(Landing)
export default reduxConnect