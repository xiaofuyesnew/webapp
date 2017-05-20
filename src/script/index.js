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
            var viewHeight = document.documentElement.clientHeight,
                app = document.getElementsByClassName('app')[0]

            app.style.height = `${viewHeight}px`
        }
    }
})

app.setScreen()