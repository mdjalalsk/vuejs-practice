
var app=Vue.createApp({

    data(){
       return {
        msg:"welcome to vue js",
        name:"",
       
       }
    },
    methods:{
       handelKeyUp(e){
        //  console.log(e.target.value);
        this .name = e.target.value;

       },
       handelsubmit(){
        // console .log(e.target.value);
        console .log("form submit");
         
       }

    }


});
app.mount('#app')