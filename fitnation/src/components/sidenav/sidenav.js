import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ClickOutside from './clickOutside';
import { MDBIcon } from 'mdbreact';

class Sidenav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }

    }
    render() {
        return(
           <ClickOutside
                onClickOutside={() => {
                    this.setState({ expanded: false });
                }}
            >
            <SideNav style={{marginTop:'56px', backgroundColor:"#00695c"}}
                expanded={this.state.expanded}
                onToggle={(expanded) => {
                    this.setState({ expanded });
                }}
            >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <MDBIcon icon="home" style={{ fontSize: '1.75em' }}/>
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <MDBIcon icon="chart-bar" style={{ fontSize: '1.75em' }}/>
                    </NavIcon>
                    <NavText>
                        Charts
                    </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            Line Chart
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Bar Chart
                        </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
            </SideNav>
            </ClickOutside>
        )
    }
}

export default Sidenav;