var app = new Vue({
    el: '#app',
    data: {
        name:'キマイラ',
     list:[
         {id:1,name:'スライム', hp:100},
         {id:2,name:'ゴブリン', hp:200},
         {id:3,name:'ドラゴン', hp:500},
     ],
        text:'Vue',
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
        doAttack: function (index) {
            this.list[index].hp -=10
        },
        doRemove:function(index){
            this.list.splice(index,1)
        }
    }

})


console.log(app.message)