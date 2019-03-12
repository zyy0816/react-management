import React from 'react';
import { Layout, Form, Input, Icon, Button } from 'antd';
import './login.less';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'

const { Footer, Content} = Layout;
const FormItem = Form.Item;


class Login extends React.Component {

  constructor(props) {
    super(props)
    
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="zy-login">
        <Layout>
          <Content>
            <div className="content">
              <div className="logo"><img src={logo}/></div>
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
                  <Button type="primary" htmlType="submit" className="submit" ><Link to="/home">登录</Link></Button>
                </Form>
              </div>
            </div>
          </Content>
          <Footer>
            <div className="zy-foot">
              <p>React-manegement</p>
              <p>技术运营支持：zisu</p>
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }

}


Login = Form.create({})(Login);
export default Login;
