import React from 'react';
import '../style/faxian.css';
import img1 from '../img/flogo1.gif'
import img2 from '../img/flogo2.gif'
import img3 from '../img/flogo3.gif'
import img4 from '../img/flogo6.gif'
import {NavLink,BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'


class Faxian extends React.Component{
    render(){
        return(
            <div className="faxian">
                <header>发现</header>
                <div className="find1">
                    发现好物
                </div>
                <div className="fpic1">
                    <img src={img1}/>
                </div>
                <div className="content">
                    <dl>
                        <dt>
                            <p><img src={img4}/><span>小海豚</span></p>
                            <p>在日本每分钟卖出30万瓶的化妆水，真的这么厉害吗</p>
                            <p>毛孔粗大真的没救了吗？当然不是呀，还有它？</p>
                        </dt>
                        <dd><img src={img2}/></dd>
                    </dl>
                    <dl>
                        <dt>
                            <p><img src={img4}/><span>小海豚</span></p>
                            <p>在日本每分钟卖出30万瓶的化妆水，真的这么厉害吗</p>
                            <p>毛孔粗大真的没救了吗？当然不是呀，还有它？</p>
                        </dt>
                        <dd><img src={img2}/></dd>
                    </dl>
                    <dl>
                        <dt>
                            <p><img src={img4}/><span>小海豚</span></p>
                            <p>在日本每分钟卖出30万瓶的化妆水，真的这么厉害吗</p>
                            <p>毛孔粗大真的没救了吗？当然不是呀，还有它？</p>
                        </dt>
                        <dd><img src={img2}/></dd>
                    </dl>
                    <dl>
                        <dt>
                            <p><img src={img4}/><span>小海豚</span></p>
                            <p>在日本每分钟卖出30万瓶的化妆水，真的这么厉害吗</p>
                            <p>毛孔粗大真的没救了吗？当然不是呀，还有它？</p>
                        </dt>
                        <dd><img src={img2}/></dd>
                    </dl>
                </div>
            </div>
        )
    }
}

export default Faxian;