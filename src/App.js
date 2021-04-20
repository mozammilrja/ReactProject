import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdCall, MdCallMade } from "react-icons/md";
import LayoutPage from "./LayoutPage";
import FormPage from "./FormPage";
import TechnologyComponent from "./Technologies";
import Solution from './components/Solution';
import Optimization from './components/Optimization';
import Contact from './components/Contact';
import Motto from './components/Motto';
import Footer from './components/Footer';
import Hub from './components/hub';
import Selector from './components/Selector';
import Nav from './components/navigation';
import Choose from './components/Choose'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from './components/context'; 
import ScrollToTop from './components/ScrollTop';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getPage: '',
      projectType: '',
      componentName: '',
      popPage: ''
    }

    this.getPop = React.createRef();
  }

  type = (value) => {
    this.setState({
      projectType: value
    })
  }

  setName = (name) => {
    console.log(name)
    this.setState({
      projectType: name
    })
  }

  openPopPage = () => {
    this.getPop.current.openSelection();
  }

  render() {
    return (
      <div>
        <Router>
          <ScrollToTop>
            
            <Switch>
              <Route path='/' exact>
                <Redirect to='/services'/>
              </Route>

              <Route path='/services' exact>
                <Selector sel={this.type} ref={this.getPop}/>
                <LayoutPage openPop={this.openPopPage}/>
                <GroupComponent/>
                <Footer/>
              </Route>

              <Route path='/technologies' exact>
                <Selector sel={this.type}/>
                <TechnologyComponent/>
                <Footer/>
              </Route>

              <Route path='/calculator' exact>
                <Selector sel={this.type}/>
                <Provider value={this.state.projectType}>
                  <Choose/>
                </Provider>
                <Footer/>
              </Route>
              
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

const GroupComponent = () => {
  return <React.Fragment>
          <Solution/>
          <Hub/>
          <FormPage />
          <Motto/>
          <Optimization/>
          <Contact/>
        </React.Fragment>
}

export default App;