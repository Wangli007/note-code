import React,{ useState,useRef,useEffect } from "react"
import { useCallback } from "react"

const Index = ()=>{
    const [count, setCount] = useState(0);
    const callbackRef = useRef();
    useEffect(() => {
        console.log(callbackRef);
        callbackRef.current = () => {  // count每次变化的时候 把count更新后的值存在ref里面  这样就保证不会丢失
            console.log(count)
        }
    }, [count])

    useEffect(() => {
        setTimeout(() => {
            //console.log(count);  //0  如果你3秒之前count有变化过 这里是不会打印变化后的值
            callbackRef.current()
        }, 3000)
    }, [])

    const handleClick = useCallback(()=>{
        console.log(count);
    },[count])
    

    return (
        <>
            <button onClick={() => { setCount(count + 1) }}>increment-btn</button>
            <button onClick={handleClick}>increment</button>
        </>
    )
}

export default Index;