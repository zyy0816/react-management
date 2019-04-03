import React, { Component } from 'react';
import { connect } from 'react-redux'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true
    }
  }
  componentDidMount() {
    console.log(this.props,'this.props');
    let { dispatch } = this.props;
    dispatch({
      type: 'changeName',
      payload: { name: '新的标题' }
    })
  }
  render() {
    // 从props中解构store
    console.log(this.props);
    let { homePageModel } = this.props;
    return (
      <div>
        <h1>标题{homePageModel.name}</h1>
        <div>小区<span>新明半岛234234</span></div>
      </div>
    );
  }
}


export default connect(state => {
  return {
    homePageModel: state.homePage,
  }
})(HomePage);