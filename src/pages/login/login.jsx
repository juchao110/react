import router from 'umi/router'
import React, { Component } from 'react';
import {
  List,
  InputItem,
  Button,
  WhiteSpace,
  WingBlank,
  Toast
} from 'antd-mobile';
import md5 from 'js-md5'
import {UserLogin} from '@/services/home-list'
// console.log(UserLogin)
class Login extends Component{
  state={

  }
  onChange=(type,v)=>{
    let obj={}
    obj[type]=v
    this.setState(obj)
  }
  loginIn=()=>{
    console.log(this.state)
    if(!this.state.mobilePhone) return Toast.info('请输入用户名')
    if(!this.state.password) return Toast.info('请输入密码')
    UserLogin({
      mobilePhone:this.state.mobilePhone,
      password:this.state.password?md5(this.state.password):''
    }).then(res=>{
      if(res){
        Toast.info('登录成功')
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('userInfo',JSON.stringify(res.data))
        router.push('/home')
      }

    })
  }
  render(){
    return (
      <div>
        <List>
          <InputItem
            clear
            placeholder="UserName"
            onChange={this.onChange.bind(this,'mobilePhone')}
            value={this.state.mobilePhone}>
              用户名
          </InputItem>
          <InputItem
            clear
            type="password"
            placeholder="Password"
            onChange={this.onChange.bind(this,'password')}
            value={this.state.password}>
              密码
          </InputItem>
        </List><WhiteSpace/>
        <WingBlank>
          <Button type="primary" onClick={this.loginIn}>登录</Button><WhiteSpace/>
        </WingBlank>
        <button onClick={()=>{router.push({pathname:`/home/${Math.random()}`,query:{id:3}})}}>Go Detail</button>

      </div>
    );
  }
}
export default Login
