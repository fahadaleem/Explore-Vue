new Vue({
    el: '#app',
    data:{
        name: 'Fahad Aleem',
        job: 'Software Engineer',
        window:"https://www.facebook.com/",
        windowTag:'<a href="https://www.facebook.com/">Click Here</a>',
        age: 20,
        },
    methods:{
        greet:function(time){
            return `Good ${time} ${this.name}`
        }
    }
});