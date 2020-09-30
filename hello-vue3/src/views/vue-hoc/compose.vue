<template>
  <hoc msg="msg" @change="onChange">
    <template>
      <div>I am slot</div>
    </template>
    <template v-slot:named>
      <div>I am named slot</div>
    </template>
  </hoc>
</template>

<script>
import withPromise from "@/components/vue-hoc/with-promise-1";
import Compose from "@/components/vue-hoc/compose";
function normalizeProps(vm) {
  return {
    on: vm.$listeners,
    attr: vm.$attrs,
    // 传递 $scopedSlots
    scopedSlots: vm.$scopedSlots
  };
}

function compose(...funcs) {
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
const withLog = wrapped => {
  return {
    mounted() {
      console.log("I am mounted!");
    },
    render(h) {
      return h(wrapped, normalizeProps(this));
    }
  };
};

const request = data => {
  return new Promise(r => {
    setTimeout(() => {
      r(data);
    }, 1000);
  });
};
const composed = compose(withLog, withPromise(request));
const hoc = composed(Compose);

const Index = {
  components: {
    hoc
  },
  methods: {
    onChange() {
      console.log("改变！！");
    }
  }
};

export default Index;
</script>