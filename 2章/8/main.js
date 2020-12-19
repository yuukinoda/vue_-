var app = new Vue({
    el: '#app',
    data: {
        message:{
            value: ' Vue.js!'
        },
        list:['りんご','ばなな','いちご'],
        num:1
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