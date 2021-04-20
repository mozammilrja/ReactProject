import React from 'react';
import Details from './Details';
import './styles/solution.css';
 
const solution = () => {
    return <React.Fragment>
                <div className='s-sol width'>
                    <div className="title1 m-title sol-title">Solutions we deliver</div>
                    <div className="list">
                        <div className="sol-left">
                            <Details start={0} end={3}/>
                        </div>
                        <div className="sol-right">
                            <Details start={3} end={6}/>
                        </div>
                        <div className="no-rest"><img src={require("../images/no_rest.svg")}/></div>
                    </div>
                </div>
            </React.Fragment>
}

export default React.memo(solution);