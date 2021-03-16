import React from "react";
import propTypes from 'prop-types'

class Son extends React.Component{
    constructor(props){
        console.log(super()); //查看父类的属性
        // super(props);
        this.state = {
            msg:'wangLi'
        }
        this.name = 'Rectangle';
        this.height = 'height';
        this.width = 'width';
    }

    static propTypes = {  //传参类型验证   static 静态方法不用new 在外面就可以调用  Son.sayHi()
        number:propTypes.number,
        array:propTypes.array,
        boolean:propTypes.bool,
        msg:propTypes.string
    }

    static sayHi = ()=>{
        console.log('sayHi11111');
        // throw 123
    }
    hello(){
        console.log('hello函数');
    }

    get area() {  //计算属性
        return this.height * this.width;
    }

    set area(value) {
        this._area = value;
    }

    render(){
        return (
        <div>Son-{this.props.msg}-{this.props.number}</div>
        )
    }
}
Son.sayHi()

class Parent extends React.Component{
    render(){
        return (
            <div>
                <Son msg="123123" number={1111111111} array={[1,2,3]} />
                parent
            </div>
        )
    }
}

export default Parent;