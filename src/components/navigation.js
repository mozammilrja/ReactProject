import React, {PureComponent} from 'react';

var count=0;
class nav extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            nav_bar: ""
        }
    }

    openNav = () => {
        if(count%2==0) {
          this.setState({
            nav_bar: <div className='sub-nav'>
                      <nav>
                        <ul>
                          <div className='li-a'><a href='#' onClick={() => this.getPage('service')}>Services</a></div>
                          <div className='li-a'><a href='#' onClick={() => this.getPage('technology')}>Technologies</a></div>
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

    getPage = (pageTitle) => {
        this.props.page(pageTitle)
    }


    render() {
        return <React.Fragment>
            <nav className='navigator'>
                <img src="/icws.jpg" className='nav-logo'/>
                <ul>
                    <li><a href='#' onClick={() => this.getPage('service')}>Services</a></li>
                    <li><a href='#' onClick={() => this.getPage('technology')}>Technologies</a></li>
                    <li>
                        <button className='nav-contact'>Contact Us 
                            <span>
                                <img className='arrow' src={require('../images/arrow-right.png')}/>
                            </span>
                        </button>
                    </li>
                    <li><img className='nav-menu' src={require('../images/nav-menu.svg')} onClick={this.openNav}/></li>
                </ul>
                {this.state.nav_bar}
            </nav>
        </React.Fragment>
    }
}

export default nav;