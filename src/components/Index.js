import React from 'react';

import {NavLink,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Home from './Home'
import Fenlei from './Fenlei'
import Faxian from './Faxian'
import Cart from './Cart'
import My from './My'


class Index extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <div className='index'>
                        <Switch>
                            <Route path='/home' component={Home}></Route>
                            <Route path='/fenlei' component={Fenlei}></Route>
                            <Route path='/faxian' component={Faxian}></Route>
                            <Route path='/cart' component={Cart}></Route>
                            <Route path='/my' component={My}></Route>
                            <Redirect to="/home"/>
                        </Switch>

                        <footer>
                            <NavLink to='/home'><span className='iconfont icon-home'></span><p>首页</p></NavLink>
                            <NavLink to='/fenlei'><span className='iconfont icon-fenlei'></span><p>分类</p></NavLink>
                            <NavLink to='/faxian'><span className='iconfont icon-faxian'></span><p>发现</p></NavLink>
                            <NavLink to='/cart'><span className='iconfont icon-gouwuche'></span><p>购物车</p></NavLink>
                            <NavLink to='/my'><span className='iconfont icon-wode'></span><p>我的</p></NavLink>
                        </footer>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Index;