import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ClickOutside from './clickOutside';
import { MDBIcon } from 'mdbreact';
import { authenticationService } from '../../services/authenticationService';

class Sidenav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            selected: props.selected,
            currentUser: authenticationService.currentUserValue,
            isAdmin: false,
            isAuthorize: false
        }
        this.logout = this.logout.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {      
            this.setState({
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
        const { currentUser } = this.state;
        const admin = (element) => element === 'admin';

        if(currentUser !== null) {
            return(
                <ClickOutside
                     onClickOutside={() => {
                         this.setState({ expanded: false });
                         this.props.updateState(false);
                     }}
                 >
                 <SideNav style={{backgroundColor:"#00695c", height: "100vh", position: 'fixed'}}
                     expanded={this.state.expanded}
                     onToggle={(expanded) => {
                         this.setState({ expanded });
                         if(expanded) {
                             this.props.updateState(true);
                         } else {
                             this.props.updateState(false);
                         }
                         
                     }}
                 >
                 <SideNav.Toggle />
                 <SideNav.Nav defaultSelected={this.state.selected} style={{color:'red'}}>           
                     <NavItem onClick={()=> window.location='/'} eventKey="home">                  
                         <NavIcon>
                             <MDBIcon icon="home" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>                   
                         <NavText>
                             Home
                         </NavText>                        
                     </NavItem> 
                     <NavItem eventKey="profile">
                         <NavIcon>
                         <MDBIcon icon="user-circle" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>
                         <NavText>
                             Profile
                         </NavText>
                         <NavItem onClick={()=> window.location='/profile'} eventKey="profile/myProfile">
                             <NavText>
                                 My profile
                             </NavText>
                         </NavItem>
                         <NavItem onClick={this.logout} eventKey="profile/logout">
                             <NavText>
                                 Logout
                             </NavText>
                         </NavItem>
                     </NavItem> 
                     <NavItem className={authenticationService.currentUserValue.roles.some(admin) ? '' : 'sr-only'} eventKey="admin">
                         <NavIcon>
                         <MDBIcon icon="user-cog" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>
                         <NavText>
                             Admin
                         </NavText>
                         <NavItem onClick={()=> window.location='/admin/list-users'} eventKey="admin/list-users">
                             <NavText>
                                 List users
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/admin/list-moderators'} eventKey="admin/list-moderators">
                             <NavText>
                                 List moderators
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/admin/list-roles'} eventKey="admin/list-roles">
                             <NavText>
                             List roles
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/admin/editing-permissions'} eventKey="admin/editing-permissions">
                             <NavText>
                             Editing Permissions
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/admin/swagger'} eventKey="admin/swagger">
                             <NavText>
                             Go to swagger
                             </NavText>
                         </NavItem>
                     </NavItem> 
                     <NavItem eventKey="reservation">
                         <NavIcon>
                         <MDBIcon far icon="calendar-alt" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>
                         <NavText>
                             Reservation
                         </NavText>
                         <NavItem onClick={()=> window.location='/reservation/gym'} eventKey="reservation/gym">
                             <NavText>
                                 Gym
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/reservation/tennis'} eventKey="reservation/tennis">
                             <NavText>
                                 Tennis tables
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/reservation/bowling'} eventKey="reservation/bowling">
                             <NavText>
                                 Bowling
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/reservation/billiards'} eventKey="reservation/billiards">
                             <NavText>
                                 Billiards
                             </NavText>
                         </NavItem>
                     </NavItem>
                     <NavItem eventKey="price-list">
                         <NavIcon>
                             <MDBIcon icon="hand-holding-usd" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>
                         <NavText>
                             Price-list
                         </NavText>
                         <NavItem onClick={()=> window.location='/price-list/gym'} eventKey="price-list/gym">
                             <NavText>
                                 Gym
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/price-list/tennis'} eventKey="price-list/tennis">
                             <NavText>
                                 Tennis table
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/price-list/bowling'} eventKey="price-list/bowling">
                             <NavText>
                                 Bowling
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/price-list/billiards'} eventKey="price-list/billiards">
                             <NavText>
                                 Billiards
                             </NavText>
                         </NavItem>
                     </NavItem>
                     <NavItem onClick={()=> window.location='/gallery'} eventKey="gallery">
                         <NavIcon>
                         <MDBIcon far icon="image" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>
                         <NavText>
                             Gallery
                         </NavText>
                     </NavItem>
                     <NavItem onClick={()=> window.location='/contact'} eventKey="contact">
                         <NavIcon>
                         <MDBIcon icon="phone-alt" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>
                         <NavText>
                             Contact
                         </NavText>
                     </NavItem>
                 </SideNav.Nav>
                 </SideNav>
                 </ClickOutside>
             )
        } else {
            return(
                <ClickOutside
                     onClickOutside={() => {
                         this.setState({ expanded: false });
                         this.props.updateState(false);
                     }}
                 >
                 <SideNav style={{backgroundColor:"#00695c", height: "100vh", position: 'fixed'}}
                     expanded={this.state.expanded}
                     onToggle={(expanded) => {
                         this.setState({ expanded });
                         if(expanded) {
                             this.props.updateState(true);
                         } else {
                             this.props.updateState(false);
                         }
                         
                     }}
                 >
                 <SideNav.Toggle />
                 <SideNav.Nav defaultSelected={this.state.selected} style={{color:'red'}}>           
                     <NavItem onClick={()=> window.location='/'} eventKey="home">                  
                         <NavIcon>
                             <MDBIcon icon="home" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>                   
                         <NavText>
                             Home
                         </NavText>                        
                     </NavItem> 
                     <NavItem eventKey="profile">
                         <NavIcon>
                         <MDBIcon icon="user-circle" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>
                         <NavText>
                             Profile
                         </NavText>
                         <NavItem onClick={()=> window.location='/login'} eventKey="profile/signIn">
                             <NavText>
                                 Sign In
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/register'} eventKey="profile/signUp">
                             <NavText>
                                 Sign Up
                             </NavText>
                         </NavItem>
                     </NavItem>         
                     <NavItem eventKey="reservation">
                         <NavIcon>
                         <MDBIcon far icon="calendar-alt" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>
                         <NavText>
                             Reservation
                         </NavText>
                         <NavItem onClick={()=> window.location='/reservation/gym'} eventKey="reservation/gym">
                             <NavText>
                                 Gym
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/reservation/tennis'} eventKey="reservation/tennis">
                             <NavText>
                                 Tennis tables
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/reservation/bowling'} eventKey="reservation/bowling">
                             <NavText>
                                 Bowling
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/reservation/billiards'} eventKey="reservation/billiards">
                             <NavText>
                                 Billiards
                             </NavText>
                         </NavItem>
                     </NavItem>
                     <NavItem eventKey="price-list">
                         <NavIcon>
                             <MDBIcon icon="hand-holding-usd" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>
                         <NavText>
                             Price-list
                         </NavText>
                         <NavItem onClick={()=> window.location='/price-list/gym'} eventKey="price-list/gym">
                             <NavText>
                                 Gym
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/price-list/tennis'} eventKey="price-list/tennis">
                             <NavText>
                                 Tennis table
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/price-list/bowling'} eventKey="price-list/bowling">
                             <NavText>
                                 Bowling
                             </NavText>
                         </NavItem>
                         <NavItem onClick={()=> window.location='/price-list/billiards'} eventKey="price-list/billiards">
                             <NavText>
                                 Billiards
                             </NavText>
                         </NavItem>
                     </NavItem>
                     <NavItem onClick={()=> window.location='/gallery'} eventKey="gallery">
                         <NavIcon>
                         <MDBIcon far icon="image" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>
                         <NavText>
                             Gallery
                         </NavText>
                     </NavItem>
                     <NavItem onClick={()=> window.location='/contact'} eventKey="contact">
                         <NavIcon>
                         <MDBIcon icon="phone-alt" style={{ fontSize: '1.75em' }}/>
                         </NavIcon>
                         <NavText>
                             Contact
                         </NavText>
                     </NavItem>
                 </SideNav.Nav>
                 </SideNav>
                 </ClickOutside>
             )
        }
        
    }
}

export default Sidenav;