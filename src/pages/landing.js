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
import axios from 'axios'



class Landing extends Component {
  constructor(){
    super()
    this.state = {
      redirect: false,
      language: '',
      redirectIfVisited: null
    }

  }


  redirectForLanguage = () => {
    console.log('test')
  }


  componentWillMount(){
    axios.get("http://ip-api.com/json").then((res) => {
      console.log(res.data.countryCode)
      let browserLanguage = window.navigator.languages[0]
      let str = res.data.countryCode
      let language = str.toLowerCase() + '-' + browserLanguage[0] + browserLanguage[1]
      console.log(language)
      this.setState({
        language: language,
      })
    })
  }

    render() {

    let redirectIfVisited = localStorage.getItem('languageRedirectIfVisited')

      if(redirectIfVisited){
        return <Redirect to={`${redirectIfVisited}/2/intro`}/>
      }

      const metaData = {
        title: 'Introducing Celavive',
        description: 'Best Skin Care Line – Healthy Skin for the Win - Celavive',
        canonical: 'http://example.com/path/to/page',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'react,meta,document,html,tags'
          }
        }
      };

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
      let chosenLanguage = languages.find(item => item.language === this.state.language)

      //assign the current state that is in the store
      //const currentState = store.getState()

      //if the chosen language does not equal current state, update redux store
      if(chosenLanguage){
        store.dispatch(chlan(chosenLanguage))
      }


      console.log(chosenLanguage)
      if(!this.state.language){
        return <div>
          ...Loading
        </div>
      }
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