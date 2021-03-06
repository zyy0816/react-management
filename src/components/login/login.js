import React, { Component } from 'react';
import { Layout, Form, Input, Icon, Button } from 'antd';
import './login.less';
import logo from "../../assets/logo.png";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const { Footer, Content} = Layout;
const FormItem = Form.Item;


class Login extends Component {

  constructor(props) {
    super(props)
  }

  submit(){
    let { dispatch } = this.props;
    dispatch({
      type: 'changeLogin',
      payload: { name: '新的标题' },
      callback:()=>{
        window.location.href = "#/homePage";
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="zy-login">
        <Layout>
          <Content>
            <div className="content">
              {/* <div className="logo"><img src={logo}/></div> */}
              <div className="title">后台管理系统</div>
              <div>
                <Form>
                  <FormItem>
                    {getFieldDecorator("username", {
                      rules: [{ required: true, message: "请输入用户名" }]
                    })(
                      <Input prefix={<Icon type="user" />} placeholder="用户名" />)}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator("password", {
                      rules: [{ required: true, message: "请输入密码" }]
                    })(
                      <Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />
                    )}
                  </FormItem>
                  <span className="forget">忘记密码</span>
                  <Button type="primary" htmlType="submit" className="submit" onClick={this.submit.bind(this)}>登录</Button>
                </Form>
              </div>
            </div>
          </Content>
          <Footer>
            <div className="zy-foot">
              <p>React-manegement</p>
              {/* <p>技术运营支持：zisu</p> */}
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }

}

Login = Form.create({})(Login);
export default connect(state => {
  return {
    loginModel: state.login,
  }
})(Login);
