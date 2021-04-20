import React, { Component } from "react";
import "./FormPage.css";
import input from "./FormPageConfig";
import heading from "./FormPageConfig1";
import { BiCheck } from "react-icons/bi";
import backendConnect from 'axios';
import {Link} from 'react-router-dom';
import portal from 'react-dom';
import Privacy from './components/privacy';

class FormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accept: false,
      info: '',
      openPrivacy: ''
    }
  }

  setValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  postForm = (event) => {
    event.preventDefault();
    const {accept, name, email, phone, interest} = this.state
    if(accept) {
        this.setState({
            info: ''
        })
        backendConnect.post("http://localhost:4000/form", {
            name: name,
            email: email,
            phone: phone,
            interest: interest
        })
        .then(res => res.data)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    else {
        this.setState({
            info: 'Check the above box'
        })
    } 

  }

  
  verify = (event) => {
    this.setState({
        accept: event.target.checked
    })
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

  render() {
    return <React.Fragment>
            {this.state.openPrivacy}
            <div className="width">
              <div className="Main">
                <div className="left m-title form-left">
                  <div className="Main-left-bold">
                    <span className='m-title'>Fill the following form</span>
                    <br />
                    <span className='m-title'>To Request a Meeting</span>
                    <br />
                    <div className="Main-left-running">
                      <span>
                        ICWS offers one of the Business Growth and Development
                      </span>
                      <br />
                      <span>
                        automation in the market with recurring payment.Discover what
                      </span>
                      <br />
                    <span>it can do for your Business Organization.</span>
                  </div> 
                  <div className="Main-left-heading">
                  {heading.map((head) => {
                    return <React.Fragment>
                        <div className='bi-check'>
                        <BiCheck className='form-logo'/>
                        </div>
                        <div className="Main-left-heading-elements">
                          <span className='h-e'>
                            <b>{head.bold}</b>
                            {head.normal}
                          </span>
                        </div>
                      </React.Fragment>
                  })}
                </div>
              </div>
          </div>
          <div className="right form-right">
              <form onSubmit={this.details} className="c-center">
                  <input name="name" type="text" placeholder="Name" className="contact-input" onChange={this.setValue}/>
                  <input name="email" type="email" placeholder="Email" className="contact-input" onChange={this.setValue} required/>
                  <input name="phone" type="phone" placeholder="Phone" className="contact-input" onChange={this.setValue} required/>
                  <select name="interest" type="interest" className="contact-input selector" onChange={this.setValue} required>
                    <option>Interested in...</option>
                    <option>Mobile Development</option>
                    <option>Web Development</option>
                    <option>SEO</option>
                  </select>
                  <p onClick={this.allow} className="check-left"><input type="checkbox" onClick={this.verify}/> 
                    I agree with Indain customer web services stated <span  onClick={() => this.sendName('Privacy Policy')} className="links">Privacy Policy</span> and <span onClick={() => this.sendName('Terms & Conditions')} className="links">Terms Conditions</span>
                    <div style={{color: 'orange'}}>{this.state.info}</div>
                  </p>
                  <button className="contact-input c-button" onClick={this.postForm}>REQUEST</button>
              </form>
          </div>
        </div>
      </div>
      </React.Fragment>
  }
}

export default FormPage;