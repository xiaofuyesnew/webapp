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
        viewHeight: () => {
            var viewHeight = window.innerHeight,
                app = document.getElementsByClassName('app')[0],
                nopadding = viewHeight * 0.9

            app.style.height = `${nopadding}px`
            
            console.log(app.style.height)
            console.log('ok')
        },
        
    }
})
