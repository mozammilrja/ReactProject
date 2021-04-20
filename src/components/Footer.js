import React, { PureComponent } from 'react';
import './styles/footer.css';
import Privacy from './privacy';
import portal from 'react-dom';

class footer extends PureComponent {

    constructor() {
        super();

        this.state = {
            openPrivacy: ''
        }
    }

    remove = () => {
        this.setState({
            openPrivacy: ''
        })
    }

    sendName = (name) => {
        this.setState({
            openPrivacy: portal.createPortal(
                                <Privacy close={this.remove} format={name}/>,
                            document.getElementById('privacy-pop')
                        )
        })
    }
    render () { 
        return <div className="foot">
                    {this.state.openPrivacy}
                    <div className="footer1">
                        <div className="foot-h">
                            About <span className="mini">Indian customer web services</span>
                        </div>
                        <div className="foot-content point">
                            We're passionate about offering some of the best business growth services for every scale of Companies.
                        </div>
                    </div>
                    <div className="footer">
                        <div className="foot-h">
                            Important Links
                        </div>
                        <i className="fa fa-square-o log" aria-hidden="false"></i>
                        <div className="foot-content point">
                            Read our <span onClick={() => this.sendName('Terms & Conditions')} to='terms-and-conditions' className='f-color'>Terms & Conditions</span>, <span className='f-color' onClick={() => this.sendName('Privacy Policy')}>Privacy Policy Refund Policy Blog </span>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="foot-h">
                            Social media
                        </div>
                        <div className="media">
                            <a className="link" href="#">f</a>
                        </div>
                        <div className="media">
                            <a className="link" href="#">in</a>
                        </div>
                    </div>
            </div>
    }
}

export default React.memo(footer);