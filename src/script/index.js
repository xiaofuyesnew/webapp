/**
 * 
 * 
 */
const vue = require('vue')
const mintui = require('mint-ui')
const axios = require('axios')

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
            console.log('ok')
        }
    }
})

app.setScreen()