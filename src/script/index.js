/**
 * 
 * 
 */

import Vue from 'vue'
import { Indicator } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Indicator)

var app = new Vue({
    el: '.app',
    data: {
        message: 'nihao'
    },
    methods: {
        setScreen: () => {
            var viewHeight = innerHeight,
                appHeight = document.getElementsByClassName('app')[0]

            appHeight.style.height = `${viewHeight}px`
        },
        clickButton: () => {
            Indicator.open('加载中...')
            console.log('ok')
        }
    }
})

app.setScreen()