import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../../common/sideBar/sideBar.css';

class MobCategorySideBar extends Component {
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
            materialUI: !this.state.materialUI
        })
    }

    showBootstrapHandler = () => {
        this.setState({
            bootstrap: !this.state.bootstrap
        })
    }

    showErrorHandler = () => {
        this.setState({
            errorPage: !this.state.errorPage
        })
    }

    showInputSubMenuHandler = () => {
        this.setState({
            inputSubmenu: !this.state.inputSubmenu
        })
    }

    showInputSubMenuHandler = () => {
        this.setState({
            inputSubmenu: !this.state.inputSubmenu
        })
    }

    showBootstrapSubMenuHandler = () => {
        this.setState({
            bootstrapSubMenu: !this.state.bootstrapSubMenu
        })
    }

    showSurfacesSubMenuHandler = () => {
        this.setState({
            surfacesSubMenu: !this.state.surfacesSubMenu
        })
    }

    showFeedbackSubMenuHandler = () => {
        this.setState({
            feedbackSubMenu: !this.state.feedbackSubMenu
        })
    }
    
    showDataDisplaySubMenuHandler = () => {
        this.setState({
            dataDisplaySubMenu: !this.state.dataDisplaySubMenu
        })
    }

    showUtilSubMenuHandler = () => {
        this.setState({
            utilSubMenu: !this.state.utilSubMenu
        })
    }

    showlayoutSubMenuHandler = () => {
        this.setState({
            layoutSubMenu: !this.state.layoutSubMenu
        })
    }

    asideToggleHandler = () => {
        this.setState({
            asideToggle: !this.state.asideToggle
        })
    }

    render() {
        return (
            <>
                <div className={`aside bg-gray-800 md:fixed w-64 top-0 bottom-0`}>
                    <div className="aside-menu-wrapper">
                        <div className="aside-menu mt-4 mb-4">
                            <ul className="menu-nav px-0 m-0 list-none">
                                <li className="menu-item active">
                                    <Link to="/" className="h-11 py-2 px-6 text-sm font-normal leading-7 text-gray-500 transition-colors inline-flex items-center w-full">
                                        <span className="svg-icon menu-icon mr-2">
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g id="Stockholm-icons-/-Design-/-Layers" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <polygon id="Bound" points="0 0 24 0 24 24 0 24"></polygon>
                                                    <path className="icon-dark" d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" id="Shape" fill="#000000" fillRule="nonzero"></path>
                                                    <path className="icon-light" d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" id="Path" fill="#000000" opacity="0.3"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="menu-item-li">Dashboard</span>
                                    </Link>
                                </li>

                                <li className="menu-item">
                                    <Link to="/" className="h-11 py-2 px-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 inline-flex items-center w-full hover:text-white transition-colors">
                                        <span className="svg-icon menu-icon mr-2">
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g id="Stockholm-icons-/-Home-/-Library" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <path className="icon-dark" d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" id="Combined-Shape" fill="#000000"></path>
                                                    <rect className="icon-light" id="Rectangle-Copy-2" fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) " x="16.3255682" y="2.94551858" width="3" height="18" rx="1"></rect>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="menu-item-li">Layout Builder</span>
                                    </Link>
                                </li>

                                <li className="menu-section mt-5 mb-0 mr-0 ml-0 py-2 px-6 text-sm text-gray-500">
                                    <h4 className="menu-text text-left">
                                        <i class="material-icons show-icon-toggle hidden">more_horiz</i>
                                        <span className="menu-item-li">
                                            <span className="menu-item-li">COMPONENTS</span>
                                        </span>
                                    </h4>
                                </li>

                                <li className={`menu-item-submenu menu-item ${this.state.materialUI ? "activeSubNav" : ""}`}>
                                    <Link to="/" onClick={this.showMaterialHandler} className="subMenuMainItem w-full py-2 px-6 flex justify-between items-center h-11 py-2 px-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 inline-flex items-center w-full hover:text-white transition-colors">
                                        <span className="inline-flex items-center">
                                            <span className="svg-icon menu-icon mr-2">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g id="Stockholm-icons-/-Design-/-Cap-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <circle className="icon-light" id="Oval" fill="#000000" opacity="0.3" cx="12" cy="7" r="2"></circle>
                                                        <path className="icon-dark" d="M11,19 L4,19 L4,7 L7.03051599,7 C7.01035184,7.16416693 7,7.33099545 7,7.5 C7,9.67706212 8.71775968,11.4930404 11,11.9099837 L11,19 Z M13,19 L13,11.9099837 C15.2822403,11.4930404 17,9.67706212 17,7.5 C17,7.33099545 16.9896482,7.16416693 16.969484,7 L20,7 L20,19 L13,19 Z" id="Combined-Shape" fill="#000000"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span className="menu-item-li">Material UI</span>
                                        </span> 
                                        <i className={`menu-item-li material-icons left-arrow ${this.state.materialUI ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                    </Link>
                                
                                    <div className={`menu-submenu ${this.state.materialUI ? "showSubMenu" : "hideSubMenu"}`}>
                                        <ul className="menu-subnav">
                                            <li onClick={this.showInputSubMenuHandler} className={`menu-item-submenu ${this.state.inputSubmenu ? "activeNestedSubNav" : ""}`}>
                                                <Link to="/" className="flex justify-between h-11 py-2 pl-10 pr-7 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Inputs <i className={`menu-item-li material-icons left-arrow ${this.state.inputSubmenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>
                                                <ul className="nested menu-subnav">
                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Autocomplete</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Buttons</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Checkboxes</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Pickers</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Radio Buttons</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Selects</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Switches</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Text Fields</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Transfer List</Link>
                                                    </li>
                                                </ul>
                                            
                                            </li>

                                            <li onClick={this.showBootstrapSubMenuHandler} className={`menu-item-submenu ${this.state.bootstrapSubMenu ? "activeNestedSubNav" : ""}`} >
                                                <Link to="" className="flex justify-between h-11 py-2 pl-10 pr-7 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Navigation  <i className={`material-icons left-arrow ${this.state.bootstrapSubMenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>
                                                <ul className="nested menu-subnav">
                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Bottom Navigation</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Breadcrumbs</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Drawers</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; NavLinks</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Menus</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Stepper</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Tabs</Link>
                                                    </li>
                                                </ul>

                                            </li>

                                            <li onClick={this.showSurfacesSubMenuHandler} className={`menu-item-submenu ${this.state.surfacesSubMenu ? "activeNestedSubNav" : ""}`}>
                                                <Link to="" className="flex justify-between h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Surfaces <i className={`material-icons left-arrow ${this.state.surfacesSubMenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>

                                                <ul className="nested menu-subnav">
                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; App Bar</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Paper</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Cards</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Expansion Panels</Link>
                                                    </li>
                                                </ul>
                                            
                                            </li>

                                            <li onClick={this.showFeedbackSubMenuHandler} className={`menu-item-submenu ${this.state.feedbackSubMenu ? "activeNestedSubNav" : ""}`}>
                                                <Link to="" className="flex justify-between h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Feedback <i className={`material-icons left-arrow ${this.state.feedbackSubMenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>
                                                <ul className="nested menu-subnav">
                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Progress</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Dialogs</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Snackbars</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li onClick={this.showDataDisplaySubMenuHandler} className={`menu-item-submenu ${this.state.dataDisplaySubMenu ? "activeNestedSubNav" : ""}`}>
                                                <Link to="" className="flex justify-between h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Data Display <i className={`material-icons left-arrow ${this.state.dataDisplaySubMenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>
                                                <ul className="nested menu-subnav">
                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Avatars</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Badges</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Chips</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Dividers</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Icons</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Lists</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Tables</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Tooltips</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Typography</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li onClick={this.showUtilSubMenuHandler} className={`menu-item-submenu ${this.state.utilSubMenu ? "activeNestedSubNav" : ""}`}>
                                                <Link to="" className="flex justify-between h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Utils <i className={`material-icons left-arrow ${this.state.utilSubMenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>
                                                <ul className="nested menu-subnav">
                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Click Away Listener</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; No SSR</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Popover</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Popper</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Portals</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Transitions</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; useMediaQuery</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li onClick={this.showlayoutSubMenuHandler} className={`menu-item-submenu ${this.state.layoutSubMenu ? "activeNestedSubNav" : ""}`}>
                                                <Link to="" className="flex justify-between h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Layout <i className={`material-icons left-arrow ${this.state.layoutSubMenu ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                                </Link>
                                                <ul className="nested menu-subnav">
                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Box</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Container</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Grid</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Grid list</Link>
                                                    </li>

                                                    <li className="menu-item-submenu h-11 py-2 pl-14 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                        <Link to="">&bull; Hidden</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            
                                <li onClick={this.showBootstrapHandler} className={`menu-item-submenu menu-item ${this.state.bootstrap ? "activeSubNav" : ""}`}>
                                    <Link to="/" className="subMenuMainItem w-full py-2 px-6 flex justify-between items-center h-11 py-2 px-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 inline-block w-full hover:text-white transition-colors">
                                        <span className="inline-flex items-center">
                                            <span className="svg-icon menu-icon mr-2">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g id="Stockholm-icons-/-Shopping-/-Box2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                        <path className="icon-light" d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" id="Combined-Shape" fill="#000000"></path>
                                                        <path className="icon-dark" d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" id="Path" fill="#000000" opacity="0.3"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span className="menu-item-li">Bootstrap</span>
                                        </span> 
                                        <i className={`menu-item-li material-icons left-arrow ${this.state.bootstrap ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                    </Link>
                                
                                    <div className={`menu-submenu ${this.state.bootstrap ? "showSubMenu" : "hideSubMenu"}`}>
                                        <ul className="menu-subnav">
                                            <li className="menu-item-submenu">
                                                <Link to="/" className="flex h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Alerts
                                                </Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Badge</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Breadcrumb</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Buttons</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Button Group</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Cards</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Carousel</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Dropdowns</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Forms</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Input Group</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Images</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Figures</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Jumbotron</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; List group</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Modal</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Navs</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Navbar</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Overlays</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Pagination</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Popovers</Link>
                                            </li>

                                            <li className="menu-item-submenu h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                <Link to="">&bull; Progress</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="menu-section mt-5 mb-0 mr-0 ml-0 py-2 px-6 text-sm text-gray-500">
                                    <h4 className="menu-text text-left">
                                        <i class="material-icons show-icon-toggle hidden">more_horiz</i>
                                        <span className="menu-item-li">
                                            <span className="menu-item-li">APPLICATIONS</span>
                                        </span>
                                    </h4>
                                </li>

                                <li className={`menu-item-submenu menu-item`}>
                                    <Link to="/" className="subMenuMainItem w-full py-2 px-6 flex justify-between items-center h-11 py-2 px-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 inline-block w-full hover:text-white transition-colors">
                                    <span className="inline-flex items-center">
                                        <span className="svg-icon menu-icon mr-2">
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g id="Stockholm-icons-/-Shopping-/-Bag2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <path className="icon-light" d="M5.94290508,4 L18.0570949,4 C18.5865712,4 19.0242774,4.41271535 19.0553693,4.94127798 L19.8754445,18.882556 C19.940307,19.9852194 19.0990032,20.9316862 17.9963398,20.9965487 C17.957234,20.9988491 17.9180691,21 17.8788957,21 L6.12110428,21 C5.01653478,21 4.12110428,20.1045695 4.12110428,19 C4.12110428,18.9608266 4.12225519,18.9216617 4.12455553,18.882556 L4.94463071,4.94127798 C4.97572263,4.41271535 5.41342877,4 5.94290508,4 Z" id="Combined-Shape" fill="#000000" opacity="0.3"></path>
                                                    <path className="icon-dark" d="M7,7 L9,7 C9,8.65685425 10.3431458,10 12,10 C13.6568542,10 15,8.65685425 15,7 L17,7 C17,9.76142375 14.7614237,12 12,12 C9.23857625,12 7,9.76142375 7,7 Z" id="Oval-28" fill="#000000"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="menu-item-li">eCommerce</span>
                                    </span> 
                                    </Link>
                                </li>

                                <li className={`menu-item-submenu menu-item`}>
                                    <Link to="/" className="subMenuMainItem w-full py-2 px-6 flex justify-between items-center h-11 py-2 px-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 inline-block w-full hover:text-white transition-colors">
                                        <span className="inline-flex items-center">
                                            <span className="svg-icon menu-icon mr-2">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g id="Stockholm-icons-/-Communication-/-Add-user" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                                        <path className="icon-light" d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" id="Combined-Shape" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                                        <path className="icon-dark" d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" id="Mask-Copy" fill="#000000" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span className="menu-item-li">User Profile </span>
                                        </span>
                                    </Link>
                                </li>

                                <li className="menu-section mt-5 mb-0 mr-0 ml-0 py-2 px-6 text-sm text-gray-500">
                                    <h4 className="menu-text text-left">
                                        <i class="material-icons show-icon-toggle hidden">more_horiz</i>
                                        <span className="menu-item-li">
                                            <span className="menu-item-li">CUSTOM</span>
                                        </span>
                                    </h4>
                                </li>

                                <li onClick={this.showErrorHandler} className={`menu-item-submenu menu-item ${this.state.errorPage ? "activeSubNav" : ""}`}>
                                    <Link to="/" className="subMenuMainItem w-full py-2 px-6 flex justify-between items-center h-11 py-2 px-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 inline-block w-full hover:text-white transition-colors">
                                        <span className="inline-flex items-center">
                                            <span className="svg-icon menu-icon mr-2">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g id="Stockholm-icons-/-Code-/-Error-circle" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                        <circle className="icon-light" id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
                                                        <path className="icon-dark" d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" id="Combined-Shape" fill="#000000"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span className="menu-item-li">Error Pages</span>
                                        </span> 
                                        <i className={`menu-item-li material-icons left-arrow ${this.state.errorPage ? "transformVertical" : "transformNone"}`}>keyboard_arrow_right</i>
                                    </Link>
                                
                                    <div className={`menu-submenu ${this.state.errorPage ? "showSubMenu" : "hideSubMenu"}`}>
                                        <ul className="menu-subnav">
                                            <li className="menu-item-submenu">
                                                <Link to="/" className="flex h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Error Page - 1
                                                </Link>
                                            </li>

                                            <li className="menu-item-submenu">
                                                <Link to="/" className="flex h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Error Page - 2
                                                </Link>
                                            </li>

                                            <li className="menu-item-submenu">
                                                <Link to="/" className="flex h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Error Page - 3
                                                </Link>
                                            </li>

                                            <li className="menu-item-submenu">
                                                <Link to="/" className="flex h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Error Page - 4
                                                </Link>
                                            </li>

                                            <li className="menu-item-submenu">
                                                <Link to="/" className="flex h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Error Page - 5
                                                </Link>
                                            </li>

                                            <li className="menu-item-submenu">
                                                <Link to="/" className="flex h-11 py-2 pl-10 pr-6 text-sm font-normal leading-7 text text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                                                    &bull; Error Page - 1
                                                </Link>
                                            </li>
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

export default MobCategorySideBar;