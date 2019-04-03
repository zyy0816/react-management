import React from 'react'
import { Layout } from 'antd';
import MainHeader from "./mainHeader.js";
import MenuContext from "./../menuContext/menuContext";
import "./mainLayout.less"
const { Footer, Sider, Content, Header} = Layout;
import { Switch, Redirect } from 'react-router-dom'
import RouteWithSubRoutes from './../../router/routeWithSubRoutes';


function checkAuthenticated() {
  return !!(sessionStorage.getItem("token"))
}
class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: checkAuthenticated(),
    }
  }
  render (){
    const { routes } = this.props;
    console.log(routes);
    return (
      <Layout>
        <Sider><MenuContext/></Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: "0 20px" }}>
            <MainHeader />
          </Header>
          <Content style={{ background: "rgb(240, 242, 245)", margin: "24px" }} >
            {/* {this.props.children} */}
            <Switch>
              {
                this.state.isAuthenticated ?
                  routes && routes.map((route, index) => (<RouteWithSubRoutes {...route} key={index} />))
                  :
                  <Redirect
                    to="/account/login"
                  />
              }
            </Switch>
          </Content>
          <Footer>
            <div className="zy-foot">
              <p>React-manegement</p>
              {/* <p>技术运营支持：zisu</p> */}
            </div>
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default MainLayout;