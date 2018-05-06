import React, {Component} from 'react';
import './top.css';

export default class Counter extends Component{

    render(){
        var className1 = 'icon' + this.props.class1;
        var className2 = 'icon' + this.props.class2;
        return(
            <div className='top'>
                <div className='top-title'><i className = {className1}></i>{this.props.title}<i className= {className2}></i></div>
            </div>
        );
    }
}