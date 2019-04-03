import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(({ login }) => ({ login }))
// @connect(({ companyInfoManage, projectInfo }) => ({ companyInfoManage, projectInfo }))//组件关联
export default class Permission extends Component {
  render() {
    const {name } = this.props;
    const { authority } = this.props.login;
    console.log(this.props.login,'this.props.login');
    
    return (
      name && ~authority.findIndex(n => n.key === name) &&
      this.props.children
      || null
    )
  }
}