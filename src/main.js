import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import UsersData from "./components/Users.vue";
import ListIndex from "./components/ListIndex.vue";
import { createStore } from "vuex";
import CounterApp from "./components/Counter.vue";
import CompositionCode from "./components/CompositionCode.vue";
import ShoppingCart from "./ShoppingCart.vue";
const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: ListIndex,
    },
    {
      path: "/users",
      component: UsersData,
    },
    {
      path: "/users/:userId",
      component: UsersData,
      props: true,
    },
    {
      path: "/counter",
      component: CounterApp,
    },
    {
        path: "/composition",
        component: CompositionCode,
      },
      {
        path: "/shopping",
        component: ShoppingCart,
      },
  ],
});
const store = createStore({
  state() {
    return {
      counter: 0,
      timer: 0,
      timerInterval: null,
      isStart: false,
    };
  },
  mutations: {
    Increment(state, payload) {
      state.counter = state.counter + payload.value;
    },
    decrement(state, payload) {
      state.counter = state.counter - payload.value;
    },
    IncTimer(state) {
      state.isStart = true;
      state.timer++;
    },
    stopTimer(state) {
      state.isStart = false;
      clearInterval(state.timerInterval);
      state.timer = 0;
    },
    pause(state) {
      state.isStart = false;
    },
  },
  getters: {
    getFinalCount(state) {
      // console.log(state,getters)
      return state.counter;
    },
    gettimerCount(state) {
      // console.log(state,getters)
      return state.timer;
    },
  },
  actions: {
    inc(context, payload) {
      setTimeout(() => {
        console.log(context, payload, "context");
        context.commit("Increment", payload);
      }, 2000);
    },
    dec(context, payload) {
      context.commit("decrement", payload);
    },
    stop(context) {
      console.log(context);
      context.commit("stopTimer");
    },
    start(context) {
      if (context.state.timerInterval) {
        clearInterval(context.state.timerInterval);
      }
      context.state.timerInterval = setInterval(() => {
        context.commit("IncTimer");
      }, 1000);
    },
    pause(context) {
      context.commit("pause");
      clearInterval(context.state.timerInterval);
    },
  },
});
app.use(store);
app.use(router);
app.mount("#app");
