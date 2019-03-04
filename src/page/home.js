import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li><Link to="/">App</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
      </div>
    )
  }
}
export default Home;