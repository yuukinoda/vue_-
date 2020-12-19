var app = new Vue({
    el: '#app',
    data: {
        name:'キマイラ',
     list:[
         {id:1,name:'スライム', hp:100},
         {id:2,name:'ゴブリン', hp:200},
         {id:3,name:'ドラゴン', hp:500},
     ]
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
        doAdd: function () {

            var max = this.list.reduce(function (a,b) {

                return a.id>b.id ? a.id:b.id
            },0)

            this.list.push({
                id:max+1,
                name:this.name,
                hp:500


                })

        },
        doRemove:function(index){
            this.list.splice(index,1)
        }
    }

})


console.log(app.message)