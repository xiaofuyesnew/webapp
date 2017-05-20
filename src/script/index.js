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
            var viewHeight = screen.availHeight,
                app = document.getElementsByClassName('app')[0]

            app.style.height = `${viewHeight}px`
            document.getElementById('test').value = viewHeight
        }
    }
})

app.setScreen()