import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName:'',//用户名
      passWord:'',//密码
      userNameValid:true,
      passWordValid:true
    }
  }

  textChange(key,event){
    console.log(key)
    this.setState({[key]:event.target.value})
    if("" === event.target.value){
      this.setState({[key+'Valid']:false})
    }else{
      this.setState({[key+'Valid']:true})      
    }    
  }

  doLogin(){//登录
    console.log(this.state)
  }

  handleSubmit(event){
    console.log(this.state.userName)
    event.preventDefault();
  }

  render() {
  
    return (
      <div className="App">
        <section className="login-bg-wrap">
          <div className="login-content">
              <span className="logo"><img src={require('./static/logo_2.png')} alt=""/></span>
              <h2>Welcome</h2>
              <h1>云化内容库管理系统</h1>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    <span>用户名</span>
                    <input type="text" value={this.state.userName}  onChange={this.textChange.bind(this,'userName')}/>
                    <i className={this.state.userNameValid==false?"error":'required'}>用户名不能为空</i>
                </label>
                <label>
                    <span>密码</span>
                    <input type="password" value={this.state.passWord} onChange={this.textChange.bind(this,'passWord')}/>
                    <i className={this.state.passWordValid==false?"error":'required'}>密码不能为空</i>
                </label>
                <button type="submit" className={((""==this.state.userName) ||(""==this.state.passWord))?"login-btn disabled":"login-btn" } onClick={this.doLogin.bind(this)}>登陆</button>
              </form>
          </div>
        </section>         
      </div>
    );
  }
}

export default App;
