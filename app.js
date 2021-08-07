new Vue({
    el: '#app',
    data:{
        name: 'Fahad Aleem',
        job: 'Software Engineer',
    },
    methods:{
        greet:function(time){
            return `Good ${time} ${this.name}`
        }
    }
});