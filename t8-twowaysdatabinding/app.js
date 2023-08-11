var app = Vue.createApp({
  data() {
    return {
      msg: "welcome to vue js",
      number: "",
      result: "",
    };
  },
  methods: {

   //data binding er jonno jodi second  html er second input system use kori tahole handelInput() function /methode lagbe na
   //  handelInut(e) {
   //    this.number = e.target.value;
   //  },
    getDouble() {
      this.result = this.number * 2;
    },
    getsqure() {
      this.result = this.number * this.number;
    },
    addten() {
      this.result = this.number + 10;
    },
    reset() {
      this.result = "";
      this.number = "";
    },
  },
});
app.mount("#app");
