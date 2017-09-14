import React, {Component} from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavDropdown, DropdownToggle, DropdownMenu  } from 'reactstrap';
import {languages} from '../languages/languages'
import { chlan } from '../actions/actions'
import store from '../store'

import { Link } from 'react-router-dom'


class Navigation extends Component {

    constructor(props){

        super(props)

        this.toggle = this.toggle.bind(this);
        const currentState = store.getState()
        this.state = {
            ...currentState,
            dropdownOpen: false
        }

    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render(){

        const currentState = store.getState()



        const Selectors = languages.map((lan) =>
            <div key={lan.id}>
                <li onClick={() => this.setState({
                    id: lan.id,
                    language: lan.language,
                    intro: lan.intro,
                    founded: lan.founded,
                    science: lan.science
                })}>
                    <Link to={`/${lan.language}/intro`}> {lan.language} </Link>
                </li>
            </div>
        );
        const localStateId = this.state.id

        if(currentState.id !== localStateId){
            store.dispatch(chlan(this.state))
        }




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

export default Navigation