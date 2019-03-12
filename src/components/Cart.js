import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import {NavLink,BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import $ from 'jquery';


class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    render(){
        return(
            <div>
                <header>购物车</header>
                {
                    // this.state.list.map((item,i)=>{
                    //     <div key={i}>
                            
                    //             <p>{item.pid}</p>
                              
                    //     </div>
                    // })
                }
            </div>
        )
    }
    componentDidMount(){
        var _this =this;
        $.ajax({
            type: "get",
            url: "http://jx.xuzhixiang.top/ap/api/cart-list.php",
            data: {id:1017},
            dataType: "json",
            success: function (data) {
                console.log(data.data)
                _this.setState({list:data.data})
            }
        });
    }
}

export default Cart;