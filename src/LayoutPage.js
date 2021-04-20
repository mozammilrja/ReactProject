import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdCall, MdCallMade } from "react-icons/md";
import './layoutPage.css';
import {Link} from 'react-router-dom';

var count = 0;
class LayoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
        <div className="banner width" style={{marginTop: '0px'}}>
          <div className="layout-left">
            <div className="main_part m-title">
              <span>We Build Your </span>
              <br/>
              <span>Dreams with </span>
              <br />
              <span>our Software Solutions</span>
            </div>

            <div className="main_part_second">
              <b><span>We all have a dream in your life and we make your </span>
              <br />
              <span>dream come true.</span>
              <br/></b>
              <div className='l-request'>
                <button className='btn black' onClick={this.props.openPop}>
                  Request An Estimation
                  <img src={require('./images/upArrow.svg')} className='rep'/>
                </button>
                <button className='btn orange'><a href='tel:+91 8770203998'>Schedule a Call</a><img src={require('./images/call.svg')} className='rep'/></button>
              </div>
            </div>
          </div>
          <div className="layout-right">
            <img src='/office1.png' className='meeting'/>
          </div>
        </div>
    );
  }
}

export default LayoutPage;
