
import React, { useEffect } from 'react'
import PropTypes from "prop-types";

const Index = (props)=>{
    useEffect(()=>{
        console.log(props);
    },[])
    return(
    <div>example-{props.message}</div>
    )
}


// 设置message为可选参数
// interface Props {
//     message?: string;
//   }
//   // 设置默认的message为default message
Index.defaultProps = {
    message: 123
};
Index.displayName = "Lifa";

Index.propTypes = {
    message: PropTypes.number
};

console.log(Index);

export default Index