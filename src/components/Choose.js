import React from 'react';
import Calculator from './calculator';
import Calc from './Calc.js'
import {Consumer} from './context'
import {data, shotHand, bigForm, data1, shotHand1, bigForm1, formContent} from './detailsData';

const choose = ({name}) => {
    return <React.Fragment>
            <Consumer>
            {
                project => {
                    return (project=='mobile')?  <Calculator data={data} shot={shotHand} form={bigForm} formText={formContent} projectType={project}/>

                                                : <Calc data={data1} shot={shotHand1} form={bigForm1} formText={formContent} projectType={project}/>
                }
            }
            </Consumer>
        </React.Fragment>
}

export default React.memo(choose);