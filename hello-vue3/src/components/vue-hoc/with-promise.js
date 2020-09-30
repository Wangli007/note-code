const withPromise = (wrapped, promiseFn) => {
  return {
    data() {
      return {
        loading: false,
        error: false,
        result: null
      };
    },
    async mounted() {
      this.loading = true;
      const result = await promiseFn().finally(() => {
        this.loading = false;
      });
      this.result = result;
    },
    render(h) {
      const args = {
        props: {
          result: this.result,
          loading: this.loading
        }
      };
      const wrapper = h("div", [
        h(wrapped, args),
        this.loading ? h("span", ["加载中……"]) : h("span", ["加载完成"]),
        this.error ? h("span", ["加载错误"]) : null,
      ]);

      return wrapper;
    },
  };
};

export default withPromise;
