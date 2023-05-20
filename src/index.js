import * as Vue from "vue/dist/vue.esm-bundler.js";

const Num = {
  props: ["number"],
  template: `
    <button
        :class="getClass(number)"
        v-on:click="click"
    >
        {{ number }}
    </button>
    `,
  methods: {
    getClass(val) {
      return this.isEven(val) ? "blue" : "red";
    },
    isEven(val) {
      return val % 2 === 0;
    },
    click(number) {
      this.$emit("chosen", this.number);
    },
  },
};

const app = Vue.createApp({
  components: {
    Num,
  },
  template: `
    <num
        v-for="number in numbers"
        :number="number"
        v-on:chosen="addNumber" />
    <hr />
    <num
        v-for="number in numberHistory"
        :number="number" />
    `,

  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      numberHistory: [],
    };
  },
  methods: {
    addNumber(number) {
      this.numberHistory.push(number);
    },
  },
  computed: {},
});

app.mount("#app");
