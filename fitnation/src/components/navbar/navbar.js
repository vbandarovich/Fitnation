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

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            expanded: props.expanded
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.setState({
                expanded: this.props.expanded
            })
        }
    }
     render() {
         const { expanded } = this.state;

         if(expanded) {
            return(
                <MDBNavbar color='default-color-dark' dark expand="md">
                        <MDBNavbarBrand style={{marginLeft: '260px'}}>
                        <strong className="white-text">Fitnation</strong>
                        </MDBNavbarBrand>
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                 <MDBIcon icon="user" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu basic left>
                                <MDBDropdownItem href="#!">Sign In</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Sign Up</MDBDropdownItem>
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
                        <strong className="white-text">Fitnation</strong>
                        </MDBNavbarBrand>
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                 <MDBIcon icon="user" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu basic left>
                                <MDBDropdownItem href="#!">Sign In</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Sign Up</MDBDropdownItem>
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