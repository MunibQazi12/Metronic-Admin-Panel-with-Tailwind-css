import React, {Component} from 'react';
import Sidebar from '../common/sideBar';
import HeaderFixed from '../common/headerFixed';
import './dashboard.css';
import MobileHeaderDark from '../common/mobHeaderDark';
import TopSubHeaderFixed from '../common/topSubHeaderFixed';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import HomeBodyContent from '../homeBodyContent';
import TableComponent from '../table/table'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarWidthToggle: false,
            hoverEnabling: false
        }
    }

    sidebarWidthToggleHandler = () => {
        this.setState({
            sidebarWidthToggle: !this.state.sidebarWidthToggle
        })
    }

    onHoverHandler = () => {
        this.setState({
            hoverEnabling: !this.state.hoverEnabling
        })
    }

    render () {
        return (
            <>
                
                <div className={`full-main-page w-full h-full ${this.state.sidebarWidthToggle ? "allowFullAside" : "disallowFullAside"} ${this.state.hoverEnabling ? "hoverEnable" : "hoverDisable"}`}  >
                    <Router>
                        <div className="block lg:hidden">
                            <MobileHeaderDark />                    
                        </div> 

                        <Sidebar sidebarWidthToggleHandler={this.sidebarWidthToggleHandler} onHoverHandler = {this.onHoverHandler}/>

                        <div className={`dashboard-main-content ${this.state.sidebarWidthToggle ? "smallSideBar" : "bigSideBar"}`}>
                            <div className="hidden lg:block">
                                <HeaderFixed />
                            </div>    

                            <div className="dashboard-body-content pt-36 px-7 h-full">
                                <TopSubHeaderFixed />
                               
                                <Route
                                    exact
                                    path={"/"}
                                    component={HomeBodyContent} />
                                
                                <Route
                                    exact
                                    path={"/table"}
                                    component={TableComponent} />
                            </div>
                        </div>
                    </Router>
                </div>
            </>
        )
    }
}

export default Dashboard;