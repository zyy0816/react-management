import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card bordered={false}>
          <h1>Home</h1>
          <ul>
            <li><Link to="/">App</Link></li>
            <li><Link to="/user">User</Link></li>
          </ul>
        </Card>
      </div>
    )
  }
}
export default Home;