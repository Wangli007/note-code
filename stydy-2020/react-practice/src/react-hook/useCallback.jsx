import React, { useState, useMemo } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'

const Index = (props)=>{
    const [count,setCount] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            console.log(123);
            setCount((count)=>count + 1)
        },1000)
    },[])
    const handleClick = useCallback((ev)=>{
        // console.log(ev.target);
        console.log(count); //0  这个count不会随着外面改变的状态改变 一直保持着初始值
    },[])
    // const handleClick = (ev)=>{
    //     console.log(ev.target);
    // }
    // console.log('加载-------');
    
    const result = useMemo(()=>{
        return count * 100;
        //让这个计算只依赖于某个变量  如果其他变量变化 这个复杂的计算不会重新去加载
    },[count])
    return (
        <div onClick={handleClick}>
            {count} ------------------- {result}
        </div>
    )
}

export default Index;