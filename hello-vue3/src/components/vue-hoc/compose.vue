<script>
import withPromise from "../vue-hoc/with-promise";
const view = {
  props: ["result"],
  data() {
    return {
      requestParams: {
        name: "ssh"
      }
    };
  },
  methods: {
    reload() {
      this.requestParams = {
        name: "changed!!"
      };
    }
  },
  template: `
          <span>
            <span>{{result?.name}}</span>
            <slot></slot>
            <slot name="named"></slot>
            <button @click="reload">重新加载数据</button>
          </span>
        `
};
const request = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: "ssh" });
    }, 1000);
  });
};

const hoc = withPromise(view, request);

export default hoc;
</script>
