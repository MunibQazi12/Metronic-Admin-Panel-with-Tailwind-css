import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CustomDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorPageSubMenu: false,
            eCommerceSubMenu: false
        }
    }

    eCommerceSubMenuHandler = () => {
        this.setState({
            eCommerceSubMenu: !this.state.eCommerceSubMenu
        })
    }

    errorPageSubMenuHandler = () => {
        this.setState({
            errorPageSubMenu: !this.state.errorPageSubMenu
        })
    }

    render() {
        const customSubMenus = [
            {subMenu: "eCommerce"},
            {subMenu: "Layout Builder"},
            {subMenu: "Error Pages"}
        ]

        const eCommerceSubMenus = [
            {subMenu: "Customers"},
            {subMenu: "Products"}
        ]

        const errorPages = [
            {subMenu: "Error 1"},
            {subMenu: "Error 2"},
            {subMenu: "Error 3"},
            {subMenu: "Error 4"},
            {subMenu: "Error 5"},
            {subMenu: "Error 5"}
        ]
        return (
            <>
                <ul>
                    <li onMouseEnter={this.eCommerceSubMenuHandler} onMouseLeave={this.eCommerceSubMenuHandler} className="hover:bg-blue-50 relative">
                        <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-2.5">
                            <span className="flex items-center">
                                <span className="menu-text text-xs text-gray-700">eCommerce</span>
                            </span>
                            <i className="material-icons text-base text-gray-400">keyboard_arrow_right</i>
                        </Link>

                        <div className={`m-px w-64 bg-white rounded submenu-box-shadow z-50 absolute left-full z-50 top-0 py-4 ${this.state.eCommerceSubMenu ? "show fadeInDown" : "hidden"}`}>
                            <ul className="nested-submenu">
                                {eCommerceSubMenus.map((nav, i) => {
                                    return <li className="hover:bg-blue-50 relative" key={i}>
                                                <Link to="" className="pl-8 pr-5 py-1 flex items-center text-xs">
                                                    <span className="mr-3 text-2xl text-gray-400">&#183;</span>
                                                    <span className="text-gray-600">{nav.subMenu}</span>
                                                </Link>
                                            </li>
                                })}
                            </ul>
                        </div>
                    
                    </li>

                    <li className="hover:bg-blue-50">
                        <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-2.5">
                            <span className="flex items-center">
                                <span className="menu-text text-xs text-gray-700">Layout Builder</span>
                            </span>
                        </Link>
                    </li>

                    <li onMouseEnter={this.errorPageSubMenuHandler} onMouseLeave={this.errorPageSubMenuHandler} className="hover:bg-blue-50 relative">
                        <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-2.5">
                            <span className="flex items-center">
                                <span className="menu-text text-xs text-gray-700">Error Pages</span>
                            </span>
                            <i className="material-icons text-base text-gray-400">keyboard_arrow_right</i>
                        </Link>

                        <div className={`m-px w-64 bg-white rounded submenu-box-shadow z-50 absolute left-full z-50 top-0 py-4 ${this.state.errorPageSubMenu ? "show fadeInDown" : "hidden"}`}>
                            <ul className="nested-submenu">
                                {errorPages.map((nav, i) => {
                                    return <li className="hover:bg-blue-50 relative">
                                                <Link to="" className="pl-8 pr-5 py-1 flex items-center text-xs">
                                                    <span className="mr-3 text-2xl text-gray-400">&#183;</span>
                                                    <span className="text-gray-600">{nav.subMenu}</span>
                                                </Link>
                                            </li>
                                })}

                                
                            </ul>
                        </div>
                    </li>

                </ul>
                                                                
            </>
        )
    }
}

export default CustomDropdown;