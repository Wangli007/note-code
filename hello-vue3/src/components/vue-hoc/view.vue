<script>
import withPromise from "../vue-hoc/with-promise";
const view = {
  template: `
    <span>
      <span>{{result?.name}}</span>
    </span>
  `,
  props: ["result", "loading"]
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
