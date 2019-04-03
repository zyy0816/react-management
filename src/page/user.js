import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import Permission from './../components/Permission/index'

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>User</h1>
        <ul>
          <li><Link to="/">App</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
        <Button>123456</Button>
        <Permission name="test"><a>编辑</a></Permission>
        <Permission name="company_delete"><a>删除</a></Permission>
      </div>
    )
  }
}
export default User;