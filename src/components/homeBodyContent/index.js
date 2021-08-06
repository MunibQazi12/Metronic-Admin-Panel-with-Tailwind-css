import React, {Component} from 'react';
import './homeBody.css';

class HomeBody extends Component {
    render () {

        return (
            <>
                <div>
                    <div class="grid grid-flow-row lg:grid-cols-3 grid-rows-3 gap-4">
                        <div style={{backgroundColor: "magenta"}}>1</div>
                        <div style={{backgroundColor: "cyan"}}>2</div>
                        <div style={{backgroundColor: "gray"}}>3</div>
                        <div style={{backgroundColor: "lightblue"}}>4</div>
                        <div style={{backgroundColor: "lightgreen"}}>5</div>
                        <div style={{backgroundColor: "pink"}}>6</div>

                    </div>    
                </div>
            </>
        )
    }
}

export default HomeBody;