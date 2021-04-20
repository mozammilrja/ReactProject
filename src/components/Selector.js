import React, {PureComponent} from 'react';
import portal from 'react-dom';
import {GrClose} from 'react-icons/gr';
import NavBar from './navbar';
import {Link} from 'react-router-dom';
import {Consumer} from './context';

class select extends PureComponent {
    constructor() {
        super();

        this.state = {
            selection: '',
            choose: ''
        }
    }

    closeSelection = () => {
        this.setState({
            selection: ''
        })
    }

    chooseType = (content) => {
        this.closeSelection();
        this.props.sel(content)   
    }

    openSelection = () => {
        this.setState({
            selection: portal.createPortal(
                <div className='sel-options' style={{marginTop: '-15px'}}>
                    <div>
                        <p onClick={this.closeSelection} style={{color: 'white', float: 'right', fontSize: '37px', margin: '13px 13px', cursor: 'pointer', color: 'white'}}><GrClose style={{backgroundColor: 'white'}}/> </p>
                    </div>
                    <div className='calc-options'>
                        <p style={{textAlign: 'center', fontSize: '26px', fontWeight: '500', color: 'white', marginBottom: '38px'}}>I want to build a </p>
                        <div className='mw'>
                        <input type='radio' className='label-radio' />
                        <Link to='/calculator' onClick={() => this.chooseType('mobile')}>
                            <label className='c-box sel-box'>
                                <p className='c-name' style={{fontSize: '19px', marginTop: '45px'}}>Mobile App</p>
                            </label>
                        </Link>
                        <Link to='/calculator' onClick={() => this.chooseType('web')}>
                            <input type='radio' className='label-radio' />
                            <label className='c-box sel-box'>
                                <p className='c-name' style={{fontSize: '19px', marginTop: '45px'}}>Web App</p>
                            </label>
                        </Link>
                        </div>
                    </div>
                </div>,
                document.getElementById('selector')
            )
        })
    }

    render() {
        return <React.Fragment>
            {this.state.selection}
            <NavBar open={this.openSelection}/>
        </React.Fragment>
    }
}

export default select;