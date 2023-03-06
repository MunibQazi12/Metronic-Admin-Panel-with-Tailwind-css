import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MaterialUIDropdown = () => {
    const [inputSubMenu, setInputSubMenu] = useState(false);
    const [navigationSubMenu, setNavigationSubMenu] = useState(false);
    const [surfaceSubMenu, setSurfaceSubMenu] = useState(false);
    const [feedbackSubMenu, setFeedbackSubMenu] = useState(false);
    const [dataDisplySubMenu, setDataDisplySubMenu] = useState(false);
    const [utilSubMenu, setUtilSubMenu] = useState(false);
    const [layoutSubMenu, setLayoutSubMenu] = useState(false);

    const inputSubMenuHandler = () => {
        setInputSubMenu(!inputSubMenu);
    }

    const navigationSubMenuHandler = () => {
        setNavigationSubMenu(!navigationSubMenu);
    }

    const surfaceSubMenuHandler = () => {
        setSurfaceSubMenu(!surfaceSubMenu);
    }

    const feedbackMenuHandler = () => {
        setFeedbackSubMenu(!feedbackSubMenu);
    }

    const dataDisplySubMenuHandler = () => {
        setDataDisplySubMenu(!dataDisplySubMenu);
    }

    const utilsSubMenuHandler = () => {
        setUtilSubMenu(!utilSubMenu);
    }

    const layoutSubMenuHandler = () => {
        setLayoutSubMenu(!layoutSubMenu);
    }

    const inputSubMenus = [
        {inputMenu: "Autocomplete"},
        {inputMenu: "Buttons"},
        {inputMenu: "Checkboxes"},
        {inputMenu: "Pickers"},
        {inputMenu: "Radio Buttons"},
        {inputMenu: "Select"},
        {inputMenu: "Switches"},
        {inputMenu: "Text Fields"},
        {inputMenu: "Switches"},
        {inputMenu: "Transfer List"}
    ]

    const navigationSubMenus = [
        {navigationMenu: "Bottom Navigation"},
        {navigationMenu: "Breadcrumbs"},
        {navigationMenu: "Drawers"},
        {navigationMenu: "NavLinks"},
        {navigationMenu: "Menus"},
        {navigationMenu: "Steppers"},
        {navigationMenu: "Tabs"}
    ]

    const surfaceSubMenus = [
        {surfaceMenus: "App Bar"},
        {surfaceMenus: "Paper"},
        {surfaceMenus: "Cards"},
        {surfaceMenus: "Expansion Panels"}
    ]

    const feedbackSubMenus = [
        {feedbackMeuns: "Progress"},
        {feedbackMeuns: "Dialogs"},
        {feedbackMeuns: "Snackbars"}
    ]

    const dataDisplaySubMenus = [
        {dataMenus: "Avatars"},
        {dataMenus: "Badges"},
        {dataMenus: "Chips"},
        {dataMenus: "Dividers"},
        {dataMenus: "Icons"},
        {dataMenus: "Lists"},
        {dataMenus: "Tables"},
        {dataMenus: "Tooltips"},
        {dataMenus: "Typography"}
    ]

    const utilsSubMenu = [
        {utilMenus: "Click Away Listener"},
        {utilMenus: "Modal"},
        {utilMenus: "No SSR"},
        {utilMenus: "Popover"},
        {utilMenus: "Popper"},
        {utilMenus: "Portal"},
        {utilMenus: "Transitions"},
        {utilMenus: "UseMediaQuery"}
    ]

    const layoutSubMenus = [
        {layouts: "Box"},
        {layouts: "Container"},
        {layouts: "Grid"},
        {layouts: "Grid list"},
        {layouts: "Hidden"}
    ]

    return (
        <ul>
            <li onMouseEnter={inputSubMenuHandler} onMouseLeave={inputSubMenuHandler} className="hover:bg-blue-50 relative">
                <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-2.5">
                    <span className="flex items-center">
                        <span className="svg-icon menu-icon mr-3">
                            <svg width="19.5px" height="19.5px" viewBox="0 0 24 24" version="1.1">
                                <g id="Stockholm-icons-/-Design-/-Pen&amp;ruller" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                    <path className="fill-dark" d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z" id="Combined-Shape" fill="#000000" opacity="0.3"></path>
                                    <path className="fill-dark" d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z" id="Rectangle-102-Copy" fill="#000000"></path>
                                </g>
                            </svg>
                        </span>
                        <span className="menu-text text-xs text-gray-700">Inputs</span>
                    </span>
                    <i className="material-icons text-base text-gray-400">keyboard_arrow_right</i>
                </Link>
                
                <div className={`m-px w-64 bg-white rounded submenu-box-shadow z-50 absolute left-full z-50 top-0 py-4 ${inputSubMenu ? "show fadeInDown" : "hidden"}`}>
                    <ul className="nested-submenu">
                        {inputSubMenus.map((input, i) => {
                            return  <li className="hover:bg-blue-50 relative" key={i}>
                                        <Link to="" className="pl-8 pr-5 py-1 flex items-center text-xs">
                                            <span className="mr-3 text-2xl text-gray-400">&#183;</span>
                                            <span className="text-gray-600">{input.inputMenu}</span>
                                        </Link>
                                    </li>
                        })}
                    </ul>
                </div>
            </li>

            <li onMouseEnter={navigationSubMenuHandler} onMouseLeave={navigationSubMenuHandler} className="hover:bg-blue-50 relative">
                <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-2.5">
                    <span className="flex items-center">
                        <span className="svg-icon menu-icon mr-3">
                            <svg width="19.5px" height="19.5px" viewBox="0 0 24 24" version="1.1">
                                <g id="Stockholm-icons-/-Navigation-/-Arrow-from-left" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                    <rect className="fill-dark" id="Rectangle" fill="#000000" opacity="0.3" transform="translate(14.000000, 12.000000) rotate(-90.000000) translate(-14.000000, -12.000000) " x="13" y="5" width="2" height="14" rx="1"></rect>
                                    <rect className="fill-dark" id="Rectangle-199-Copy" fill="#000000" opacity="0.3" x="3" y="3" width="2" height="18" rx="1"></rect>
                                    <path className="fill-dark" d="M11.7071032,15.7071045 C11.3165789,16.0976288 10.6834139,16.0976288 10.2928896,15.7071045 C9.90236532,15.3165802 9.90236532,14.6834152 10.2928896,14.2928909 L16.2928896,8.29289093 C16.6714686,7.914312 17.281055,7.90106637 17.675721,8.26284357 L23.675721,13.7628436 C24.08284,14.136036 24.1103429,14.7686034 23.7371505,15.1757223 C23.3639581,15.5828413 22.7313908,15.6103443 22.3242718,15.2371519 L17.0300721,10.3841355 L11.7071032,15.7071045 Z" id="Path-94" fill="#000000" fillRule="nonzero" transform="translate(16.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-16.999999, -11.999997) "></path>
                                </g>
                            </svg>
                        </span>
                        <span className="menu-text text-xs text-gray-700">Navigation</span>
                    </span>
                    <i className="material-icons text-base text-gray-400">keyboard_arrow_right</i>
                </Link>
                
                <div className={`m-px w-64 bg-white rounded submenu-box-shadow z-50 absolute left-full z-50 top-0 py-4 ${navigationSubMenu ? "show fadeInDown" : "hidden"}`}>
                    <ul className="nested-submenu">
                        {navigationSubMenus.map((nav, i) => {
                            return  <li className="hover:bg-blue-50 relative" key={i}>
                                        <Link to="" className="pl-8 pr-5 py-1 flex items-center text-xs">
                                            <span className="mr-3 text-2xl text-gray-400">&#183;</span>
                                            <span className="text-gray-600">{nav.navigationMenu}</span>
                                        </Link>
                                    </li>
                        })}
                    </ul>
                </div>                                                
            </li>

            <li onMouseEnter={surfaceSubMenuHandler} onMouseLeave={surfaceSubMenuHandler} className="hover:bg-blue-50 relative">
                <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-2.5">
                    <span className="flex items-center">
                        <span className="svg-icon menu-icon mr-3">
                            <svg width="19.5px" height="19.5px" viewBox="0 0 24 24" version="1.1">
                                <g id="Stockholm-icons-/-Layout-/-Layout-left-panel-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                    <rect className="fill-dark" id="Rectangle-7-Copy" fill="#000000" x="9" y="5" width="13" height="14" rx="1.5"></rect>
                                    <rect className="fill-dark" id="Rectangle-7-Copy-2" fill="#000000" opacity="0.3" x="2" y="5" width="5" height="14" rx="1"></rect>
                                </g>
                            </svg>
                        </span>
                        <span className="menu-text text-xs text-gray-700">Surfaces</span>
                    </span>
                    <i className="material-icons text-base text-gray-400">keyboard_arrow_right</i>
                </Link>

                <div className={`m-px w-64 bg-white rounded submenu-box-shadow z-50 absolute left-full z-50 top-0 py-4 ${surfaceSubMenu ? "show fadeInDown" : "hidden"}`}>
                    <ul className="nested-submenu">
                        {surfaceSubMenus.map((surface, i) => {
                            return  <li className="hover:bg-blue-50 relative" key={i}>
                                        <Link to="" className="pl-8 pr-5 py-1 flex items-center text-xs">
                                            <span className="mr-3 text-2xl text-gray-400">&#183;</span>
                                            <span className="text-gray-600">{surface.surfaceMenus}</span>
                                        </Link>
                                    </li>
                        })}
                    </ul>
                </div>
            </li>

            <li onMouseEnter={feedbackMenuHandler} onMouseLeave={feedbackMenuHandler} className="hover:bg-blue-50 relative">
                <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-2.5">
                    <span className="flex items-center">
                        <span className="svg-icon menu-icon mr-3">
                            <svg width="19.5px" height="19.5px" viewBox="0 0 24 24" version="1.1">
                                <g id="Stockholm-icons-/-General-/-Half-star" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                    <path className="fill-dark" d="M12,4.25932872 C12.1488635,4.25921584 12.3000368,4.29247316 12.4425657,4.36281539 C12.6397783,4.46014562 12.7994058,4.61977315 12.8967361,4.81698575 L14.9389263,8.95491503 L19.5054023,9.61846284 C20.0519472,9.69788046 20.4306287,10.2053233 20.351211,10.7518682 C20.3195865,10.9695052 20.2170993,11.1706476 20.0596157,11.3241562 L16.7552826,14.545085 L17.5353298,19.0931094 C17.6286908,19.6374458 17.263103,20.1544017 16.7187666,20.2477627 C16.5020089,20.2849396 16.2790408,20.2496249 16.0843804,20.1472858 L12,18 L12,4.25932872 Z" id="Combined-Shape" fill="#000000" opacity="0.3"></path>
                                    <path className="fill-dark" d="M12,4.25932872 L12,18 L7.91561963,20.1472858 C7.42677504,20.4042866 6.82214789,20.2163401 6.56514708,19.7274955 C6.46280801,19.5328351 6.42749334,19.309867 6.46467018,19.0931094 L7.24471742,14.545085 L3.94038429,11.3241562 C3.54490071,10.938655 3.5368084,10.3055417 3.92230962,9.91005817 C4.07581822,9.75257453 4.27696063,9.65008735 4.49459766,9.61846284 L9.06107374,8.95491503 L11.1032639,4.81698575 C11.277344,4.464261 11.6315987,4.25960807 12,4.25932872 Z" id="Combined-Shape" fill="#000000"></path>
                                </g>
                            </svg>
                        </span>
                        <span className="menu-text text-xs text-gray-700">Feedback</span>
                    </span>
                    <i className="material-icons text-base text-gray-400">keyboard_arrow_right</i>
                </Link>

                <div className={`m-px w-64 bg-white rounded submenu-box-shadow z-50 absolute left-full z-50 top-0 py-4 ${feedbackSubMenu ? "show fadeInDown" : "hidden"}`}>
                    <ul className="nested-submenu">
                        {feedbackSubMenus.map((feedback, i) => {
                            return <li className="hover:bg-blue-50 relative">
                                        <Link to="" className="pl-8 pr-5 py-1 flex items-center text-xs">
                                            <span className="mr-3 text-2xl text-gray-400">&#183;</span>
                                            <span className="text-gray-600">{feedback.feedbackMeuns}</span>
                                        </Link>
                                    </li>
                        })}
                    </ul>
                </div>
            </li>

            <li onMouseEnter={dataDisplySubMenuHandler} onMouseLeave={dataDisplySubMenuHandler} className="hover:bg-blue-50 relative">
                <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-2.5">
                    <span className="flex items-center">
                        <span className="svg-icon menu-icon mr-3">
                            <svg width="19.5px" height="19.5px" viewBox="0 0 24 24" version="1.1">
                                <g id="Stockholm-icons-/-Devices-/-iMac" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                    <path className="fill-dark" d="M5,5 L5,16 L19,16 L19,5 L5,5 Z M5,3 L19,3 C20.4201608,3 21,3.7163444 21,4.6 L21,17.4 C21,18.2836556 20.4201608,19 19,19 L5,19 C3.57983921,19 3,18.2836556 3,17.4 L3,4.6 C3,3.7163444 3.57983921,3 5,3 Z M12,18 C12.2761424,18 12.5,17.7761424 12.5,17.5 C12.5,17.2238576 12.2761424,17 12,17 C11.7238576,17 11.5,17.2238576 11.5,17.5 C11.5,17.7761424 11.7238576,18 12,18 Z" id="Combined-Shape" fill="#000000" fillRule="nonzero"></path>
                                    <polygon className="fill-dark" id="Combined-Shape" fill="#000000" opacity="0.3" points="5 5 5 16 19 16 19 5"></polygon>
                                    <rect id="Rectangle-4" fill="#000000" opacity="0.3" x="10" y="20" width="4" height="1" rx="0.5"></rect>
                                </g>
                            </svg>
                        </span>
                        <span className="menu-text text-xs text-gray-700">Data Display</span>
                    </span>
                    <i className="material-icons text-base text-gray-400">keyboard_arrow_right</i>
                </Link>

                <div className={`m-px w-64 bg-white rounded submenu-box-shadow z-50 absolute left-full z-50 top-0 py-4 ${dataDisplySubMenu ? "show fadeInDown" : "hidden"}`}>
                    <ul className="nested-submenu">
                        {dataDisplaySubMenus.map((data, i) => {
                            return <li className="hover:bg-blue-50 relative">
                                        <Link to="" className="pl-8 pr-5 py-1 flex items-center text-xs">
                                            <span className="mr-3 text-2xl text-gray-400">&#183;</span>
                                            <span className="text-gray-600">{data.dataMenus}</span>
                                        </Link>
                                    </li>
                        })}
                    </ul>
                </div>
            </li>

            <li onMouseEnter={utilsSubMenuHandler} onMouseLeave={utilsSubMenuHandler} className="hover:bg-blue-50 relative">
                <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-2.5">
                    <span className="flex items-center">
                        <span className="svg-icon menu-icon mr-3">
                            <svg width="19.5px" height="19.5px" viewBox="0 0 24 24" version="1.1">
                                <g id="Stockholm-icons-/-Tools-/-Swiss-knife" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                    <path className="fill-dark" d="M15.7842712,14 L12.9779221,16.8063492 L7.82842712,11.6568542 C6.26632996,10.0947571 6.26632996,7.56209717 7.82842712,6 L14,12.1715729 L14,8 C14,4.6862915 16.6862915,2 20,2 L20,14 L15.7842712,14 Z" id="Combined-Shape" fill="#000000" opacity="0.3"></path>
                                    <path className="fill-dark" d="M5.5,12 L18.5,12 C20.9852814,12 23,14.0147186 23,16.5 C23,18.9852814 20.9852814,21 18.5,21 L5.5,21 C3.01471863,21 1,18.9852814 1,16.5 C1,14.0147186 3.01471863,12 5.5,12 Z M19.5,18 C20.3284271,18 21,17.3284271 21,16.5 C21,15.6715729 20.3284271,15 19.5,15 C18.6715729,15 18,15.6715729 18,16.5 C18,17.3284271 18.6715729,18 19.5,18 Z" id="Combined-Shape" fill="#000000"></path>
                                </g>
                            </svg>
                        </span>
                        <span className="menu-text text-xs text-gray-700">Utils</span>
                    </span>
                    <i className="material-icons text-base text-gray-400">keyboard_arrow_right</i>
                </Link>

                <div className={`m-px w-64 bg-white rounded submenu-box-shadow z-50 absolute left-full z-50 top-0 py-4 ${utilSubMenu ? "show fadeInDown" : "hidden"}`}>
                    <ul className="nested-submenu">
                        {utilsSubMenu.map((util, i) => {
                            return  <li className="hover:bg-blue-50 relative">
                                        <Link to="" className="pl-8 pr-5 py-1 flex items-center text-xs">
                                            <span className="mr-3 text-2xl text-gray-400">&#183;</span>
                                            <span className="text-gray-600">{util.utilMenus}</span>
                                        </Link>
                                    </li>
                        })}
                    </ul>
                </div>
            </li>

            <li onMouseEnter={layoutSubMenuHandler} onMouseLeave={layoutSubMenuHandler} className="hover:bg-blue-50 relative">
                <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-2.5">
                    <span className="flex items-center">
                        <span className="svg-icon menu-icon mr-3">
                            <svg width="19.5px" height="19.5px" viewBox="0 0 24 24" version="1.1">
                                <g id="Stockholm-icons-/-Layout-/-Layout-top-panel-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                    <path className="fill-dark" d="M3,4 L20,4 C20.5522847,4 21,4.44771525 21,5 L21,7 C21,7.55228475 20.5522847,8 20,8 L3,8 C2.44771525,8 2,7.55228475 2,7 L2,5 C2,4.44771525 2.44771525,4 3,4 Z M10,10 L20,10 C20.5522847,10 21,10.4477153 21,11 L21,19 C21,19.5522847 20.5522847,20 20,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,11 C9,10.4477153 9.44771525,10 10,10 Z" id="Combined-Shape" fill="#000000"></path>
                                    <rect className="fill-dark" id="Rectangle-7-Copy-2" fill="#000000" opacity="0.3" x="2" y="10" width="5" height="10" rx="1"></rect>
                                </g>
                            </svg>
                        </span>
                        <span className="menu-text text-xs text-gray-700">Layout</span>
                    </span>
                    <i className="material-icons text-base text-gray-400">keyboard_arrow_right</i>
                </Link>

                <div className={`m-px w-64 bg-white rounded submenu-box-shadow z-50 absolute left-full z-50 top-0 py-4 ${layoutSubMenu ? "show fadeInDown" : "hidden"}`}>
                    <ul className="nested-submenu">
                        {layoutSubMenus.map((util, i) => {
                            <li className="hover:bg-blue-50 relative">
                                <Link to="" className="pl-8 pr-5 py-1 flex items-center text-xs">
                                    <span className="mr-3 text-2xl text-gray-400">&#183;</span>
                                    <span className="text-gray-600">{util.layouts}</span>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default MaterialUIDropdown;