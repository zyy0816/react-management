import React from 'react';
import { Icon, Dropdown, Menu } from 'antd';
import './mainHeader.less';


class MainHeader extends React.Component{

  constructor(props) {
    super(props)
  }

  render(){
    const menu = (
      <Menu>
        <Menu.Item>
          <a>修改密码</a>
        </Menu.Item>
        <Menu.Item>
          <a>退出登录</a>
        </Menu.Item>
      </Menu>
    )

    return (
      <div className="zy-head">
        <Dropdown overlay={menu}>
          <div className="fr"> 
            欢迎你，XXX 
            <Icon type="down" className="ml1" /> 
          </div>
        </Dropdown>
        <div className="zy-head-question">
          <Icon type="question-circle-o" />
        </div>
      </div>
    );
  }
  
}

export default MainHeader;
