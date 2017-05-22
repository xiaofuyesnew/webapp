/**
 * 
 * 
 */

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
        }
    }
})

app.setScreen()