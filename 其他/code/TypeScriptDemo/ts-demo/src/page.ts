import { Header, Content, Footer } from "./components";

//命名空间 namespace  只有暴露出去的类是全局的
export default class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
