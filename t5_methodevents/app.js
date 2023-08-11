
var app=Vue.createApp({

    data(){
       return {
        msg:"welcome to vue js",
        counter:0,
       }
    },
    methods:{
        getCurrentTime(){
            let currentTime=new Date();
            return currentTime;
        },

        increase(){
            this.counter++;
        },
        decrease(){
            this.counter--;
        },

    }


});
app.mount('#app')