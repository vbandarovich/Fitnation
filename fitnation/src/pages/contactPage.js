import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidenav from '../components/sidenav/sidenav';
import Navbar from '../components/navbar/navbar';
import ContactForm from '../components/contact/contactForm';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
          }
        this.updateState = this.updateState.bind(this);
    }

    updateState = (value) => {
        this.setState({ 
          expanded: value
        })
    }
      
    render() {
        return(
            <BrowserRouter>
                <Navbar expanded={this.state.expanded}/>
                <Sidenav updateState={this.updateState} selected='contact'/> 
                <ContactForm />    
            </BrowserRouter>
        )
    }
}

export default ContactPage;