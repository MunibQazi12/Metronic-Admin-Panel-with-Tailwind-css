import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BootstrapDropdown extends Component {

    render() {
        const AtoC = [
            {subMenu: "Alerts"},
            {subMenu: "Accordian"},
            {subMenu: "Badge"},
            {subMenu: "Breadcrumb"},
            {subMenu: "Buttons"},
            {subMenu: "Button Group"},
            {subMenu: "Card"}
        ]

        const CtoJ = [
            {subMenu: "Carousel"},
            {subMenu: "Dropdowns"},
            {subMenu: "Forms"},
            {subMenu: "Input Group"},
            {subMenu: "Images"},
            {subMenu: "Figures"},
            {subMenu: "Jumbotron"}
        ]

        const LtoP = [
            {subMenu: "List group"},
            {subMenu: "Modal"},
            {subMenu: "Navs"},
            {subMenu: "Navbar"},
            {subMenu: "Overlays"},
            {subMenu: "Pagination"},
            {subMenu: "Popvers"}
        ]

        const PtoT = [
            {subMenu: "Progress"},
            {subMenu: "Spinners"},
            {subMenu: "Table"},
            {subMenu: "Tabs"},
            {subMenu: "Tooltips"},
            {subMenu: "Toasts"}
        ]
        return (
            <>
                <ul className="w-60 py-5 border-r border-gray-200">
                    <h3 className="pl-8 pr-5 py-2.5 font-medium text-gray-800 text-sm">A ... C</h3>
                    {AtoC.map((nav, i) => {
                        return  <li className="hover:bg-blue-50" key={i}>
                                    <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-3">
                                        <span className="flex items-center">
                                            <span className="menu-text text-xs text-gray-700">{nav.subMenu}</span>
                                        </span>
                                    </Link>
                                </li>
                    })}
                </ul>

                <ul className="w-60 py-5 border-r border-gray-200">
                    <h3 className="pl-8 pr-5 py-2.5 font-medium text-gray-800 text-sm">C ... J</h3>
                    {CtoJ.map((nav, i) => {
                        return  <li className="hover:bg-blue-50" key={i}>
                                    <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-3">
                                        <span className="flex items-center">
                                            <span className="menu-text text-xs text-gray-700">{nav.subMenu}</span>
                                        </span>
                                    </Link>
                                </li>
                    })}
                </ul>

                <ul className="w-60 py-5 border-r border-gray-200">
                    <h3 className="pl-8 pr-5 py-2.5 font-medium text-gray-800 text-sm">L ... P</h3>
                    {LtoP.map((nav, i) => {
                        return  <li className="hover:bg-blue-50" key={i}>
                                    <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-3">
                                        <span className="flex items-center">
                                            <span className="menu-text text-xs text-gray-700">{nav.subMenu}</span>
                                        </span>
                                    </Link>
                                </li>
                    })}
                </ul>

                <ul className="w-60 py-5 border-r border-gray-200">
                    <h3 className="pl-8 pr-5 py-2.5 font-medium text-gray-800 text-sm">P ... T</h3>
                    {PtoT.map((nav, i) => {
                        return  <li className="hover:bg-blue-50" key={i}>
                                    <Link to="#" className="flex items-center justify-between pl-8 pr-5 py-3">
                                        <span className="flex items-center">
                                            <span className="menu-text text-xs text-gray-700">{nav.subMenu}</span>
                                        </span>
                                    </Link>
                                </li>
                    })}

                </ul>
                                        
            </>
        )
    }
}

export default BootstrapDropdown;