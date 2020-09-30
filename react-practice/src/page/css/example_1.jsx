import React from "react";
//css3 的属性  img srcset


class Son extends React.Component{
    constructor(props){
        console.log(super()); //查看父类的属性
        this.state = {
            msg:'wangLi'
        }
        this.name = 'Rectangle';
        this.height = 'height';
        this.width = 'width';
    }

    render(){
        return (
            <>
                <div>Son-{this.props.msg}-{this.props.number}</div>
                <img srcSet="static/banner.png 1440w, static/banner1.png 800w, static/banner2.png 1x" alt="banner"/>
            </>
        )
    }
}

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