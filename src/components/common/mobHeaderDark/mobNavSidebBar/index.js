import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../../common/sideBar/sideBar.css';

class MobNavSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            materialUI: false,
            bootstrap: false,
            errorPage: false,
            inputSubmenu: false,
            bootstrapSubMenu: false,
            surfacesSubMenu: false,
            feedbackSubMenu: false,
            dataDisplaySubMenu: false,
            utilSubMenu: false,
            layoutSubMenu: false,
            asideToggle: false,
            onHoverAside: false
        }
    }

    showMaterialHandler = () => {
        this.setState({
            materialUI: !this.state.materialUI,
            bootstrap: false,
            errorPage: false
        })
    }

    showBootstrapHandler = () => {
        this.setState({
            bootstrap: !this.state.bootstrap,
            materialUI: false,
            errorPage: false
        })
    }

    showErrorHandler = () => {
        this.setState({
            errorPage: !this.state.errorPage,
            materialUI: false,
            bootstrap: false
        })
    }

    showInputSubMenuHandler = () => {
        this.setState({
            inputSubmenu: !this.state.inputSubmenu,
            bootstrapSubMenu: false,
            surfacesSubMenu: false,
            feedbackSubMenu: false,
            dataDisplaySubMenu: false,
            utilSubMenu: false,
            layoutSubMenu: false
        })
    }

    showBootstrapSubMenuHandler = () => {
        this.setState({
            bootstrapSubMenu: !this.state.bootstrapSubMenu,
            inputSubmenu: false,
            surfacesSubMenu: false,
            feedbackSubMenu: false,
            dataDisplaySubMenu: false,
            utilSubMenu: false,
            layoutSubMenu: false
        })
    }

    showSurfacesSubMenuHandler = () => {
        this.setState({
            surfacesSubMenu: !this.state.surfacesSubMenu,
            bootstrapSubMenu: false,
            inputSubmenu: false,
            feedbackSubMenu: false,
            dataDisplaySubMenu: false,
            utilSubMenu: false,
            layoutSubMenu: false
        })
    }

    showFeedbackSubMenuHandler = () => {
        this.setState({
            feedbackSubMenu: !this.state.feedbackSubMenu,
            surfacesSubMenu: false,
            bootstrapSubMenu: false,
            inputSubmenu: false,
            dataDisplaySubMenu: false,
            utilSubMenu: false,
            layoutSubMenu: false
        })
    }
    
    showDataDisplaySubMenuHandler = () => {
        this.setState({
            dataDisplaySubMenu: !this.state.dataDisplaySubMenu,
            feedbackSubMenu: false,
            surfacesSubMenu: false,
            bootstrapSubMenu: false,
            inputSubmenu: false,
            utilSubMenu: false,
            layoutSubMenu: false
        })
    }

    showUtilSubMenuHandler = () => {
        this.setState({
            utilSubMenu: !this.state.utilSubMenu,
            dataDisplaySubMenu: false,
            feedbackSubMenu: false,
            surfacesSubMenu: false,
            bootstrapSubMenu: false,
            inputSubmenu: false,
            layoutSubMenu: false
        })
    }

    showlayoutSubMenuHandler = () => {
        this.setState({
            layoutSubMenu: !this.state.layoutSubMenu,
            utilSubMenu: false,
            dataDisplaySubMenu: false,
            feedbackSubMenu: false,
            surfacesSubMenu: false,
            bootstrapSubMenu: false,
            inputSubmenu: false,
        })
    }

    render() {
        const InputDropdown = [
            {InputNav: "Autocomplete"},
            {InputNav: "Buttons"},
            {InputNav: "Checkboxes"},
            {InputNav: "Pickers"},
            {InputNav: "Radio Buttons"},
            {InputNav: "Selects"},
            {InputNav: "Switches"},
            {InputNav: "Text Fields"},
            {InputNav: "Transfer List"}
        ]

        const navigationDropdown = [
            {navigationNav: "Bottom Navigation"},
            {navigationNav: "Breadcrumbs"},
            {navigationNav: "Drawers"},
            {navigationNav: "NavLinks"},
            {navigationNav: "Menus"},
            {navigationNav: "Steppers"},
            {navigationNav: "Tabs"}
        ]

        const surfaceDropdown = [
            {surfaceNav: "App Bar"},
            {surfaceNav: "Paper"},
            {surfaceNav: "Cards"},
            {surfaceNav: "Expansion Panels"}
        ]

        const feedbackDropdown = [
            {feedbackNav: "Progress"},
            {feedbackNav: "Dialogs"},
            {feedbackNav: "Snackbars"}
        ]

        const dataDisplayDropdown = [
            {dataDisplayNav: "Avatars"},
            {dataDisplayNav: "Badges"},
            {dataDisplayNav: "Chips"},
            {dataDisplayNav: "Dividers"},
            {dataDisplayNav: "Icons"},
            {dataDisplayNav: "Lists"},
            {dataDisplayNav: "Tables"},
            {dataDisplayNav: "Tooltips"},
            {dataDisplayNav: "Typography"}
        ]

        const utilDropdown = [
            {utilNav: "Click Away Listener"},
            {utilNav: "Modal"},
            {utilNav: "No SSR"},
            {utilNav: "Popover"},
            {utilNav: "Popper"},
            {utilNav: "Portal"},
            {utilNav: "Transitions"},
            {utilNav: "useMediaQuery"}
        ]

        const LayoutDropdown = [
            {layoutNav: "Box"},
            {layoutNav: "Container"},
            {layoutNav: "Grid"},
            {layoutNav: "Grid list"},
            {layoutNav: "Hidden"}
        ]

        const BootstrapDropdown = [
            {bootstrapNav: "Alerts"},
            {bootstrapNav: "Badge"},
            {bootstrapNav: "Breadcrumb"},
            {bootstrapNav: "Buttons"},
            {bootstrapNav: "Button Group"},
            {bootstrapNav: "Cards"},
            {bootstrapNav: "Carousel"},
            {bootstrapNav: "Dropdown"},
            {bootstrapNav: "Forms"},
            {bootstrapNav: "Input Group"},
            {bootstrapNav: "Images"},
            {bootstrapNav: "Figures"},
            {bootstrapNav: "Jumbotron"},
            {bootstrapNav: "List group"},
            {bootstrapNav: "Modal"},
            {bootstrapNav: "Navs"},
            {bootstrapNav: "Navbar"},
            {bootstrapNav: "Overlays"},
            {bootstrapNav: "Pagination"},
            {bootstrapNav: "Popovers"}
        ]

        const ErrorPages = [
            {errorPageNav: "Error Page - 1"},
            {errorPageNav: "Error Page - 2"},
            {errorPageNav: "Error Page - 3"},
            {errorPageNav: "Error Page - 4"},
            {errorPageNav: "Error Page - 5"},
            {errorPageNav: "Error Page - 6"}
        ]

        return (
            <>
                <div className={`aside mobNavSideBar md:fixed w-64 top-0 bottom-0`}>
                    <div className="aside-menu-wrapper">
                        <div className="aside-menu mt-4 mb-4">
                            <ul className="menu-nav px-0 m-0 list-none">

                                <li className={`menu-item-submenu menu-item ${this.state.materialUI ? "activeSubNav" : ""}`}>
                                    <Link to="/" onClick={this.showMaterialHandler} className="main-nav-item w-full py-2 px-6 flex justify-between items-center h-11 py-2 px-6 text-xs font-normal leading-7 text-gray-500 hover:text-blue-500 hover:bg-blue-50 inline-flex items-center w-full hover:text-white transition-colors">
                                        <span className="inline-flex items-center">
                                            <span className="menu-item-li">Material UI</span>
                                        </span> 
                                        <i className={`menu-item-li material-icons left-arrow ${this.state.materialUI ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                    </Link>
                                
                                    <div className={`menu-submenu ${this.state.materialUI ? "showSubMenu" : "hideSubMenu"}`}>
                                        <ul className="menu-subnav">
                                            <li onClick={this.showInputSubMenuHandler} className={`menu-item-submenu ${this.state.inputSubmenu ? "activeNestedSubNav" : ""}`}>
                                                <Link to="/" className="mob-nav-category flex justify-between items-center h-11 py-2 pl-10 pr-7 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors">
                                                    <span className="flex items-center">
                                                        <span className="svg-icon menu-icon mr-3">
                                                            <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                                                <g id="Stockholm-icons-/-Design-/-Pen&amp;ruller" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <path className="fill-current text-gray-400 hover:text-blue-400" d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z" id="Combined-Shape" opacity="0.3"></path>
                                                                    <path className="fill-current text-gray-400 hover:text-blue-400" d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z" id="Rectangle-102-Copy"></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span>Inputs</span> 
                                                    </span>
                                                    <i className={`menu-item-li material-icons left-arrow ${this.state.inputSubmenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>
                                                <ul className="nested menu-subnav">
                                                    {InputDropdown.map((item, i) => {
                                                        return  <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors" key={i}>
                                                                    <Link to="">&bull; {item.InputNav}</Link>
                                                                </li>
                                                    })}
                                                </ul>
                                            
                                            </li>

                                            <li onClick={this.showBootstrapSubMenuHandler} className={`menu-item-submenu ${this.state.bootstrapSubMenu ? "activeNestedSubNav" : ""}`} >
                                                <Link to="" className="mob-nav-category flex justify-between h-11 py-2 pl-10 pr-7 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors">
                                                    <span className="flex items-center">
                                                        <span class="svg-icon menu-icon mr-3">
                                                            <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                                                <g id="Stockholm-icons-/-Navigation-/-Arrow-from-left" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                                                    <rect className="fill-current text-gray-400 hover:text-blue-400" id="Rectangle" opacity="0.3" transform="translate(14.000000, 12.000000) rotate(-90.000000) translate(-14.000000, -12.000000) " x="13" y="5" width="2" height="14" rx="1"></rect>
                                                                    <rect className="fill-current text-gray-400 hover:text-blue-400" id="Rectangle-199-Copy" opacity="0.3" x="3" y="3" width="2" height="18" rx="1"></rect>
                                                                    <path className="fill-current text-gray-400 hover:text-blue-400" d="M11.7071032,15.7071045 C11.3165789,16.0976288 10.6834139,16.0976288 10.2928896,15.7071045 C9.90236532,15.3165802 9.90236532,14.6834152 10.2928896,14.2928909 L16.2928896,8.29289093 C16.6714686,7.914312 17.281055,7.90106637 17.675721,8.26284357 L23.675721,13.7628436 C24.08284,14.136036 24.1103429,14.7686034 23.7371505,15.1757223 C23.3639581,15.5828413 22.7313908,15.6103443 22.3242718,15.2371519 L17.0300721,10.3841355 L11.7071032,15.7071045 Z" id="Path-94" fill-rule="nonzero" transform="translate(16.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-16.999999, -11.999997) "></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span>Navigation</span> 
                                                    </span>
                                                    <i className={`material-icons left-arrow ${this.state.bootstrapSubMenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>
                                                <ul className="nested menu-subnav">
                                                    {navigationDropdown.map((item, i) => {
                                                        return  <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors" key={i}>
                                                                    <Link to="">&bull; {item.navigationNav}</Link>
                                                                </li>
                                                    })}
                                                </ul>

                                            </li>

                                            <li onClick={this.showSurfacesSubMenuHandler} className={`menu-item-submenu ${this.state.surfacesSubMenu ? "activeNestedSubNav" : ""}`}>
                                                <Link to="" className="mob-nav-category flex justify-between h-11 py-2 pl-10 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors">
                                                    <span className="flex items-center">
                                                        <span class="svg-icon menu-icon mr-3">
                                                            <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                                                <g id="Stockholm-icons-/-Layout-/-Layout-left-panel-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <rect className="fill-current text-gray-400 hover:text-blue-400" id="Rectangle-7-Copy" x="9" y="5" width="13" height="14" rx="1.5"></rect>
                                                                    <rect className="fill-current text-gray-400 hover:text-blue-400" id="Rectangle-7-Copy-2" opacity="0.3" x="2" y="5" width="5" height="14" rx="1"></rect>
                                                                </g>
                                                            </svg>
                                                        </span> 
                                                        <span>Surfaces</span> 
                                                    </span>
                                                    <i className={`material-icons left-arrow ${this.state.surfacesSubMenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>

                                                <ul className="nested menu-subnav">
                                                    {surfaceDropdown.map((item, i) => {
                                                        return  <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 transition-colors" key={i}>
                                                                    <Link to="">&bull; {item.surfaceNav}</Link>
                                                                </li>
                                                    })}
                                                </ul>
                                            
                                            </li>

                                            <li onClick={this.showFeedbackSubMenuHandler} className={`menu-item-submenu ${this.state.feedbackSubMenu ? "activeNestedSubNav" : ""}`}>
                                                <Link to="" className="mob-nav-category flex justify-between h-11 py-2 pl-10 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 transition-colors">
                                                    <span className="flex items-center">
                                                        <span class="svg-icon menu-icon mr-3">
                                                            <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                                                <g id="Stockholm-icons-/-General-/-Half-star" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                                                    <path className="fill-current text-gray-400 hover:text-blue-400" d="M12,4.25932872 C12.1488635,4.25921584 12.3000368,4.29247316 12.4425657,4.36281539 C12.6397783,4.46014562 12.7994058,4.61977315 12.8967361,4.81698575 L14.9389263,8.95491503 L19.5054023,9.61846284 C20.0519472,9.69788046 20.4306287,10.2053233 20.351211,10.7518682 C20.3195865,10.9695052 20.2170993,11.1706476 20.0596157,11.3241562 L16.7552826,14.545085 L17.5353298,19.0931094 C17.6286908,19.6374458 17.263103,20.1544017 16.7187666,20.2477627 C16.5020089,20.2849396 16.2790408,20.2496249 16.0843804,20.1472858 L12,18 L12,4.25932872 Z" id="Combined-Shape" opacity="0.3"></path>
                                                                    <path className="fill-current text-gray-400 hover:text-blue-400" d="M12,4.25932872 L12,18 L7.91561963,20.1472858 C7.42677504,20.4042866 6.82214789,20.2163401 6.56514708,19.7274955 C6.46280801,19.5328351 6.42749334,19.309867 6.46467018,19.0931094 L7.24471742,14.545085 L3.94038429,11.3241562 C3.54490071,10.938655 3.5368084,10.3055417 3.92230962,9.91005817 C4.07581822,9.75257453 4.27696063,9.65008735 4.49459766,9.61846284 L9.06107374,8.95491503 L11.1032639,4.81698575 C11.277344,4.464261 11.6315987,4.25960807 12,4.25932872 Z" id="Combined-Shape"></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span>Feedback</span>
                                                    </span>
                                                    <i className={`material-icons left-arrow ${this.state.feedbackSubMenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>
                                                <ul className="nested menu-subnav">
                                                    {feedbackDropdown.map((item, i) => {
                                                        return  <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 transition-colors" key={i}>
                                                                    <Link to="">&bull; {item.feedbackNav}</Link>
                                                                </li>
                                                    })}
                                                    
                                                </ul>
                                            </li>

                                            <li onClick={this.showDataDisplaySubMenuHandler} className={`menu-item-submenu ${this.state.dataDisplaySubMenu ? "activeNestedSubNav" : ""}`}>
                                                <Link to="" className="mob-nav-category flex justify-between h-11 py-2 pl-10 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 transition-colors">
                                                    <span className="flex items-center">
                                                        <span class="svg-icon menu-icon mr-3">
                                                            <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                                                <g id="Stockholm-icons-/-Devices-/-iMac" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <path className="fill-current text-gray-400 hover:text-blue-400" d="M5,5 L5,16 L19,16 L19,5 L5,5 Z M5,3 L19,3 C20.4201608,3 21,3.7163444 21,4.6 L21,17.4 C21,18.2836556 20.4201608,19 19,19 L5,19 C3.57983921,19 3,18.2836556 3,17.4 L3,4.6 C3,3.7163444 3.57983921,3 5,3 Z M12,18 C12.2761424,18 12.5,17.7761424 12.5,17.5 C12.5,17.2238576 12.2761424,17 12,17 C11.7238576,17 11.5,17.2238576 11.5,17.5 C11.5,17.7761424 11.7238576,18 12,18 Z" id="Combined-Shape" fill-rule="nonzero"></path>
                                                                    <polygon id="Combined-Shape" opacity="0.3" points="5 5 5 16 19 16 19 5"></polygon>
                                                                    <rect className="fill-current text-gray-400 hover:text-blue-400" id="Rectangle-4" opacity="0.3" x="10" y="20" width="4" height="1" rx="0.5"></rect>
                                                                </g>
                                                            </svg>
                                                        </span> 
                                                        <span>Data Display</span>
                                                    </span>
                                                    <i className={`material-icons left-arrow ${this.state.dataDisplaySubMenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>
                                                <ul className="nested menu-subnav">
                                                    {dataDisplayDropdown.map((item, i) => {
                                                        return  <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 transition-colors" key={i}>
                                                                    <Link to="">&bull; Avatars</Link>
                                                                </li>
                                                    })}
                                                    
                                                </ul>
                                            </li>

                                            <li onClick={this.showUtilSubMenuHandler} className={`menu-item-submenu ${this.state.utilSubMenu ? "activeNestedSubNav" : ""}`}>
                                                <Link to="" className="mob-nav-category flex justify-between h-11 py-2 pl-10 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 transition-colors">
                                                    <span className="flex items-center">
                                                        <span class="svg-icon menu-icon mr-3">
                                                            <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                                                <g id="Stockholm-icons-/-Tools-/-Swiss-knife" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <path className="fill-current text-gray-400 hover:text-blue-400" d="M15.7842712,14 L12.9779221,16.8063492 L7.82842712,11.6568542 C6.26632996,10.0947571 6.26632996,7.56209717 7.82842712,6 L14,12.1715729 L14,8 C14,4.6862915 16.6862915,2 20,2 L20,14 L15.7842712,14 Z" id="Combined-Shape" opacity="0.3"></path>
                                                                    <path className="fill-current text-gray-400 hover:text-blue-400" d="M5.5,12 L18.5,12 C20.9852814,12 23,14.0147186 23,16.5 C23,18.9852814 20.9852814,21 18.5,21 L5.5,21 C3.01471863,21 1,18.9852814 1,16.5 C1,14.0147186 3.01471863,12 5.5,12 Z M19.5,18 C20.3284271,18 21,17.3284271 21,16.5 C21,15.6715729 20.3284271,15 19.5,15 C18.6715729,15 18,15.6715729 18,16.5 C18,17.3284271 18.6715729,18 19.5,18 Z" id="Combined-Shape"></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span>Utils</span>
                                                    </span>
                                                    <i className={`material-icons left-arrow ${this.state.utilSubMenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>
                                                <ul className="nested menu-subnav">
                                                    {utilDropdown.map((item, i) => {
                                                        return  <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 transition-colors" key={i}>
                                                                    <Link to="">&bull; {item.utilNav}</Link>
                                                                </li>
                                                    })}
                                                </ul>
                                            </li>

                                            <li onClick={this.showlayoutSubMenuHandler} className={`menu-item-submenu ${this.state.layoutSubMenu ? "activeNestedSubNav" : ""}`}>
                                                <Link to="" className="mob-nav-category flex justify-between h-11 py-2 pl-10 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 transition-colors">
                                                    <span className="flex items-center">
                                                        <span class="svg-icon menu-icon mr-3">
                                                            <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                                                <g id="Stockholm-icons-/-Layout-/-Layout-top-panel-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <path className="fill-current text-gray-400 hover:text-blue-400" d="M3,4 L20,4 C20.5522847,4 21,4.44771525 21,5 L21,7 C21,7.55228475 20.5522847,8 20,8 L3,8 C2.44771525,8 2,7.55228475 2,7 L2,5 C2,4.44771525 2.44771525,4 3,4 Z M10,10 L20,10 C20.5522847,10 21,10.4477153 21,11 L21,19 C21,19.5522847 20.5522847,20 20,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,11 C9,10.4477153 9.44771525,10 10,10 Z" id="Combined-Shape"></path>
                                                                    <rect className="fill-current text-gray-400 hover:text-blue-400" id="Rectangle-7-Copy-2" opacity="0.3" x="2" y="10" width="5" height="10" rx="1"></rect>
                                                                </g>
                                                            </svg>
                                                        </span> 
                                                        <span>Layout</span> 
                                                    </span>
                                                    <i className={`material-icons left-arrow ${this.state.layoutSubMenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>
                                                <ul className="nested menu-subnav">
                                                    {LayoutDropdown.map((item, i) => {
                                                        return  <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 transition-colors" key={i}>
                                                                    <Link to="">&bull; {item.layoutNav}</Link>
                                                                </li>
                                                    })}
                                                   
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            
                                <li onClick={this.showBootstrapHandler} className={`menu-item-submenu menu-item ${this.state.bootstrap ? "activeSubNav" : ""}`}>
                                    <Link to="/" className="main-nav-item w-full py-2 px-6 flex justify-between items-center h-11 py-2 px-6 text-xs font-normal leading-7 text-gray-500 hover:text-blue-500 hover:bg-blue-50 inline-flex items-center w-full hover:text-white transition-colors">
                                        <span className="inline-flex items-center">
                                            <span className="menu-item-li">Bootstrap</span>
                                        </span> 
                                        <i className={`menu-item-li material-icons left-arrow ${this.state.bootstrap ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                    </Link>
                                
                                    <div className={`menu-submenu ${this.state.bootstrap ? "showSubMenu" : "hideSubMenu"}`}>
                                        <ul className="menu-subnav">
                                            {BootstrapDropdown.map((item, i) => {
                                                return  <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors" key={i}>
                                                            <Link to="/">
                                                                &bull; {item.bootstrapNav}
                                                            </Link>
                                                        </li>
                                            })}
                                        
                                        </ul>
                                    </div>
                                </li>

                                <li onClick={this.showErrorHandler} className={`menu-item-submenu menu-item ${this.state.errorPage ? "activeSubNav" : ""}`}>
                                    <Link to="/" className="main-nav-item w-full py-2 px-6 flex justify-between items-center h-11 py-2 px-6 text-xs font-normal leading-7 text-gray-500 hover:text-blue-500 hover:bg-blue-50 inline-flex items-center w-full hover:text-white transition-colors">
                                        <span className="inline-flex items-center">
                                            <span className="menu-item-li">Error Pages</span>
                                        </span> 
                                        <i className={`menu-item-li material-icons left-arrow ${this.state.errorPage ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                    </Link>
                                
                                    <div className={`menu-submenu ${this.state.errorPage ? "showSubMenu" : "hideSubMenu"}`}>
                                        <ul className="menu-subnav">
                                            {ErrorPages.map((item, i) => {
                                                return  <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 font-normal leading-7 text-xs text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors" key={i}>
                                                            <Link to="/">
                                                                &bull; {item.errorPageNav}
                                                            </Link>
                                                        </li>
                                            })}

                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </>
        )
    }
}

export default MobNavSideBar;