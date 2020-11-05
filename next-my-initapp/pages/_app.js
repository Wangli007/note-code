import '../styles/globals.css';
import React from 'react';
import App from 'next/app';
import Layout from '../component/Layout';
import { Provider } from 'react-redux'; //让状态和组件关联
import MyConnect from '../lib/my-context';
import withRedux from '../lib/with-redux';

class MyApp extends App {
  constructor(props) {
    super(props);
  }
  state = {
    context: 'value',
  };
  static async getInitialProps(ctx) {
    const { Component } = ctx;
    let pageProps;
    // 自义定app后,如果页面有用到getInitialProps,则需要手动从这里传过去
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  UNSAFE_componentWillMount() {
    // console.log(this.props,'000000');
  }

  render() {
    const { Component, pageProps, children, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Layout title="Contact us">
          {/* 演示myContent */}
          {/* <MyConnect.Provider value="test111"> */}
          <Component {...pageProps} />
          {/* </MyConnect.Provider> */}
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(MyApp);
