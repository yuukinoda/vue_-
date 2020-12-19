var app = new Vue({
    el: '#app',
    data: {
        message: ' Vue.js!'
    },

    computed:{
        computedMessage: function () {
            return this.message+'!'
        }
    },
    created:function () {
        console.log('hello')
    },
    methods:{
        myMethod: function () {
            
        }
    }

})


console.log(app.message)