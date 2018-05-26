import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'


const NavItem = ({item}) => {
    return (
        <NavLink exact to={{pathname: item.path}} activeClassName = "selected">
        <i className={"fa fa-"+item.icon}></i>
        <span>{item.title}</span>
    </NavLink>
)
}

class Footer extends Component {
    render () {
        let { navs } = this.props
        return (
            <div className = "app-footer">
            {
                navs.map(item => {
                return <NavItem key = {item.id} item = {item} />
            })
    }
    </div>
    )
    }
}
 Footer.defaultProps={
     navs: [
         {id: 1, icon: 'home', title: '首页', path: '/'},
         {id: 2, icon: 'navicon', title: '列表', path: '/list'},
         {id: 3, icon: 'shopping-cart', title: '购物车', path: '/car'},
         {id: 4, icon: 'user', title: '我的', path: '/mine'}
     ]
 }
export default Footer