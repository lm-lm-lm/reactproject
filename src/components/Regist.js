import React from 'react'
import { Input ,Button,Checkbox} from 'antd';
import "antd/dist/antd.css";
import '../style/regist.css';
import {NavLink} from 'react-router-dom'
class Regist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tag:true,
            checked:false
        }
    }
    onChange(e){
        
             this.setState({ checked: !this.state.checked })
             this.setState({tag: !this.state.tag})
       
       

    }
    regist(){

    }
    render(){
        return(
            <div className='regist-1'>
                <div className='regist-2'>
                    <NavLink to='/login'><p>&lt;</p></NavLink>
                    <h2>注册</h2>
                </div>
                <div className='regist-3'>
                    <Input placeholder="请输入账户" />
                    <Input placeholder="请输入密码" />
                </div>
                
                <Checkbox onChange={this.onChange.bind(this)} className='cbox' checked={this.state.checked}>我已阅读并同意佰优购<a>用户注册协议</a></Checkbox>
                <Button type="primary" block onClick={this.regist.bind(this)} className='reg1' disabled={this.state.tag}>注册</Button>
            </div>
        )
    }
}
export default Regist;