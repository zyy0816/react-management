import React from 'react'
import { Link } from 'react-router-dom'

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
      </div>
    )
  }
}
export default User;