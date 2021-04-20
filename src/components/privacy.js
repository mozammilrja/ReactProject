import React, {PureComponent} from 'react';
import './styles/privacy.css';
import {privacy} from './detailsData';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import {MdLocationOn} from 'react-icons/md';
import {IoMdCall} from 'react-icons/io';
import {HiMail} from 'react-icons/hi';

class priv extends PureComponent {

    render() {
        console.log(this.props.name)
        var format = this.props.format;
        return <React.Fragment>
                <div className='privacy-pop'>
                    <div className='nav-adjust'>
                        <nav className='p-nav'>
                            <Link to='/services' onClick={this.props.close}><img className='n-logo' src={require(`../images/icws.png`)} style={{marginTop: '10px'}}/></Link>
                            <ul className='p-ul'>
                                <li className='p-li'><span onClick={this.props.close} style={{color: 'black'}}>Back</span></li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className='p-main'>
                        <div className='p-body'>
                            <h1 className='p-heading'>{format}</h1>
                        </div>  
                    </div>
                    <div className='p-points'>
                        {
                            Object.keys(privacy).map((heading, index) => {
                                if(!(format === 'Privacy Policy' && (index == 3 || index == 10))) {
                                    return <React.Fragment>
                                        <h1 className='p-title'>{heading}</h1>
                                        {
                                            privacy[heading].map((values, subIndex) => {
                                                if(index === 4 && subIndex==5) {
                                                    return <p className='p-value'>If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to <a href='mailto:icwebservice239@gmail.com' style={{color: 'rgb(61, 61, 61)'}}>icwebservice239@gmail.com</a>. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.</p>
                                                }

                                                else if(values.length) {
                                                    return <p className='p-value'>{values}</p>
                                                }

                                                else {
                                                    var subTitle = Object.keys(values);
                                                    return <React.Fragment>
                                                        <p className='p-value'>{subTitle}</p>
                                                        <ol>
                                                            {
                                                                values[subTitle].map(subValues => {
                                                                    return <p className='p-value'>
                                                                                <li className='p-list'>{subValues}</li>
                                                                            </p>
                                                                })
                                                            }
                                                        </ol>
                                                    </React.Fragment>
                                                }
                                            })
                                        }
                                    </React.Fragment>
                                }
                            })
                        }
                        <h1 className='p-title' style={{fontSize: '25px'}}>Please Contact Us</h1>
                        <div style={{marginLeft: '-9px'}}>
                            <div className="p-value">
                                <div style={{margin: '6px 0px'}}><MdLocationOn size={18} className="contact-icons"/>Cu-tbi, Block 3A, chandigarh University, Punjab, India</div>
                                <div style={{margin: '6px 0px'}}><MdLocationOn size={18} className="contact-icons"/>Chitora Road Near Morar Cantonment, Gram, Ratwai, Madhya Pradesh, India</div>
                            </div>
                            <div style={{marginTop: '-10px'}}>
                                <div className='ph-mail'>
                                    <a href="tel:+91 8770203998" className="mobile-info"><IoMdCall size={18} className="contact-icons"/>+91 8770203998</a>
                                </div>
                                <div className='ph-mail'>
                                    <a href="mailto:office@icws.in" className="mobile-info"><HiMail size={18} className="contact-icons"/>office@icws.in</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    <Footer/>
                </div>
        </React.Fragment>
    }
}

export default React.memo(priv);