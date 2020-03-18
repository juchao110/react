import React,{Component} from 'react'
import Redirect from 'umi/redirect'

 class Private extends Component {
   constructor(props){
     super(props);
     this.state={
       token:localStorage.userInfo?JSON.parse(localStorage.userInfo).token:''
     }
   }
    render() {
        if(this.state.token) {
            //登录成功时，显示子路由的页面组件
            return <div>{this.props.children}</div>
        }
        //没有登录时，重定向到登录页
        return <Redirect to="/login" />
    }
}
export default Private
