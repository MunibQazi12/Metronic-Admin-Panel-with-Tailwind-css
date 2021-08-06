import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './quickPanel.css';
import Plurk from '../../../../../assets/images/006-plurk.svg';
import Telegram from '../../../../../assets/images/015-telegram.svg';
import Puzzle from '../../../../../assets/images/003-puzzle.svg';
import Bebo from '../../../../../assets/images/005-bebo.svg';
import Kickstarter from '../../../../../assets/images/014-kickstarter.svg';
import Switch from "react-switch";

class QuickPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTab: 1,
            enableSwitch: true,
            caseTrackingSwitch: true,
            supportPortalSwitch: true,
            generateReportSwitch: true,
            reportExportSwitch: true,
            dataCollectionSwitch: true,
            memberSignupSwitch: true,
            userFeedbackSwitch: true,
            customerPortalSwitch: true
        }
    }

    enableSwitchChangeHandler = () => {
        this.setState({
            enableSwitch: !this.state.enableSwitch
        })
    }

    caseTrackingSwitchChangeHandler = () => {
        this.setState({
            caseTrackingSwitch: !this.state.caseTrackingSwitch
        })
    }

    supportPortalChangeHandler = () => {
        this.setState({
            supportPortalSwitch: !this.state.supportPortalSwitch
        })
    }

    generateReportChangeHandler = () => {
        this.setState({
            generateReportSwitch: !this.state.generateReportSwitch
        })
    }

    reportExportChangeHandler = () => {
        this.setState({
            reportExportSwitch: !this.state.reportExportSwitch
        })
    }

    dataCollectionChangeHandler = () => {
        this.setState({
            dataCollectionSwitch: !this.state.dataCollectionSwitch
        })
    }

    memberSignupSwitchChangeHandler = () => {
        this.setState({
            memberSignupSwitch: !this.state.memberSignupSwitch
        })
    }

    userFeedbackSwitchChangeHandler = () => {
        this.setState({
            userFeedbackSwitch: !this.state.userFeedbackSwitch
        })
    }

    customerPortalSwitchChangeHandler = () => {
        this.setState({
            customerPortalSwitch: !this.state.customerPortalSwitch
        })
    }

    showTab = (tab) => {
        this.setState({
            showTab: tab
        })
    }

    render () {
        console.log('show switch', this.state.switch
        )
        return (
            <>
                <div>
                    <div className="kt-quick-panel">
                        <div className="quick-panel-tab">
                            <ul className="flex px-9 pb-3 border-b-4 justify-between">
                                <li onClick={() => this.showTab(1) }>
                                    <Link to="#" className={`py-3.5 text-gray-500 text-xs hover:text-blue-400 mr-3 font-medium ${this.state.showTab === 1 ? "border-b-4 border-blue-400 text-blue-400" : ""}`}>Audit Logs</Link>
                                </li>
                                <li onClick={() => this.showTab(2) }>
                                    <Link to="#" className={`py-3.5 text-gray-500 text-xs hover:text-blue-400 mr-3 font-medium ${this.state.showTab === 2 ? "border-b-4 border-blue-400 text-blue-400" : ""}`}>Notifications</Link>
                                </li>
                                <li onClick={() => this.showTab(3) }>
                                    <Link to="#" className={`py-3.5 text-gray-500 text-xs hover:text-blue-400 mr-3 font-medium ${this.state.showTab === 3 ? "border-b-4 border-blue-400 text-blue-400" : ""}`}>Settings</Link>
                                </li>
                            </ul>

                            <div className={`${this.state.showTab === 1 ? "show" : "hidden"}`}>
                                <div className="px-9 mt-2 quick-panel-overflow overflow-y-auto fixed h-full">
                                    <div className="system-msg mb-14">
                                        <h5 className="text-gray-700 mb-5 text-base font-medium">System Messages</h5>
                                    
                                        <div className="flex items-center justify-between">
                                            <div className="mr-3">
                                                <span className="bg-gray-100 w-12 h-12 inline-block rounded">
                                                    <img src={Plurk} alt="plurk" className="w-6	h-6 mx-auto mt-3 mb-3" />
                                                </span>
                                            </div>

                                            <div className="flex flex-col mr-2 mb-3">
                                                <Link to="#" className="font-semibold text-gray-800 mb-1 hover:text-blue-500 text-sm">Top Authors</Link>
                                                <span className="text-gray-300 text-xs font-semibold">Most Successful Fellas</span>
                                            </div>

                                            <span className="bg-gray-100 rounded py-1 px-2 text-gray-600 font-semibold text-xs">+82$</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="mr-3">
                                                <span className="bg-gray-100 w-12 h-12 inline-block rounded">
                                                    <img src={Telegram} alt="Telegram" className="w-6 h-6 mx-auto mt-3 mb-3" />
                                                </span>
                                            </div>

                                            <div className="flex flex-col mr-2 mb-3">
                                                <Link to="#" className="font-semibold text-gray-800 mb-1 hover:text-blue-500 text-sm">Popular Authors</Link>
                                                <span className="text-gray-300 text-xs font-semibold">Most Successful Fellas</span>
                                            </div>

                                            <span className="bg-gray-100 rounded py-1 px-2 text-gray-600 font-semibold text-xs">+280$</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="mr-3">
                                                <span className="bg-gray-100 w-12 h-12 inline-block rounded">
                                                    <img src={Puzzle} alt="Puzzle" className="w-6 h-6 mx-auto mt-3 mb-3" />
                                                </span>
                                            </div>

                                            <div className="flex flex-col mr-2 mb-3">
                                                <Link to="#" className="font-semibold text-gray-800 mb-1 hover:text-blue-500 text-sm">New Users</Link>
                                                <span className="text-gray-300 text-xs font-semibold">Most Successful Fellas</span>
                                            </div>

                                            <span className="bg-gray-100 rounded py-1 px-2 text-gray-600 font-semibold text-xs">+4500$</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="mr-3">
                                                <span className="bg-gray-100 w-12 h-12 inline-block rounded">
                                                    <img src={Bebo} alt="Bebo" className="w-6	h-6 mx-auto mt-3 mb-3" />
                                                </span>
                                            </div>

                                            <div className="flex flex-col mr-2 mb-3">
                                                <Link to="#" className="font-semibold text-gray-800 mb-1 hover:text-blue-500 text-sm">Active Customers</Link>
                                                <span className="text-gray-300 text-xs font-semibold">Most Successful Fellas</span>
                                            </div>

                                            <span className="bg-gray-100 rounded py-1 px-2 text-gray-600 font-semibold text-xs">+82$</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="mr-3">
                                                <span className="bg-gray-100 w-12 h-12 inline-block rounded">
                                                    <img src={Kickstarter} alt="Kickstarter" className="w-6	h-6 mx-auto mt-3 mb-3" />
                                                </span>
                                            </div>

                                            <div className="flex flex-col mr-2 mb-3">
                                                <Link to="#" className="font-semibold text-gray-800 mb-1 hover:text-blue-500 text-sm">Bestseller Theme</Link>
                                                <span className="text-gray-300 text-xs font-semibold">Most Successful Fellas</span>
                                            </div>

                                            <span className="bg-gray-100 rounded py-1 px-2 text-gray-600 font-semibold text-xs">+4500$</span>
                                        </div>
                                    </div>
                                
                                    <div className="system-msg mb-28">
                                        <h5 className="text-gray-700 mb-5 text-base font-medium">Notifications</h5>
                                    
                                        <div className="flex items-center justify-between mb-5 px-4 pt-4 pb-2 bg-yellow-100 rounded-md">
                                            <div className="mr-2">
                                                <span class="svg-icon svg-icon-warning mr-5">
                                                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-icon svg-icon-lg">
                                                        <g id="Stockholm-icons-/-Home-/-Library" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                            <path className="fill-current" d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" id="Combined-Shape" fill="#ffa800"></path>
                                                            <rect className="fill-current" id="Rectangle-Copy-2" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) " x="16.3255682" y="2.94551858" width="3" height="18" rx="1"></rect>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>

                                            <div className="flex flex-col mr-1 mb-3">
                                                <Link to="#" className="font-normal inline-block text-gray-700 mb-1 hover:text-blue-500 text-sm w-full">Another purpose persuagde</Link>
                                                <span className="text-gray-300 text-xs font-normal">Due in 2 Days</span>
                                            </div>

                                            <span className="text-gray-600 font-semibold text-xs text-yellow-500">+28%</span>
                                        </div>

                                        <div className="flex items-center justify-between mb-5 px-4 pt-4 pb-2 bg-green-100 rounded-md">
                                            <div className="mr-2">
                                                <span class="svg-icon svg-icon-warning mr-5">
                                                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-icon svg-icon-lg">
                                                        <g id="Stockholm-icons-/-Home-/-Library" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                            <path className="fill-current" d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" id="Combined-Shape" fill="#ffa800"></path>
                                                            <rect className="fill-current" id="Rectangle-Copy-2" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) " x="16.3255682" y="2.94551858" width="3" height="18" rx="1"></rect>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>

                                            <div className="flex flex-col mr-1">
                                                <Link to="#" className="font-normal inline-block text-gray-700 mb-1 hover:text-blue-500 text-sm w-full">Another purpose persuagde</Link>
                                                <span className="text-gray-300 text-xs font-normal">Due in 2 Days</span>
                                            </div>

                                            <span className="text-gray-600 font-semibold text-xs text-yellow-500">+28%</span>
                                        </div>

                                        <div className="flex items-center justify-between mb-5 px-4 pt-4 pb-2 bg-red-100 rounded-md">
                                            <div className="mr-2">
                                                <span class="svg-icon svg-icon-warning mr-5">
                                                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-icon svg-icon-lg">
                                                        <g id="Stockholm-icons-/-Home-/-Library" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                            <path className="fill-current" d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" id="Combined-Shape" fill="#ffa800"></path>
                                                            <rect className="fill-current" id="Rectangle-Copy-2" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) " x="16.3255682" y="2.94551858" width="3" height="18" rx="1"></rect>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>

                                            <div className="flex flex-col mr-1">
                                                <Link to="#" className="font-normal inline-block text-gray-700 mb-1 hover:text-blue-500 text-sm w-full">Another purpose persuagde</Link>
                                                <span className="text-gray-300 text-xs font-normal">Due in 2 Days</span>
                                            </div>

                                            <span className="text-gray-600 font-semibold text-xs text-yellow-500">+28%</span>
                                        </div>

                                        <div className="flex items-center justify-between mb-5 px-4 pt-4  pb-2 bg-purple-100 rounded-md">
                                            <div className="mr-2">
                                                <span class="svg-icon svg-icon-warning mr-5">
                                                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-icon svg-icon-lg">
                                                        <g id="Stockholm-icons-/-Home-/-Library" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                            <path className="fill-current" d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" id="Combined-Shape" fill="#ffa800"></path>
                                                            <rect className="fill-current" id="Rectangle-Copy-2" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) " x="16.3255682" y="2.94551858" width="3" height="18" rx="1"></rect>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>

                                            <div className="flex flex-col mr-1">
                                                <Link to="#" className="font-normal inline-block text-gray-700 mb-1 hover:text-blue-500 text-sm w-full">Another purpose persuagde</Link>
                                                <span className="text-gray-300 text-xs font-normal">Due in 2 Days</span>
                                            </div>

                                            <span className="text-gray-600 font-semibold text-xs text-yellow-500">+28%</span>
                                        </div>

                                     
                                    </div>
                                
                                
                                </div>
                            </div>

                            <div className={`${this.state.showTab === 2 ? "show" : "hidden"}`}>
                                <div className="px-9 mt-2 quick-panel-overflow overflow-y-auto fixed h-full">
                                    <div className="mb-15">
                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-green-400">add_alert</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">5 new user generated report</div>
                                                    <div className="text-xs	text-gray-400">Reports based on sales</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-red-400">iso</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">2 new items submited</div>
                                                    <div className="text-xs	text-gray-400">by Grog John</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-blue-400">picture_as_pdf</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">79 PSD files generated</div>
                                                    <div className="text-xs	text-gray-400">Reports based on sales</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-yellow-400">shopping_basket</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">$2900 worth producucts sold</div>
                                                    <div className="text-xs	text-gray-400">Total 234 items</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-green-400">send</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">4.5h-avarage response time</div>
                                                    <div className="text-xs	text-gray-400">Fostest is Barry</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-red-400">verified_user</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">3 Defence alerts</div>
                                                    <div className="text-xs	text-gray-400">40% less alerts thar last week</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-green-400">assignment_turned_in</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">Average 4 blog posts per author</div>
                                                    <div className="text-xs	text-gray-400">Most posted 12 time</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-green-400">assignment</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">16 authors joined last week</div>
                                                    <div className="text-xs	text-gray-400">9 photodrapehrs, 7 designer</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-green-400">control_point</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">2 new items have been submited</div>
                                                    <div className="text-xs	text-gray-400">by Grog John</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-purple-400">file_download</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">2.8 GB-total downloads size</div>
                                                    <div className="text-xs	text-gray-400">Mostly PSD end AL concepts</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-red-400">attach_money</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">$2900 worth producucts sold</div>
                                                    <div className="text-xs	text-gray-400">Total 234 items</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-blue-400">person</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">7 new user generated report</div>
                                                    <div className="text-xs	text-gray-400">Reports based on sales</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="nav-item">
                                            <div className="py-3 flex items-center">
                                                <span className="w-12 h-12 inline-block bg-gray-100 rounded text-center mr-3">
                                                    <i className="material-icons pt-2 text-green-400">message</i>
                                                </span>
                                                <div>
                                                    <div className="nav-text text-sm font-medium text-gray-700 hover:text-blue-400">4.5h-avarage response time</div>
                                                    <div className="text-xs	text-gray-400">Fostest is Barry</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${this.state.showTab === 3 ? "show" : "hidden"}`}>
                                <div className="px-9 mt-2 quick-panel-overflow overflow-y-auto fixed h-full w-96">
                                    <div>
                                        <h4 className="text-gray-700 mb-5 text-base font-medium">Customer Care</h4>

                                        <div className="flex justify-between items-ceter">
                                            <div className="text-gray-800 text-xs">Enable Notifications</div>
                                            <label htmlFor="material-switch">
                                                <Switch
                                                    checked={this.state.enableSwitch}
                                                    onChange={this.enableSwitchChangeHandler}
                                                    backgroundColor="#1bc5bd"
                                                    onColor="#1bc5bd"
                                                    onHandleColor="#ffffff"
                                                    handleDiameter={22}
                                                    uncheckedIcon={false}
                                                    checkedIcon={false}
                                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                    height={30}
                                                    width={50}
                                                    className="react-switch bg-green-400"
                                                    id="material-switch"
                                                />
                                            </label>
                                        </div>

                                        <div className="flex justify-between items-ceter">
                                            <div className="text-gray-800 text-xs">Enable Case Tracking</div>
                                            <label htmlFor="material-switch">
                                                <Switch
                                                    checked={this.state.caseTrackingSwitch}
                                                    onChange={this.caseTrackingSwitchChangeHandler}
                                                    backgroundColor="#1bc5bd"
                                                    onColor="#1bc5bd"
                                                    onHandleColor="#ffffff"
                                                    handleDiameter={22}
                                                    uncheckedIcon={false}
                                                    checkedIcon={false}
                                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                    height={30}
                                                    width={50}
                                                    className="react-switch bg-green-400"
                                                    id="material-switch"
                                                />
                                            </label>
                                        </div>

                                        <div className="flex justify-between items-ceter">
                                            <div className="text-gray-800 text-xs">Support Portal:</div>
                                            <label htmlFor="material-switch">
                                                <Switch
                                                    checked={this.state.supportPortalSwitch}
                                                    onChange={this.supportPortalChangeHandler}
                                                    backgroundColor="#1bc5bd"
                                                    onColor="#1bc5bd"
                                                    onHandleColor="#ffffff"
                                                    handleDiameter={22}
                                                    uncheckedIcon={false}
                                                    checkedIcon={false}
                                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                    height={30}
                                                    width={50}
                                                    className="react-switch bg-green-400"
                                                    id="material-switch"
                                                />
                                            </label>
                                        </div>

                                        <hr className="my-6" />
                                    </div>

                                    <div>
                                        <h4 className="text-gray-700 mb-5 text-base font-medium">Reports</h4>

                                        <div className="flex justify-between items-ceter">
                                            <div className="text-gray-800 text-xs">Generate Reports:</div>
                                            <label htmlFor="material-switch">
                                                <Switch
                                                    checked={this.state.generateReportSwitch}
                                                    onChange={this.generateReportChangeHandler}
                                                    backgroundColor="#f64e60"
                                                    onColor="#f64e60"
                                                    onHandleColor="#ffffff"
                                                    handleDiameter={22}
                                                    uncheckedIcon={false}
                                                    checkedIcon={false}
                                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                    height={30}
                                                    width={50}
                                                    className="react-switch bg-green-400"
                                                    id="material-switch"
                                                />
                                            </label>
                                        </div>

                                        <div className="flex justify-between items-ceter">
                                            <div className="text-gray-800 text-xs">Enable Report Export:</div>
                                            <label htmlFor="material-switch">
                                                <Switch
                                                    checked={this.state.reportExportSwitch}
                                                    onChange={this.reportExportChangeHandler}
                                                    backgroundColor="#f64e60"
                                                    onColor="#f64e60"
                                                    onHandleColor="#ffffff"
                                                    handleDiameter={22}
                                                    uncheckedIcon={false}
                                                    checkedIcon={false}
                                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                    height={30}
                                                    width={50}
                                                    className="react-switch bg-green-400"
                                                    id="material-switch"
                                                />
                                            </label>
                                        </div>

                                        <div className="flex justify-between items-ceter">
                                            <div className="text-gray-800 text-xs">Allow Data Collection:</div>
                                            <label htmlFor="material-switch">
                                                <Switch
                                                    checked={this.state.dataCollectionSwitch}
                                                    onChange={this.dataCollectionChangeHandler}
                                                    backgroundColor="#f64e60"
                                                    onColor="#f64e60"
                                                    onHandleColor="#ffffff"
                                                    handleDiameter={22}
                                                    uncheckedIcon={false}
                                                    checkedIcon={false}
                                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                    height={30}
                                                    width={50}
                                                    className="react-switch bg-green-400"
                                                    id="material-switch"
                                                />
                                            </label>
                                        </div>

                                        <hr className="my-6" />
                                    </div>
                                
                                    <div>
                                        <h4 className="text-gray-700 mb-5 text-base font-medium">Members</h4>

                                        <div className="flex justify-between items-ceter">
                                            <div className="text-gray-800 text-xs">Enable Member singup:</div>
                                            <label htmlFor="material-switch">
                                                <Switch
                                                    checked={this.state.memberSignupSwitch}
                                                    onChange={this.memberSignupSwitchChangeHandler}
                                                    backgroundColor="#3699ff"
                                                    onColor="#3699ff"
                                                    onHandleColor="#ffffff"
                                                    handleDiameter={22}
                                                    uncheckedIcon={false}
                                                    checkedIcon={false}
                                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                    height={30}
                                                    width={50}
                                                    className="react-switch bg-green-400"
                                                    id="material-switch"
                                                />
                                            </label>
                                        </div>

                                        <div className="flex justify-between items-ceter">
                                            <div className="text-gray-800 text-xs">Allow User Feedbacks:</div>
                                            <label htmlFor="material-switch">
                                                <Switch
                                                    checked={this.state.userFeedbackSwitch}
                                                    onChange={this.userFeedbackSwitchChangeHandler}
                                                    backgroundColor="#3699ff"
                                                    onColor="#3699ff"
                                                    onHandleColor="#ffffff"
                                                    handleDiameter={22}
                                                    uncheckedIcon={false}
                                                    checkedIcon={false}
                                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                    height={30}
                                                    width={50}
                                                    className="react-switch bg-green-400"
                                                    id="material-switch"
                                                />
                                            </label>
                                        </div>

                                        <div className="flex justify-between items-ceter">
                                            <div className="text-gray-800 text-xs">Enable Customer Portal:</div>
                                            <label htmlFor="material-switch">
                                                <Switch
                                                    checked={this.state.customerPortalSwitch}
                                                    onChange={this.customerPortalSwitchChangeHandler}
                                                    backgroundColor="#3699ff"
                                                    onColor="#3699ff"
                                                    onHandleColor="#ffffff"
                                                    handleDiameter={22}
                                                    uncheckedIcon={false}
                                                    checkedIcon={false}
                                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                    height={30}
                                                    width={50}
                                                    className="react-switch bg-green-400"
                                                    id="material-switch"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>
            </>
        )
    }
}

export default QuickPanel