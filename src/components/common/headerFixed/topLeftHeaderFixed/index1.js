import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';
import MaterialUIDropdown from './materialUIDropdown';
import BootstrapDropdown from './bootstrapDropdown';
import CustomDropdown from './customDropdown';

const TopLeftHeaderFixed = () => {
    const [materialUiSubMenu, setMaterialUiSubMenu] = useState(false);
    const [bootstrapSubMenu, setBootstrapSubMenu] = useState(false);
    const [customSubMenu, setCustomSubMenu] = useState(false);

    const materialSubMenuHander = () => {
        setMaterialUiSubMenu(!materialUiSubMenu);
    }

    const bootstrapSubMenuHander = () => {
        setBootstrapSubMenu(!bootstrapSubMenu);
    }

    const customSubMenuHander = () => {
        setCustomSubMenu(!this.state.customSubMenu);
        bootstrapSubMenu: false
    }

    

    return (
        <div className="flex justify-between items-stretch py-4 items-center">
            <div className="header-menu-wrapper items-stretch items-center">
                <div className="header-menu items-stretch h-full items-center">
                    <ul className="menu-nav flex items-stretch p-0 m-0 list-none">
                        <li className="flex items-center pl-0 py-0 px-1">
                            <Link to="/" className="rounded py-2.5 px-4 flex items-stretch no-underline align-middle text-gray-600 hover:bg-blue-50 hover:text-blue-500 active">
                                <span className="flex items-center p-0 text-xs font-medium w-auto ">Dashboard</span>
                            </Link>
                        </li>

                        <li ref={this.refDropdown} onClick={this.materialSubMenuHander} className="flex items-center py-0 px-1">
                            <Link to="" className={`rounded py-2.5 px-4 flex items-stretch no-underline align-middle text-gray-600 hover:bg-blue-50 hover:text-blue-500 ${this.state.materialUiSubMenu ? "active" : ""}`}>
                                <span className="flex items-center p-0 text-xs font-medium w-auto">Material UI</span>
                            </Link>

                            <div className={`topbar-submenu w-64 bg-white rounded submenu-box-shadow py-5 px-0 absolute top-10 z-50 top-full ${this.state.materialUiSubMenu ? "show fadeInUp" : "hidden"}`}>
                                <MaterialUIDropdown />
                            </div>
                        </li>

                        <li ref={this.refDropdown} onClick={this.bootstrapSubMenuHander} className="flex items-center py-0 px-1">
                            <Link to="" className={`rounded py-2.5 px-4 flex items-stretch no-underline align-middle text-gray-600 hover:bg-blue-50 hover:text-blue-500 ${this.state.bootstrapSubMenu ? "active" : ""}`}>
                                <span className="flex items-center p-0 text-xs font-medium w-auto">Bootstrap</span>
                            </Link>

                            <div className={`flex topbar-submenu w-auto bg-white rounded submenu-box-shadow px-0 absolute top-10 z-50 top-full ${this.state.bootstrapSubMenu ? "show fadeInUp" : "hidden"}`}>
                                <BootstrapDropdown />
                            </div>
                        
                        </li>

                        <li ref={this.refDropdown} onClick={this.customSubMenuHander} className="flex items-center py-0 px-1">
                            <Link to="" className={`rounded py-2.5 px-4 flex items-stretch no-underline align-middle text-gray-600 hover:bg-blue-50 hover:text-blue-500 ${this.state.customSubMenu ? "active" : ""}`}>
                                <span className="flex items-center p-0 text-xs font-medium w-auto">Custom</span>
                            </Link>
                        
                            <div className={`topbar-submenu w-64 bg-white rounded submenu-box-shadow py-5 px-0 absolute top-10 z-50 top-full ${this.state.customSubMenu ? "show fadeInUp" : "hidden"}`}>
                                <CustomDropdown />
                            </div>
                        
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopLeftHeaderFixed;