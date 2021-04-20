import React, {Component} from 'react'; 
import {FaArrowRight} from 'react-icons/fa';
import '../layoutPage.css';
import './styles/mobweb.css';
import {Link, Router} from 'react-router-dom';

var count = 0;
class nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nav_bar: '',
            open: ''
        }
    }

    openNav = () => {
      if(count%2==0) {
        this.setState({
          nav_bar: <div style={{backgroundColor: 'black', marginTop: '55px'}}>
                      <nav>
                        <ul>
                          <li className='sub-item'><Link to='/services' style={{color: 'white'}}>Services</Link></li>
                          <li className='sub-item'><Link to='/technologies' style={{color: 'white'}}>Technologies</Link></li>
                          <li className='sub-item'>
                            <span onClick={this.props.open} style={{cursor: 'pointer'}}>Project cost calculator</span>
                          </li>
                          <li className='sub-item' style={{paddingBottom: '13.2px'}}>
                            <a href='tel:+91 8770203998' style={{color: 'white'}}>Contact Us</a>
                          </li>
                        </ul>
                      </nav>
                  </div>
        })
      }
      else {
        this.setState({
          nav_bar: ""
        })
      }
      count++;
    }

    render() {
        return <React.Fragment>
                  <div className="header_img change-nav">
                      <Link to='/services'><img className='n-logo' src={require(`../images/icws.png`)} style={{marginLeft: '10px'}}/></Link>
                        <nav className='nav'>
                          <span className='item'><Link to='/services' style={{color: 'black'}}>Services</Link></span>
                          <span className='item'><Link to='/technologies' style={{color: 'black'}}>Technologies</Link></span>
                          <span className='item'>
                            <button onClick={this.props.open} className='change-btn'>Project cost calculator</button>
                          </span>
                          <button className='item contact-item'>
                            <a href='tel:+91 8770203998' className='contact-num'>Contact Us</a>
                          </button>
                          <img className='menu' src={require('../images/nav-menu.svg')} onClick={this.openNav}/>
                        </nav>
                        {this.state.nav_bar}
                  </div>
        </React.Fragment>
    }
}

export default nav;