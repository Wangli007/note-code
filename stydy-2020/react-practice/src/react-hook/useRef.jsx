import React, { forwardRef } from 'react'
import { useEffect,useRef } from 'react'

const Input = forwardRef((props,ref)=>{
    return (
        <input ref={ref} {...props}></input>
    )
})

const Index = ()=>{
    //控制子元素是否自动获取焦点  控制的时候应该是在父元素内这样去做
    const inputEl = useRef(null)
    useEffect(()=>{
        // console.log(inputEl);
        inputEl.current.focus();
    })
    return (
        <>
        <Input style={{border:"1px solid #00b388"}} ref={inputEl}></Input>
        </>
    )
}

export default Index;