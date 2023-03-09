import React from 'react';
import { Link } from 'react-router-dom';
import './quickActionDropdown.css';

const QuickActionsDropdown = () => {
    const Labels = [
        {labelItem: "Customer", labelTextColor: "text-green-500", labelBgColor: "bg-green-100"},
        {labelItem: "Partner", labelTextColor: "text-red-500", labelBgColor: "bg-red-100"},
        {labelItem: "Suplier", labelTextColor: "text-yellow-500", labelBgColor: "bg-yellow-100"},
        {labelItem: "Member", labelTextColor: "text-blue-500", labelBgColor: "bg-blue-100"},
        {labelItem: "Staff", labelTextColor: "text-gray-700", labelBgColor: "bg-gray-200"}
    ];

    return (
        <div className="quick-action-subheader-dropdown submenu-box-shadow bg-white absolute rounded w-64">
            <ul>
                <li className="py-4 px-5 flex justify-between">
                    <span className="text-gray-800 text-sm font-medium">Choose Label:</span>
                    <i className="large material-icons text-gray-300">report</i>
                </li>
                
                <hr className="mb-3" />
                {Labels.map((item, i) => {
                    return  <li className="hover:bg-gray-100 px-5 py-3">
                                <Link to="#" className="">
                                    <span className={`rounded px-3 py-1 ${item.labelBgColor}`}>
                                        <span className={`text-xs ${item.labelTextColor}`}>{item.labelItem}</span>
                                    </span>
                                </Link>
                            </li>
                })}

                <hr className="mb-2" />
                
                <li className="px-5 py-3">
                    <Link to="#" className="text-xs text-gray-400 hover:text-blue-500 px-3 py-1 rounded hover:bg-gray-200 inline-flex items-center"> 
                    <i className="text-base material-icons">add</i>Add new</Link>
                </li>
            </ul>
        </div>
    )
}

export default QuickActionsDropdown;