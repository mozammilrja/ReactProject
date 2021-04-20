import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom'; 

class scroll extends PureComponent {
    componentDidMount() {
        window.scrollTo(0,0);
        console.log(this.props)
    }

    componentDidUpdate(prevCompProps) {
        if(this.props.location != prevCompProps.location) window.scrollTo(0,0)
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(scroll);