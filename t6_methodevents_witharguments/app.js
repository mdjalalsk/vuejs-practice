var app = Vue.createApp({
  data() {
    return {
      msg: "welcome to vue js",
      counter: 0,
    };
  },
  methods: {
    getCurrentTime() {
      let currentTime = new Date();
      return currentTime;
    },

    increase(number) {
      this.counter = this.counter + number;
    },
    decrease(number) {
      this.counter = this.counter - number;
    },
    testEvent(event) {
        console.log(event);
    }

  },
});
app.mount("#app");
