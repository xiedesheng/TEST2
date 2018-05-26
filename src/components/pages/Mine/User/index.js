import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import actionCreator from '../../../../store/commons/actionCreator'

class User extends Component {

    render () {
        let {userInfo} = this.props
        console.log(typeof userInfo)
        return (
            <div className = "user">
            <div className="header">
            <div className="bg"></div>
            <div className="user-info">
            <div className="head-img">
            <img src={userInfo.headimgurl} alt=""/>
            </div>
            <p className="username"> {userInfo.username} </p>
        <p> <button onClick = {this.exit}  className="exit"> 注销 </button> </p>
        </div>
        </div>
        </div>
    )
    }
}

export default connect(state => state.commons)(User)