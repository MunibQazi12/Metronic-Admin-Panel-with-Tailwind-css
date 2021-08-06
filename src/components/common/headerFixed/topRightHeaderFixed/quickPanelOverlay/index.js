import React, {Component} from 'react';

class QuickPanelOverlay extends Component {
    render() {
        return (
            <>  
                <div className="fixed top-0 left-0 right-0 bottom-0 z-0 bg-gray-50 w-100 h-100 kt-quick-panel-overlay"></div>
            </>
        )
    }
}

export default QuickPanelOverlay;