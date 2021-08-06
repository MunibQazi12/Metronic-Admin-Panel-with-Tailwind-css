import { Component } from "react";
import LogoLight from '../../../assets/images/logo-light.png';
import './mobHeaderDark.css';
import TopRightHeaderFixed from "../headerFixed/topRightHeaderFixed";
import MobCategorySibeBar from './mobCategorySideBar';
import Overlay from '../../common/headerFixed/topRightHeaderFixed/quickPanelOverlay';
import MobNavSideBar from "./mobNavSidebBar";

class MobHeaderDark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topRightHeaderFixed: false,
            sideBarMobile: false,
            mobNavSideBar: false
        }
    }

    topRightHeaderFixedHandler = () => {
        this.setState({
            topRightHeaderFixed: !this.state.topRightHeaderFixed
        })
    }

    sideBarMobileHandler = () => {
        this.setState({
            sideBarMobile: !this.state.sideBarMobile
        })
    }

    mobNavSideBarHandler = () => {
        this.setState({
            mobNavSideBar: !this.state.mobNavSideBar
        })
    }

    render () {
        return (
            <>
                <div className="header-mobile fixed bg-gray-900	w-full h-14 flex justify-between items-center px-4 z-10">
                    <img src={LogoLight} alt="logo" />

                    <div class="flex">
                        <button onClick={this.sideBarMobileHandler} class="btn p-0 burger-icon-left">
                            <span className={`unequal-hamburger ${this.state.sideBarMobile ? "blueHamburger" : ""}`}></span>
                        </button>
                        <div className={`bg-gray-800 overflow-y-auto shadow-xl fixed top-0 bottom-0 z-10 submenu-box-shadow bg-white quick-panel-transition w-64 ${this.state.sideBarMobile ? "left-0" : "-left-64"}`}>
                            <MobCategorySibeBar />
                        </div>

                        <div onClick={this.sideBarMobileHandler} className={`${this.state.sideBarMobile ? "show" : "hidden"}`}>
                            <Overlay />
                        </div>


                        <button onClick={this.mobNavSideBarHandler} class="btn p-0 burger-icon-menu ml-4">
                            <span className={`menu-hamburger ${this.state.mobNavSideBar ? "blueHamburger" : ""}`}></span>
                        </button>
                        <div className={`overflow-y-auto shadow-xl fixed top-0 bottom-0 z-10 submenu-box-shadow bg-white quick-panel-transition w-64 ${this.state.mobNavSideBar ? "left-0" : "-left-64"}`}>
                            <MobNavSideBar />
                        </div>

                        <div onClick={this.mobNavSideBarHandler} className={`${this.state.mobNavSideBar ? "show" : "hidden"}`}>
                            <Overlay />
                        </div>

                        <button class={`ml-2 user-svg ${this.state.topRightHeaderFixed ? "inherit" : "relative"}`} >
                            <span onClick={this.topRightHeaderFixedHandler} class="svg-icon svg-icon-xl">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g id="Stockholm-icons-/-General-/-User" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                        <path className="user-icon-fill" d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" id="Mask" fill-rule="nonzero" opacity="0.3"></path>
                                        <path className="user-icon-fill" d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" id="Mask-Copy" fill-rule="nonzero"></path>
                                    </g>
                                </svg>
                            </span>

                            <div className={`left-0 w-full bg-white absolute ${this.state.topRightHeaderFixed ? "top-14 top-transition" : "-top-20"}`}>
                                <TopRightHeaderFixed />
                            </div>
                        </button>

                    </div>
                </div>
            </>
        )
    }
}

export default MobHeaderDark;