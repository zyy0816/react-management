import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(({ login }) => ({ login }))
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