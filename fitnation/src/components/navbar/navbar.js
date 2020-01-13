import React from 'react';
import { MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBNavItem, 
    MDBNavLink,
    MDBCollapse, 
    MDBDropdown,
    MDBDropdownToggle, 
    MDBDropdownMenu, 
    MDBDropdownItem, 
    MDBIcon } from "mdbreact";  
import { authenticationService } from '../../services/authenticationService';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            expanded: props.expanded,
            currentUser: authenticationService.currentUserValue
        }
        this.logout = this.logout.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.setState({
                expanded: this.props.expanded,
                currentUser: authenticationService.currentUserValue
            })
        }
    }
    
    logout() {
        authenticationService.logout();
        this.props.updateAuth(authenticationService.currentUserValue);
        this.setState({
            currentUser: authenticationService.currentUserValue
        })
    }

    render() {
         const { expanded, currentUser } = this.state;
         if(expanded) {
            return(
                <MDBNavbar color='default-color-dark' dark expand="md">
                        <MDBNavbarBrand style={{marginLeft: '260px'}}>
                        <strong className="white-text"><MDBIcon icon="hiking" /> Fitnation</strong>
                        </MDBNavbarBrand>
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                 <MDBIcon icon="user" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu basic left='true'>
                                    <a className={(currentUser !== null) ? 'd-none' : ''} href="/login" style={{margin:'0', padding:'0'}}>
                                        <MDBDropdownItem>Sign In</MDBDropdownItem>
                                    </a>
                                    <a className={(currentUser !== null) ? 'd-none' : ''} href="/register" style={{margin:'0', padding:'0'}}>
                                        <MDBDropdownItem>Sign Up</MDBDropdownItem>
                                    </a>
                                    <a className={(currentUser === null) ? 'd-none' : ''} href="#!" style={{margin:'0', padding:'0'}}>
                                        <MDBDropdownItem>My profile</MDBDropdownItem>
                                    </a>
                                    <MDBDropdownItem className={(currentUser === null) ? 'd-none' : ''}  onClick={this.logout}>Logout</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                            <MDBIcon fab icon="vk" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                            <MDBIcon fab icon="instagram" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab icon="telegram" />
                            </MDBNavLink>
                        </MDBNavItem>
                          
                        </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
             )
         } else {
            return(
                <MDBNavbar color='default-color-dark' dark expand="md">
                        <MDBNavbarBrand style={{marginLeft: '70px'}}>
                        <strong className="white-text"><MDBIcon icon="hiking" /> Fitnation</strong>
                        </MDBNavbarBrand>
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                 <MDBIcon icon="user" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu basic left='true'>
                                    <a className={(currentUser !== null) ? 'd-none' : ''} href="/login" style={{margin:'0', padding:'0'}}>
                                        <MDBDropdownItem>Sign In</MDBDropdownItem>
                                    </a>
                                    <a className={(currentUser !== null) ? 'd-none' : ''} href="/register" style={{margin:'0', padding:'0'}}>
                                        <MDBDropdownItem>Sign Up</MDBDropdownItem>
                                    </a>
                                    <a className={(currentUser === null) ? 'd-none' : ''} href="#!" style={{margin:'0', padding:'0'}}>
                                        <MDBDropdownItem>My profile</MDBDropdownItem>
                                    </a>
                                    <MDBDropdownItem className={(currentUser === null) ? 'd-none' : ''}  onClick={this.logout}>Logout</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                            <MDBIcon fab icon="vk" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                            <MDBIcon fab icon="instagram" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab icon="telegram" />
                            </MDBNavLink>
                        </MDBNavItem>
                          
                        </MDBNavbarNav>
                        </MDBCollapse>
                </MDBNavbar>
             )
         }
         
     }
}

export default Navbar;