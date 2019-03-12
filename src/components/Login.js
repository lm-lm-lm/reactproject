import React from 'react';
import { Input ,Button} from 'antd';
import img from '../img/logo.jpg';
import {NavLink} from 'react-router-dom'
import "antd/dist/antd.css";
import '../style/login.css'
class Login extends React.Component{
    login(){
        this.props.history.push('/index')
    }
    render(){
        return(
            <div className='login-1'>
                <img src={img}/>
                <div className='login-2'>
                <Input placeholder="请输入账户" />
                <Input placeholder="请输入密码" />
                <Button type="primary" block onClick={this.login.bind(this)} className='btn1'>登录</Button>
                </div>
                <div className='login-3'>
                    <NavLink to='/regist'><p>立即注册</p></NavLink>
                    <NavLink to='/index'><p>跳过</p></NavLink>
                </div>
            </div>
        )
    }
}

export default Login;