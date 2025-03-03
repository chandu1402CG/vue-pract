<template>
  <h2>Counter</h2>
  <p>count- {{ counterValue }}</p>
  <button @click="increment">Increment By 10 after 2 sec</button>
  <button @click="decrement">Decrement</button>

  <h2>Stop Watch</h2>
  <p>Timer - {{ timerValue }}</p>
  <button @click="startTimer">start</button>
  <button @click="stopTimer">Reset</button>
  <button @click="pauseTimer">pause</button>
</template>

<script>
export default {
  name: "CounterApp",
  computed: {
    counterValue() {
      return this.$store.getters.getFinalCount;
    },
    timerValue() {
      return this.$store.getters.gettimerCount;
    },
  },
  methods: {
    increment() {
      //   this.$store.state.counter++
      this.$store.dispatch("inc", { value: 10 });
    },
    decrement() {
      //   this.$store.state.counter++
      this.$store.dispatch("dec", { value: 10 });
    },
    pauseTimer() {
      //   this.$store.state.counter++
      this.$store.dispatch("pause");
    },
    stopTimer() {
      //   this.$store.state.counter++
      this.$store.dispatch("stop");
    },
    startTimer() {
      //   this.$store.state.counter++
      this.$store.dispatch("start");
    },
  },
};
</script>
