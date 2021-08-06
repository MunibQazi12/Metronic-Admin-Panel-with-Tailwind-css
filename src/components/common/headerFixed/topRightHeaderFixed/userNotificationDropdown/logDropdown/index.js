import React, {Component} from 'react';

class LogDropdown extends Component {
    render() {
        return (
            <>
                <div className="mt-3">
                    <div className="h-20 text-gray text-center pt-10">
                        <div className="text-gray-400 text-sm">All caught up!</div>
                        <div className="text-gray-400 text-sm">No new notifications.</div>
                    </div>
                </div>
            </>
        )
    }
}

export default LogDropdown;