var app = new Vue({
    el: '#app',
    data: {
      radius:50
    },

    computed:{
        computedMessage: function () {
            return this.message+'!'
        }
    },
    created:function () {
        console.log('hello')
    },

    mounted:function (){
        this.scroll = 10000
    },

    methods:{
        increments: function () {
            this.count +=1
        }
    }

})


console.log(app.message)