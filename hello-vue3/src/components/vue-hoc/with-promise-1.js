const withPromise = (promiseFn) => {
  return function(wrapped) {
    return {
      data() {
        return {
          loading: false,
          error: false,
          result: null,
        };
      },
      methods: {
        async request() {
          this.loading = true;
          // 从子组件实例里拿到数据
          const { requestParams } = this.$refs.wrapped;
          // 传递给请求函数
          const result = await promiseFn(requestParams).finally(() => {
            this.loading = false;
          });
          this.result = result;
        },
      },
      async mounted() {
        // 立刻发送请求，并且监听参数变化重新请求
        this.$refs.wrapped.$watch("requestParams", this.request.bind(this), {
          immediate: true,
        });
      },
      render(h) {
        const args = {
          props: {
            // 混入 $attrs
            ...this.$attrs,
            result: this.result,
            loading: this.loading,
          },

          // 传递事件
          on: this.$listeners,

          // 传递 $scopedSlots
          scopedSlots: this.$scopedSlots,
          ref: "wrapped",
        };

        const wrapper = h("div", [
          this.loading ? h("span", ["加载中……"]) : null,
          this.error ? h("span", ["加载错误"]) : null,
          h(wrapped, args),
        ]);

        return wrapper;
      },
    };
  };
};

export default withPromise;
