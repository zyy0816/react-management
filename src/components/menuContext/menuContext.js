import React from 'react';
import { Icon, Menu } from 'antd';
import "./MenuContext.less"

const SubMenu = Menu.SubMenu;


class MenuContext extends React.Component {

  constructor(props) {
    super(props);
    this.state=({
      collapsed:false,
    })
  }
  render() {

    return (
      <div className="zy-menu">
        <div className="logo" />
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <SubMenu key="1" title={<span><Icon type="pie-chart" /><span>首页</span></span>}>
            <Menu.Item key="11">工作台</Menu.Item>
            <Menu.Item key="12">分析页</Menu.Item>
            <Menu.Item key="13">监控页</Menu.Item>
          </SubMenu>
          <SubMenu key="2" title={<span><Icon type="form" /><span>表单页</span></span>}>
            <Menu.Item key="21">基础表单</Menu.Item>
            <Menu.Item key="22">分步表单</Menu.Item>
          </SubMenu>
          <SubMenu key="3" title={<span><Icon type="table" /><span>列表页</span></span>}>
            <Menu.Item key="23">标准表格</Menu.Item>
            <Menu.Item key="24">查询表格</Menu.Item>
          </SubMenu>
          <SubMenu key="4" title={<span><Icon type="profile" /><span>详情页</span></span>}>
            <Menu.Item key="41">简单详情页</Menu.Item>
            <Menu.Item key="42">复杂详情页</Menu.Item>
          </SubMenu>
          <SubMenu key="5" title={<span><Icon type="warning" /><span>异常页</span></span>}>
            <Menu.Item key="51">403</Menu.Item>
            <Menu.Item key="52">404</Menu.Item>
            <Menu.Item key="53">500</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }

}

export default MenuContext;
