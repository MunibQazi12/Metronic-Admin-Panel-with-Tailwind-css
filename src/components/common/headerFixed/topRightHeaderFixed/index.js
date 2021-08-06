import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import '../headerFixed.css';
import USA from '../../../../assets/images/226-united-states.svg';
import QuickPanelSideBar from './quickPanel';
import QuickPanelOverlay from './quickPanelOverlay';
import UserProfile from './userProfile';
import FlagDropdown from './flagDropdown';
import SearchDropDown from './searchDropdown';
import AlertDropdown from './userNotificationDropdown/alertDropdown';
import EventDropdown from './userNotificationDropdown/eventDropdown';
import LogDropdown from './userNotificationDropdown/logDropdown';
import QuickActionDropdown from './quickActionDropdown';
import UserCartDropdown from './userCartDropdown';

class TopRightHeaderFixed extends Component {
    constructor(props) {
        super(props);
        this.refDropdown = React.createRef();
        this.state = {
            headerSearchToggle: false,
            headerNotificationToggle: false,
            headerQuickActionToggle: false,
            headerCartToggle: false,
            quickPanelToggle: false,
            userDropdown: false,
            flagDropdown: false,
            languageDropdown: false,
            notificationTab: 1,
            languageSelected: {
                language: "English"
            },
            selectedFlag: { 
                img: USA, 
                name: "English" 
            }
        }
    }

    headerSearchToggleHandler = () => {
        this.setState({
            headerSearchToggle: !this.state.headerSearchToggle
        })
    }

    headerNotificationToggleHandler = () => {
        this.setState({
            headerNotificationToggle: !this.state.headerNotificationToggle
        })
    }

    headerQuickActionToggleHandler = () => {
        this.setState({
            headerQuickActionToggle: !this.state.headerQuickActionToggle
        })
    }

    quickPanelToggleHandler = () => {
        this.setState({
            quickPanelToggle: !this.state.quickPanelToggle
        })
    }

    flagDropdownHandler = () => {
        this.setState({
            flagDropdown: !this.state.flagDropdown
        })
    }

    headerCartToggleHandler = () => {
        this.setState({
            headerCartToggle: !this.state.headerCartToggle
        })
    }

    userDropdownHandler = () => {
        this.setState({
            userDropdown: !this.state.userDropdown
        })
    }

    flagSelectHandler = (flag) => {
        this.setState({
            selectedFlag: flag
        })
    }

    notificationTabHandler = (tab) => {
        this.setState({
            notificationTab: tab
        })
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.refDropdown.current && !this.refDropdown.current.contains(event.target)) {
            this.setState({
                headerSearchToggle: false,
                headerNotificationToggle: false,
                headerQuickActionToggle: false,
                headerCartToggle: false,
                quickPanelToggle: false,
                userDropdown: false,
                flagDropdown: false,
                languageDropdown: false,
            });
        }
    };

    render () {
        return (
            <>
                <ReactTooltip effect='solid' place='bottom' backgroundColor='white' textColor="gray"  className="submenu-box-shadow" /> 

                <ReactTooltip id="cart-tooltip" effect='solid' place='left' textColor="gray" backgroundColor='white' className="submenu-box-shadow opacity-100 transition-none" style={{opacity: 1, transition: "none !important"}} />

                <div className="topbar flex justify-end h-12 lg:h-16 items-center">
                    <div className="search-toggle relative">
                        <div ref={this.refDropdown} onClick={this.headerSearchToggleHandler} data-tip="Quick Search" className="topbar-item w-10 h-10 hover:bg-blue-50 rounded">
                            <div className="pt-2 cursor-pointer">
                                <span className="svg-icon svg-icon-xl svg-icon-primary">
                                    <svg className="my-0 mx-auto" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g id="Stockholm-icons-/-General-/-Search" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                            <path className="topbar-icon" d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" id="Path-2" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                            <path className="topbar-icon" d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" id="Path" fillRule="nonzero"></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className={`search-toggle-submenu w-80 submenu-box-shadow bg-white rounded-lg py-4 px-6 absolute ${this.state.headerSearchToggle ? "show" : "hidden"}`}>
                            <SearchDropDown />
                        </div>
                    
                    </div>

                    <div className="notification dropdown">
                        <div ref={this.refDropdown} onClick={this.headerNotificationToggleHandler} data-tip="User Notifications" className="topbar-item w-10 h-10 hover:bg-blue-50 rounded">
                            <div className="pt-2 cursor-pointer">
                                <span className="svg-icon svg-icon-xl svg-icon-primary">
                                    <svg className="my-0 mx-auto" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g id="Stockholm-icons-/-Code-/-Compiling" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                            <path className="topbar-icon" d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" id="Combined-Shape" fill="#000000" opacity="0.3"></path>
                                            <path className="topbar-icon" d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" id="Combined-Shape" fill="#000000"></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className={`search-toggle-submenu w-80 submenu-box-shadow bg-white absolute rounded-t-lg ${this.state.headerNotificationToggle ? "show" : "hidden"}`}>
                            <form className="bg-img-notification-bg p-0 pt-12 rounded-t-lg">
                                <div>
                                    <h4 className="flex justify-center px-6 items-center">
                                        <span className="text-white text-base font-medium">User Notifications</span>
                                        <span className="bg-green-400 text-white text-xs rounded-lg py-2 px-3 ml-2 cursor-pointer active:bg-green-800 font-medium">23 new</span>
                                    </h4>

                                    <ul className="mt-3 px-8 border-b-2 border-gray-400 h-11 flex items-center">
                                        <li onClick={() => this.notificationTabHandler(1) } className="border-b-2 border-transparent hover:border-green-400 py-2.5 mr-2">
                                            <Link to="#" className={`font-medium text-xs ml-0 hover:text-white py-3.5 text-white ${this.state.notificationTab === 1 ? "pb-13px border-b-2 border-green-400" : "opacity-70"}`}>Alerts</Link>
                                        </li>
                                        <li onClick={() => this.notificationTabHandler(2) } className="border-b-2 border-transparent hover:border-green-400 py-2.5 ml-2 mr-2">
                                            <Link to="#" className={`font-medium text-xs hover:text-white py-3.5 text-white ${this.state.notificationTab === 2 ? "pb-13px border-b-2 border-green-400" : "opacity-70"}`}>Events</Link>
                                        </li>
                                        <li onClick={() => this.notificationTabHandler(3) } className="border-b-2 border-transparent hover:border-green-400 py-2.5 ml-2">
                                            <Link to="#" className={`font-medium text-xs hover:text-white py-3.5 text-white ${this.state.notificationTab === 3 ? "pb-13px border-b-2 border-green-400" : "opacity-70" }`}>Logs</Link>
                                        </li>
                                    </ul>
                                </div>
                            </form>

                            <div className="mb-5">
                                <div className={`toggle-search-submenu h-80 overflow-y-auto ${this.state.notificationTab === 1 ? "show" : "hidden"}`}>
                                    <AlertDropdown />
                                </div>
                                
                                <div className={`toggle-search-submenu h-80 overflow-y-auto ${this.state.notificationTab === 2 ? "show" : "hidden"}`}>
                                    <EventDropdown />
                                </div>

                                <div className={`toggle-search-submenu h-40 overflow-y-auto ${this.state.notificationTab === 3 ? "show" : "hidden"}`}>
                                    <LogDropdown />
                                </div>    
                            </div>
                        </div>
                        
                    </div>

                    <div className="action dropdown">
                        <div ref={this.refDropdown} onClick={this.headerQuickActionToggleHandler} data-tip="Quick Actions" className="topbar-item w-10 h-10 hover:bg-blue-50 rounded">
                            <div className="pt-2 cursor-pointer">
                                <span className="svg-icon svg-icon-xl svg-icon-primary">
                                    <svg className="my-0 mx-auto" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g id="Stockholm-icons-/-Media-/-Equalizer" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                            <rect className="topbar-icon" id="Rectangle-62-Copy" fill="#000000" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5"></rect>
                                            <rect className="topbar-icon" id="Rectangle-62-Copy-2" fill="#000000" x="8" y="9" width="3" height="11" rx="1.5"></rect>
                                            <rect className="topbar-icon" id="Rectangle-62-Copy-4" fill="#000000" x="18" y="11" width="3" height="9" rx="1.5"></rect>
                                            <rect className="topbar-icon" id="Rectangle-62-Copy-3" fill="#000000" x="3" y="13" width="3" height="7" rx="1.5"></rect>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className={`quick-action-toggle-submenu w-96 submenu-box-shadow bg-white absolute rounded-t-lg ${this.state.headerQuickActionToggle ? "show" : "hidden"}`}>
                            <QuickActionDropdown />
                        </div>
                    </div>

                    <div className="user-cart dropdown">
                        <div ref={this.refDropdown} onClick={this.headerCartToggleHandler} data-tip="User Cart" data-for="cart-tooltip" className="topbar-item w-10 h-10 hover:bg-blue-50 rounded">
                            <div className="pt-2 cursor-pointer">
                                <span className="svg-icon svg-icon-xl svg-icon-primary">
                                    <svg className="my-0 mx-auto" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g id="Stockholm-icons-/-Shopping-/-Cart3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                            <path className="topbar-icon" d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z" id="Path-30" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                            <path className="topbar-icon" d="M3.5,9 L20.5,9 C21.0522847,9 21.5,9.44771525 21.5,10 C21.5,10.132026 21.4738562,10.2627452 21.4230769,10.3846154 L17.7692308,19.1538462 C17.3034221,20.271787 16.2111026,21 15,21 L9,21 C7.78889745,21 6.6965779,20.271787 6.23076923,19.1538462 L2.57692308,10.3846154 C2.36450587,9.87481408 2.60558331,9.28934029 3.11538462,9.07692308 C3.23725479,9.02614384 3.36797398,9 3.5,9 Z M12,17 C13.1045695,17 14,16.1045695 14,15 C14,13.8954305 13.1045695,13 12,13 C10.8954305,13 10,13.8954305 10,15 C10,16.1045695 10.8954305,17 12,17 Z" id="Combined-Shape" fill="#000000"></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className={`notification-toggle-submenu w-96 submenu-box-shadow bg-white absolute rounded-t-lg ${this.state.headerCartToggle ? "show" : "hidden"}`}>
                            <UserCartDropdown />
                        </div>
                    </div>

                    <div className="quick-panel dropdown">
                        <div onClick={this.quickPanelToggleHandler} data-tip="Quick Panel" className="topbar-item w-10 h-10 hover:bg-blue-50 rounded">
                            <div className="pt-2 cursor-pointer">
                                <span className="svg-icon svg-icon-xl svg-icon-primary">
                                    <svg className="my-0 mx-auto" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g id="Stockholm-icons-/-Layout-/-Layout-4-blocks" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                            <rect className="topbar-icon" id="Rectangle-7" fill="#000000" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                                            <path className="topbar-icon" d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" id="Combined-Shape" fill="#000000" opacity="0.3"></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        
                        <div className={`bg-white shadow-xl pt-5 pb-10 fixed top-0 bottom-0 w-96 z-10 submenu-box-shadow bg-white ${this.state.quickPanelToggle ? "left-0 quick-panel-transition" : "-left-96"}`} >
                            <QuickPanelSideBar />
                        </div>
                        
                        <div onClick={this.quickPanelToggleHandler} className={`${this.state.quickPanelToggle ? "show" : "hidden"}`}>
                            <QuickPanelOverlay />
                        </div>
                            
                    </div>

                    <div className="flag dropdown w-12 mx-2">
                        <div ref={this.refDropdown} onClick={this.flagDropdownHandler} data-tip="Select Language" className="topbar-item w-10 h-10 hover:bg-blue-50 rounded">
                            <div className="pt-2 cursor-pointer">
                                <img src={this.state.selectedFlag.img} className="w-6 h-6 rounded mx-auto" alt="USA" />
                            </div>
                        </div>

                        <div className={`flag-toggle-submenu w-36 submenu-box-shadow bg-white absolute rounded-t-lg ${this.state.flagDropdown ? "show" : "hidden"}`}>
                            <FlagDropdown flagSelectHandler={this.flagSelectHandler} />
                        </div>

                    </div>
                    
                    <div className="user-name dropdown">
                        <div ref={this.refDropdown} onClick={this.userDropdownHandler} className="topbar-item">
                            <div className="hover:bg-blue-50 rounded px-1 py-1 flex items-center cursor-pointer">
                                <span className="hidden lg:inline-block text-xs text-gray-400 mr-1">Hi, </span>
                                <span className="hidden lg:inline-block text-xs text-gray-500 font-medium mr-1"> Sean Streak</span>
                                <span className="bg-green-100 text-green-500 text-sm rounded w-8 h-8 flex items-center justify-center text-center">
                                    <span>S</span>
                                </span>
                            </div>
                        </div>
                        <div className={`user-toggle-submenu w-96 submenu-box-shadow bg-white absolute rounded-t-lg ${this.state.userDropdown ? "show" : "hidden"}`}>
                            <UserProfile />
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default TopRightHeaderFixed;