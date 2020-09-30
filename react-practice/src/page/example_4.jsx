
import React, { useEffect } from 'react'
// import * as obj from '../common/example_1'
// import * as obj from '../common/example_1'
import * as example2 from '../common/example_2'

// import * as xxx from ‘xxx’: 会将若干export导出的内容组合成一个对象返回；
// import xxx from ‘xxx’：（export default Din）只会导出这个默认的对象作为一个对象


const Index = ()=>{
    useEffect(()=>{
        console.log(React);
        console.log(example2);
        const {a:{b:{c}}} = {a:{b:{c:1}}}  //解构c 
        console.log(c); 
    },[])
    return (
        <div>test</div>
    )
}

export default Index; 