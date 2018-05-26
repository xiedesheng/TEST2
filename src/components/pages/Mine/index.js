import React, { Component } from 'react'
import './index.scss'
import Login from './Login'
import User from './User'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

class Mine extends Component {
    componentWillReceiveProps (props){
        if(props.userInfo !== this.props.userInfo ){
            this.checkLogin(props)
        }
    }
    componentWillMount (){
        this.checkLogin()
    }
    checkLogin(props){
        let _props = props || this.props;
        let {history} = _props;
        if( !_props.userInfo ){
            history.replace('/mine/login');
        }else{
            history.replace('/mine/user');
        }
    }

    render () {
        return (
            <div className = "page mine">
            <Switch>
                <Route path="/mine/login" exact component={Login} />
                <Route path="/mine/user" exact component={User} />
            </Switch>
            </div>
    )
    }
}

export default connect(state=>state.commons)(Mine)