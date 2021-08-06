import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class EventDropdown extends Component {
    render() {
        const Events = [
            {icon: "show_chart", eventTitle: "New report has been received", eventTime: "23 hrs ago", iconColor: "text-green-500"},
            {icon: "send", eventTitle: "Finance report has been generated", eventTime: "25 hrs ago", iconColor: "text-red-500"},
            {icon: "person_pin", eventTitle: "New order has been received", eventTime: "2 hrs ago", iconColor: "text-blue-500"},
            {icon: "location_on", eventTitle: "New customer is registered", eventTime: "3 hrs ago", iconColor: "text-red-500"},
            {icon: "chat", eventTitle: "Application has been approved", eventTime: "3 hrs ago", iconColor: "text-green-500"},
            {icon: "show_chart", eventTitle: "New report has been received", eventTime: "23 hrs ago", iconColor: "text-pink-500"},
            {icon: "send", eventTitle: "Finance report has been generated", eventTime: "21 hrs ago", iconColor: "text-purple-500"},
            {icon: "person_pin", eventTitle: "New order has been received", eventTime: "2 hrs ago", iconColor: "text-green-500"}

        ]
        return (
            <>
                <div className="mt-3">
                    {Events.map((item, i) => {
                        return  <div>
                                    <Link to="#">
                                        <div className="hover:bg-blue-50 hover:text-blue-500 text-gray-800 flex py-3 px-6">
                                                <i className={`material-icons ${item.iconColor}`}>{item.icon}</i>

                                                <div className="flex flex-col ml-2">
                                                    <div className="leading-none text-xs font-medium mb-1 ">{item.eventTitle}</div>
                                                    <div className="leading-none text-xs text-gray-400">{item.eventTime}</div>
                                                </div>
                                        </div>
                                    </Link>
                                </div>
                    })}
                    
                </div>    
                                    
                                    
            </>
        )
    }
}

export default EventDropdown;