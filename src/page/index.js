import React from 'react'
import { Link } from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
       <h1>App</h1>
       <ul>
         <li><Link to="/user">User</Link></li>
         <li><Link to="/home">Home</Link></li>
       </ul>
     </div>
    )
  }
}
export default App;