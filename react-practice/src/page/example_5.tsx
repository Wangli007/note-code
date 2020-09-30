import React, { useEffect } from 'react';

//黄色警告 红色报错
function alertName(): void {
    alert('My name is Tom');
}

interface Person{ //接口类型 
    name: string
    age?:number  //可选属性
    readonly id: number; //只允许在创建的被赋值
}

let tom : Person = {
    name:'lw',
    id:123
}

let fibonacci: number[] = [1, 1, 2, 3, 5];
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];

//类型断言
(window as any).foo = 1

// person: string = '1'
const Son = (props : object)=>{
    useEffect(()=>{
        console.log(props);
    },[])
    return (
        <div>{11111111}</div>
    )
}



const Index = ()=>{
    return (
        <div>
            <Son ></Son>
        </div>
    )
}

export default Index