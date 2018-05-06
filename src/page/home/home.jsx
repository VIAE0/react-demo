import React,{Component} from 'react';
import './home.css';
import Top from '../public/top/top';
import Tabs from '../public/tabs/tabs';

class Home extends Component{
    render(){
        return(
            <div className='home'>
                <Top title='首页' class1='icon-nav' class2='icon-email'/>
                <Tabs/>
            </div>
        );
    }
}

export default Home;