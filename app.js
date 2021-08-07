new Vue({
    el: '#app',
    data:{
        name: 'Fahad Aleem',
        job: 'Software Engineer',
        window:"https://www.facebook.com/"
    },
    methods:{
        greet:function(time){
            return `Good ${time} ${this.name}`
        }
    }
});