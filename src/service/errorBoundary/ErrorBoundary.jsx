
import {Component} from "react";

import gif from '../../assets/img/errorGif.gif';

import './errorBoundary.sass';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: false
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
        this.setState({error: true})
    }

    
    render(){
        if(!this.state.error) return this.props.children;
        return (<div className="error-boundary">
            <div className="error-boundary__container _container">
                <img src={gif} alt="gif" className="error-boundary__img"/>
                <h2 className="error-boundary__title">There's some error try again later</h2>
            </div>
        </div>

        )
    }
}

export default ErrorBoundary;