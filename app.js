new Vue({
    el: '#app',
    data:{
        name: '',
        job: 'Software Engineer',
        window:"https://www.facebook.com/",
        windowTag:'<a href="https://www.facebook.com/">Click Here</a>',
        age:'',
        a:0,
        b:0,
        },
    methods:{
        greet:function(time){
            return `Good ${time} ${this.name}`
        },
        incrementAge: function(value){
            this.age += value;   
        },
        decrementAge: function(value){
            this.age -= value;
        },
        // addToA:function(){
        //     console.log("addToA");
        //     this.a += this.age;
        // },
        // addToB:function(){
        //     console.log("addToB");
        //     this.b += this.age;
        // }

    },
    computed:{
        addToA:function(){
            console.log("addToA");
            this.a += this.age;
        },
        addToB:function(){
            console.log("addToB");
            this.b += this.age;
        }
    }
});