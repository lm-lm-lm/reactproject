import React from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank ,Carousel} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import {NavLink,BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'


class Fenlei extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: ['1', '2', '3'],
            imgHeight: 176
        }
    }
    render(){
        return(
            <div>
                <WingBlank><div className="sub-title">Normal</div></WingBlank>
                    <SearchBar placeholder="Search" maxLength={8} />
                <WhiteSpace />
                <WingBlank>
                    <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
      </WingBlank>
            </div>
        )
    }
}

export default Fenlei;