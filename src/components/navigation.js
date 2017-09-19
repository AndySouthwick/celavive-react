import React, {Component} from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavDropdown, DropdownToggle, DropdownMenu  } from 'reactstrap';
import {languages} from '../languages/languages'
import { chlan } from '../actions/actions'
import store from '../store'
import {connect} from 'react-redux'


import { Link } from 'react-router-dom'


class Navigation extends Component {

    constructor(props){

        super(props)

        this.toggle = this.toggle.bind(this);
        const currentState = store.getState()
        this.state = {
            ...currentState,
            dropdownOpen: false,
            page: ''
        }

    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }



componentWillReceiveProps(){
    }

      render(){

        console.log(this.state)

        const currentState = store.getState()


        if(this.props.page === 1){

        }


        //
        // let Selectors =
        //   languages.map((lan) =>
        //     <div key={lan.id}>
        //         <li onClick={() => this.setState({
        //             id: lan.id,
        //             language: lan.language,
        //         })}>
        //             <Link to={`${lan.language}`}> {lan.language} </Link>
        //         </li>
        //     </div>
        // );
        const localStateId = this.state.id

        if(currentState.id !== localStateId){
            store.dispatch(chlan(this.state))
        }



        let Selectors =  [];

        if(this.props.page === ''){
          Selectors = languages.map((lan) =>
            <div key={lan.id}>
              <li onClick={() => this.setState({
                id: lan.id,
                language: lan.language,
              })}>
                <Link to={`${lan.language}`}> {lan.language} </Link>
              </li>
            </div>
          )
        }


        if(this.props.page === '1'){
          Selectors = languages.map((lan) =>
            <div key={lan.id}>
              <li onClick={() => this.setState({
                id: lan.id,
                language: lan.language,
              })}>
                <Link to={`/${lan.language}/1/intro`}> {lan.language} </Link>
              </li>
            </div>
          );

        }

        if(this.props.page === '2'){
          Selectors = languages.map((lan) =>
            <div key={lan.id}>
              <li onClick={() => this.setState({
                id: lan.id,
                language: lan.language,
              })}>
                <Link to={`${lan.language}/products`}> {lan.language} </Link>
              </li>
            </div>
          );

        }

        console.log(this.props.page)


        return (

        <div>

            <Navbar color="" light toggleable className="fixed-top">
                <NavbarToggler right onClick={this.toggle} />
                <NavbarBrand href="/"></NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                        <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>
                                Country
                            </DropdownToggle>
                            <DropdownMenu>
                                {Selectors}
                            </DropdownMenu>
                        </NavDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        )
    }
}




const mapStateToProps = state => {
  return {
    page: state.page
  }
}

const reduxConnect = connect(mapStateToProps)(Navigation)
export default reduxConnect