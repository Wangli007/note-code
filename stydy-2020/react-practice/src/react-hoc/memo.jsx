import React, { useEffect } from "react";
function MyComponent(props) {
    /* 使用 props 渲染 */
    useEffect(()=>{
        console.log(props,'abc');
    })
    return (
        <p>It is {props.name}</p>
    )
}
function areEqual(prevProps, nextProps) {
    /*
    如果把 nextProps 传入 render 方法的返回结果与
    将 prevProps 传入 render 方法的返回结果一致则返回 true，
    否则返回 false
    */
    console.log(prevProps, "prevProps"); //{name: "a"} "prevProps"
    console.log(nextProps, "nextProps"); //{name: "b"} "nextProps"
    if(nextProps.name === 'b'){
        return false;
    }
    return true; //true则不重新渲染， 相反则重新渲染

}
export default React.memo(MyComponent, areEqual);