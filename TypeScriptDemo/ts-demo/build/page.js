define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubComponents = exports.Footer = exports.Content = exports.Header = void 0;
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement("div");
            elem.innerText = "This is Header";
            document.body.appendChild(elem);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement("div");
            elem.innerText = "This is Content";
            document.body.appendChild(elem);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement("div");
            elem.innerText = "This is Footer";
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
    //子命名空间
    var SubComponents;
    (function (SubComponents) {
        var Test = /** @class */ (function () {
            function Test() {
                console.log("子命名空间!");
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents = exports.SubComponents || (exports.SubComponents = {}));
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //命名空间 namespace  只有暴露出去的类是全局的
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
