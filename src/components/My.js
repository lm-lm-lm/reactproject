import React from 'react';
import img from '../img/m-touxiang.jpg'
import {NavLink,BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import '../style/my.css';
import '../font/iconfont.css';
import img1 from '../img/tubiao.jpg';
class My extends React.Component{
    render(){
        return(
            <div className='my-1'>
                
                <div className='my-2'>
                    <div className='my-5'>
                        <span className='iconfont icon-xinxi'></span>
                        <span className='iconfont icon-richscan_icon '></span>
                        <span className='iconfont icon-shezhi '></span>
                    </div>
                    <div className='my-3'>
                        <NavLink to='/grzl'><img src={img}/></NavLink>
                        <div className='my-4'>
                            <p>用户名</p>
                        <NavLink to='/huiyuan'><span>普通会员&gt;</span></NavLink>
                        </div>
                    </div>
                    
                </div>
                <div className = 'my-6'>
                    <div>
                        <span>0</span>
                        <p>我的券</p>
                    </div>
                    <div>
                        <span>0</span>
                        <p>我的积分</p>
                    </div>
                    <div>
                        <span>0.00元</span>
                        <p>余额</p>
                    </div>
                </div>
                <div className='my-7'>
                    <div className='my-8'><h3>我的订单</h3><span>查看全部&gt;</span></div>
                    <div className='my-9'>
                        <div>
                            <span className='iconfont icon-daifukuan '></span>
                            <p>待付款</p>
                        </div>
                        <div>
                            <span className='iconfont icon-daifahuo '></span>
                            <p>待发货</p>
                        </div>
                        <div>
                            <span className='iconfont icon-yifahuo '></span>
                            <p>已发货</p>
                        </div>
                        <div>
                            <span className='iconfont icon-daipingjia01 '></span>
                            <p>待评价</p>
                        </div>
                        <div>
                            <span className='iconfont icon-tuikuan '></span>
                            <p>退款/退货</p>
                        </div>
                    </div>
                </div>
                <div className='my-10'>
                    <div className='my-11'>
                        <img src={img1}/>
                        <p>我的服务</p>
                    </div>
                    <div className='my-11'>
                        <img src={img1}/>
                        <p>我的拼团</p>
                    </div>
                    <div className='my-11'>
                        <img src={img1}/>
                        <p>我的收藏</p>
                    </div>
                    <div className='my-11'>
                        <img src={img1}/>
                        <p>我的砍价</p>
                    </div>
                    <div className='my-11'>
                        <img src={img1}/>
                        <p>我的等级</p>
                    </div>
                    <div className='my-11'>
                        <img src={img1}/>
                        <p>售后服务</p>
                    </div>
                </div>
                <div className='my-12'>
                    <span className='iconfont icon-fenxiang'></span>
                    <h3>分享给好友</h3>
                    <p>邀请新用户即可获得15积分&gt;</p>
                </div>
            </div>
        )
    }
}

export default My;