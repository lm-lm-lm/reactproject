import React from 'react';
import '../style/home.css';
import '../font/iconfont.css';
import { Carousel } from 'antd';
import "antd/dist/antd.css";
import img1 from '../img/hlogo2.jpg'
import img2 from '../img/hlogo3.jpg'
import img3 from '../img/hlogo4.jpg'
import img4 from '../img/hlogo1.jpg'
import img5 from '../img/hlogo5.jpg'
import img6 from '../img/hlogo6.gif'
import img7 from '../img/hlogo7.gif'
import img8 from '../img/hlogo8.gif'
import img9 from '../img/hlogo12.gif'
import img10 from '../img/hlogo14.gif'
import img11 from '../img/hlogo9.gif'
import img12 from '../img/hlogo13.gif'
import img13 from '../img/hlogo10.gif'
import img14 from '../img/hlogo11.gif'
import img15 from '../img/hlogo15.gif'
import img16 from '../img/hlogo16.gif'
import {NavLink,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

class Home extends React.Component{
   quan(){
       window.location.href="/quanqiu"
   }
    render(){
        return(
            <div className="home">
                <header>
                    <span className="iconfont icon-41"></span>
                    <span>佰优购</span>
                    <span className="iconfont icon-richscan_icon"></span>
                </header>
                <section>
                    <Carousel autoplay>
                        <div><img src={img1}/></div>
                        <div><img src={img2}/></div>
                        <div><img src={img3}/></div>
                        <div><img src={img2}/></div>
                    </Carousel>
                    <div className="list1">
                        <dl onClick={this.quan.bind(this)}>
                            <dt><img src={img4}/></dt>
                            <dd>全球时尚</dd>
                        </dl>
                        <dl>
                            <dt><img src={img5}/></dt>
                            <dd>美妆护肤</dd>
                        </dl>
                        <dl>
                            <dt><img src={img4}/></dt>
                            <dd>全球时尚</dd>
                        </dl>
                        <dl>
                            <dt><img src={img5}/></dt>
                            <dd>美妆护肤</dd>
                        </dl>
                        
                        <dl>
                            <dt><img src={img4}/></dt>
                            <dd>全球时尚</dd>
                        </dl>
                        <dl>
                            <dt><img src={img5}/></dt>
                            <dd>美妆护肤</dd>
                        </dl>
                        <dl>
                            <dt><img src={img4}/></dt>
                            <dd>全球时尚</dd>
                        </dl>
                        <dl>
                            <dt><img src={img5}/></dt>
                            <dd>美妆护肤</dd>
                        </dl>
                        <dl>
                            <dt><img src={img4}/></dt>
                            <dd>全球时尚</dd>
                        </dl>
                        <dl>
                            <dt><img src={img5}/></dt>
                            <dd>美妆护肤</dd>
                        </dl>
                    </div>
                    <div className="kefu">
                        <span className="iconfont icon-kefu"></span>
                        <p>
                            <em>在线客服</em>
                            <em>10.53公里</em>
                            <em>百优购</em>
                        </p>
                        <span className="iconfont icon-xiaoxi"></span>
                    </div>
                    <div className="tejia">
                        <span>今日特价</span>
                    </div>
                    <div className="lunbo">
                        <div>
                            <dl>
                                <dt><img src={img6}/></dt>
                                <dd>
                                    <span>泰国&nbsp;思薇安</span>
                                    <span>化妆刷套盒</span>
                                    <span>￥69</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt><img src={img7}/></dt>
                                <dd>
                                    <span>泰国&nbsp;思薇安</span>
                                    <span>化妆刷套盒</span>
                                    <span>￥69</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt><img src={img6}/></dt>
                                <dd>
                                    <span>泰国&nbsp;思薇安</span>
                                    <span>化妆刷套盒</span>
                                    <span>￥69</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt><img src={img7}/></dt>
                                <dd>
                                    <span>泰国&nbsp;思薇安</span>
                                    <span>化妆刷套盒</span>
                                    <span>￥69</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt><img src={img6}/></dt>
                                <dd>
                                    <span>泰国&nbsp;思薇安</span>
                                    <span>化妆刷套盒</span>
                                    <span>￥69</span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="pic"><img src={img8}/></div>
                    <div className="pic2">
                        <img src={img9}/>
                        <img src={img10}/>
                    </div>
                    <div className="pic3">
                        <img src={img11}/>
                        <img src={img12}/>
                        <img src={img11}/>
                    </div>
                    <div className="guojia">
                            <span>国家馆</span>
                    </div>
                    <div className="lunbo1">
                        <div>
                            <dl>
                                <dt><img src={img13}/></dt>
                            </dl>
                            <dl>
                                <dt><img src={img14}/></dt>
                            </dl>
                            <dl>
                                <dt><img src={img13}/></dt>
                            </dl>
                            <dl>
                                <dt><img src={img14}/></dt>
                            </dl>
                            <dl>
                                <dt><img src={img13}/></dt>
                            </dl>
                        </div>
                    </div>
                    <div className="meizhou">
                            <span>每周精选</span>
                    </div>
                    <div className="pic4">
                        <dl>
                            <dt><img src={img15}/></dt>
                            <dd>
                                <span>西芹籽</span>
                                <span>降低血压改善痛风关节热痛</span>
                                <span>3000mg 50粒</span>
                                <span>￥109</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src={img16}/></dt>
                            <dd>
                                <span>西芹籽</span>
                                <span>降低血压改善痛风关节热痛</span>
                                <span>3000mg 50粒</span>
                                <span>￥109</span>
                            </dd>
                        </dl>
                        
                        
                    </div>
                </section>
                
            </div>
        )
    }

}

export default Home;