import React, { Component } from 'react';
import { connect } from 'react-redux'

import { setPageTitle } from './../action/show'

class show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true
    }
  }
  componentDidMount() {
    this.props.dispatch(setPageTitle('新的标题'))
  }
  render() {
    // 从props中解构store
    console.log(this.props);
    
    let { pageTitle } = this.props.show;
    return (
      <div>
        <h1>标题{pageTitle}</h1>
        <div>小区<span>新明半岛</span></div>
      </div>
    );
  }
}


export default connect(state => {
  return {
    show: state.show,
  }
})(show);