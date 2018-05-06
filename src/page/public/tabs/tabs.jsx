import React,{Component} from 'react';
import './tabs.css';

export default class Counter extends Component{
    render(){
        return(
            <div className='tab-footer'>
                <ul>
                    <li><i className='icon icon-shouye-1'></i><i>首页</i></li>
                    <li><i className='icon icon-agriculture'></i><i>种草</i></li>
                    <li><i className='icon icon-jiashu'></i></li>
                    <li><i className='icon icon-all'></i><i>分类</i></li>
                    <li><i className='icon icon-person'></i><i>我的</i></li>
                </ul>
            </div>
        );
    }
}