import React, {Component} from 'react';
import './headerFixed.css';
import TopLeftHeaderFixed from './topLeftHeaderFixed';
import TopRightHeaderFixed from './topRightHeaderFixed';

class HeaderFixed extends Component {

    render () {
       
        return (
            <>
                
                <header className="header fixed poppins bg-white w-full px-7 h-16 flex justify-between z-10">
                    <TopLeftHeaderFixed />
                    
                    <TopRightHeaderFixed />
                </header>  
            
            </>
        )
    }
}

export default HeaderFixed;