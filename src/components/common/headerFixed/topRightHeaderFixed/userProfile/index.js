import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    return (
        <>
            <div className="rounded-b-md">
                <div className="rounded-t-md bg-img-notification-bg p-8 flex justify-between items-center">
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center">
                            <div className="bg-gray-100 w-12 h-12 rounded text-center text-base font-semibold text-green-500 mr-3 leading-10 pt-1">S</div>
                            <h5 className="text-white text-base m-0">Sean Stark</h5>
                        </div>
                        <div>
                            <span className="bg-green-400 rounded-lg text-white text-sm px-2 py-1">3 messages</span>
                        </div>
                    </div>    
                </div>
                <div className="pt-5">
                    <div className="px-8 mb-1">
                        <div className="py-2 flex">
                            <div className="mr-3">
                                <i className="material-icons text-green-400">person</i>
                            </div>

                            <div className="flex flex-col">
                                <Link to="#" className="text-gray-700 text-xs hover:text-blue-400 font-medium">My Profile</Link>
                                <div className="text-gray-400 text-xs">Account settings and more <span className="ml-2 bg-red-100 text-red-500 px-2 py-1 rounded">update</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="px-8 mb-1">
                        <div className="py-2 flex">
                            <div className="mr-3">
                                <i className="material-icons text-yellow-400">email</i>
                            </div>

                            <div className="flex flex-col">
                                <Link to="#" className="text-gray-700 text-xs hover:text-blue-400 font-medium">My Messages</Link>
                                <div className="text-gray-400 text-xs">Inbox and tasks</div>
                            </div>
                        </div>
                    </div>

                    <div className="px-8 mb-1">
                        <div className="py-2 flex">
                            <div className="mr-3">
                                <i className="material-icons text-green-400">trending_up</i>
                            </div>

                            <div className="flex flex-col">
                                <Link to="#" className="text-gray-700 text-xs hover:text-blue-400 font-medium">My Activities</Link>
                                <div className="text-gray-400 text-xs">Logs and notifications </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-8 mb-1">
                        <div className="py-2 flex">
                            <div className="mr-3">
                                <i className="material-icons text-blue-400">hourglass_empty</i>
                            </div>

                            <div className="flex flex-col">
                                <Link to="#" className="text-gray-700 text-xs hover:text-blue-400 font-medium">My Tasks</Link>
                                <div className="text-gray-400 text-xs">Latest tasks and projects </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="flex justify-between px-8 py-4 rounded-b-md">
                    <button type="button" className="bg-blue-100 text-blue-400 rounded px-4 py-2 text-sm hover:bg-blue-500 hover:text-white font-semibold">Sign Out</button>
                    <Link to="#" className="text-sm text-gray-400 hover:bg-blue-100 hover:text-blue-400 px-2 py-2 rounded">Upgrade Plan</Link>
                </div>
            </div>    
        </>
    )
}

export default UserProfile;