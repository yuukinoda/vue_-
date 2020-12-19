var app = new Vue({
    el: '#app',
    data: {
        list: [],
    },

    computed: {},
    created: function () {
        console.log('hello')

        axios.get('list.json').then(function (response) {

            this.list = response.data
        }.bind(this)).catch(function (e) {
            console.log('aaa')
            console.error(e)
        })
    },

mounted:function () {

},

methods:{

},

})


console.log(app.message)
