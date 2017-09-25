import React, {Component} from 'react'
import {languages} from '../../languages/languages'
import { chlan } from '../../actions/actions'
import store from '../../store'
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import {Container, Col, Row, Button} from 'reactstrap'
import './navigation.css'


class Navigation extends Component {
  constructor(props) {
    super(props);
    const currentState = store.getState()
    this.state = {
      ...currentState,
      toggleNavMenu: 'hideMenu',
      toggleButton: 'togleButonOff',
      redirect: false
    };
  }

  toggleMenuOn = () => {
    this.setState({
      toggleNavMenu: 'showMenu',
    })
  }
  toggleMenuOff = () => {
    this.setState({
      toggleNavMenu: 'hideMenu',
    })
  }
      render(){



        const currentState = store.getState()


        if(this.props.page === 1){

        }
        const localStateId = this.state.id

        if(currentState.id !== localStateId){
            store.dispatch(chlan(this.state))
        }





        let Selectors =  [];

        if(!this.props.page){
          Selectors = languages.map((lan) =>
            <div key={lan.id} className="navmenuitem">
              <div onClick={() => this.setState({
                id: lan.id,
                language: lan.language,
                flag: lan.flag
              })}>
                <Link to={`/${lan.language}/1`} onClick={this.toggleMenuOff}><span className="flag"><img src={lan.flag} /></span> {lan.languageterm}</Link>
              </div>
            </div>
          )
        }







        if(this.props.page === '1'){
          Selectors = languages.map((lan) =>
            <div key={lan.id} className="navmenuitem">
              <div onClick={() => this.setState({
                id: lan.id,
                language: lan.language,
                flag: lan.flag
              })} >
                <Link to={`/${lan.language}/1`} onClick={this.toggleMenuOff}><span className="flag"><img src={lan.flag} /></span> {lan.languageterm}  </Link>
              </div>
            </div>
          )
        }


        if(this.props.page === '2'){

          Selectors = languages.map((lan) =>




            <div key={lan.id} className="navmenuitem">
              <div onClick={() => this.setState({
                id: lan.id,
                language: lan.language,
                flag: lan.flag,
              })}>
                {console.log(lan.flag)}
                <Link to={`/${lan.language}/2/intro`} onClick={this.toggleMenuOff}><span className="flag"><img src={lan.flag} /></span> {lan.languageterm}</Link>
              </div>
            </div>
          );

        }

        if(this.props.page === '3'){
          Selectors = languages.map((lan) =>
            <div key={lan.id} className="navmenuitem">
              <div onClick={() => this.setState({
                id: lan.id,
                language: lan.language,
                flag: lan.flag
              })} >
                <Link to={`../../${lan.language}/3/products`}><span className="flag"><img src={lan.flag} width="25" height="25"/></span> {lan.languageterm}</Link>
              </div>
            </div>


          );

        }

        console.log(this.props.page)


        let toggleButton = <span className="toggleButton"><img onClick={this.toggleMenuOn} className='toggleButon' src={this.props.flag} alt="" width="30"/></span>

        if(this.state.toggleNavMenu === 'showMenu') {
          toggleButton = <span className="toggleButton"><img onClick={this.toggleMenuOff} className='toggleButon' src={this.props.flag} alt="" width="30"/></span>
        }





        return (
          <Container>
            <Row >
              <Col md={ {size:3}} className='navMenu'>
                <div>
                   {toggleButton}
                </div>
                <div className={this.state.toggleNavMenu}>

                  <h4>Countries</h4> <hr/>
                  <div className="myflexcontainer d-flex flex-column flex-wrap">{Selectors}
                  </div>
                </div>
            </Col>
              <Col>

              </Col>
            </Row>
          </Container>
        )
    }
}




const mapStateToProps = state => {
  return {
    page: state.page,
    flag: state.flag
  }
}

const reduxConnect = connect(mapStateToProps)(Navigation)
export default reduxConnect
