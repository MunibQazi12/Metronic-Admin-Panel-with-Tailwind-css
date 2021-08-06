import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './topSubHeaderFixed.css';
import ReactTooltip from 'react-tooltip';
import QuickActionDropdown from "./quickActionsSubHeaderDropdown";

class SubHeaderFixed extends Component {
    constructor(props) {
        super(props);
        this.refDropdown = React.createRef();
        this.state = {
            quickActions: false
        }
    }

    quickActionHandler = () => {
        this.setState({
            quickActions: !this.state.quickActions
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
                quickActions: false
            });
        }
    };
    
    render () {
        return (
            <>
                <div className="sub-header fixed top-14 lg:top-16 lg:py-2 w-full bg-white border-t border-gray-300 poppins md:left-0">
                    <div className="sm:flex justify-between px-4 lg:px-7">
                        <div className="flex items-center mr-1">
                            <div className="flex items-center sm:mr-5 mr-2">
                                <h5 className="text-gray-900 font-medium my-2 sm:mr-5 text-sm">Dashboard</h5>
                            </div>

                            <ul className="breadcrumb flex items-center">
                                <li className="breadcrumb-item flex items-center">
                                    <Link to="#">
                                        <i class="material-icons text-gray-400 text-xl">home</i>
                                    </Link>
                                    <span className="mx-2 text-gray-800 text-xs mt-1">&bull;</span>
                                </li>

                                <li className="breadcrumb flex items-center">
                                    <Link to="#">
                                        <span className="text-xs font-medium text-gray-400">Dashboard</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-end">
                            <Link to="#" className="bg-blue-50 hover:bg-gray-200 text-xs py-1.5 lg:py-2 px-3 rounded">
                                <span className="text-gray-400 font-medium mr-2">Today</span>
                                <span className="text-blue-500 font-medium">Aug 16</span>
                            </Link>
                            
                            <ReactTooltip id="quick-actions" effect='solid' place='left' textColor="gray" backgroundColor='white' className="submenu-box-shadow opacity-100 transition-none" style={{opacity: 1, transition: "none !important"}} />
                            
                            <div ref={this.refDropdown} className="quick-actions ml-1">
                                <Link onClick={this.quickActionHandler} to="#" data-tip="Quick Actions" data-for="quick-actions" className="hover:bg-gray-100 inline-block text-center w-8 h-8 relative top-1 rounded">
                                    <span class="svg-icon svg-icon-success svg-icon-lg">
                                        <span class="svg-icon-success svg-icon-2x">
                                            <svg className="mx-auto mt-1" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g id="Stockholm-icons-/-Files-/-File-plus" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                                    <path d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" id="Combined-Shape" fill="#1bc5bd" fill-rule="nonzero" opacity="0.3"></path>
                                                    <path d="M11,14 L9,14 C8.44771525,14 8,13.5522847 8,13 C8,12.4477153 8.44771525,12 9,12 L11,12 L11,10 C11,9.44771525 11.4477153,9 12,9 C12.5522847,9 13,9.44771525 13,10 L13,12 L15,12 C15.5522847,12 16,12.4477153 16,13 C16,13.5522847 15.5522847,14 15,14 L13,14 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,14 Z" id="Combined-Shape" fill="#1bc5bd"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                </Link>

                                <div className={`${this.state.quickActions ? "show" : "hidden"}`}>
                                    <QuickActionDropdown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </>
        )
    }
}

export default SubHeaderFixed;
