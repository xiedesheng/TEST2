import React, { Component } from 'react'
import axios from "axios"
import './index.scss'

import Swiper from 'swiper'
class Banner extends Component {
    constructor(props){
        super(props)
        this.state={
            banners:[]
        }
        this.ismounted = true
    }

    componentWillUnmount () {
        this.ismounted = false
    }

        getBanners(){
            axios.get('/mz/v4/api/billboard/home', {
                params: {__t: Date.now()}
            }).then (res => {
                console.log(res.data.data.billboards)
                this.setState({banners: res.data.data.billboards})
        })
    }
        componentWillMount () {
            this.getBanners()

        }
    renderSlide () {
        let { banners } = this.state
        if (!banners.length) return (<div className="swiper-wrapper"></div>)

        return (
            <div className="swiper-wrapper">
            {
                banners.map(item => {
                return (
                    <div key = {item.id} className="swiper-slide">
                    <div className="img-box img-loading">
                    <img width="100%" src={item.imageUrl} alt=""/>
                    </div>
                    </div>
            )
            })
    }
    </div>
    )
    }

    render () {
        return (
            <div ref = {el => this.el = el} className="swiper-container">
            {this.renderSlide()}
    <div className="swiper-pagination"></div>
            </div>
    )
    }

    componentDidUpdate () {
        //在这里实例的话，页面中有0个swiper-slide
        new Swiper(this.el, {
            pagination: {el: '.swiper-pagination'}
        })
    }
}

export default Banner