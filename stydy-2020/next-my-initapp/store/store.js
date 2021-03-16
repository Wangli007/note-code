
//** combineReducers 用来合并reducer的   applyMiddleware 用来扩展一些reduxThunk类似的插件的  */
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
//reduxThunk 创建一个异步的 dispatch

import { countReducer, countInitStore } from "./reducers/count";
import { userInitStore, userReducer } from "./reducers/user";

const allReducers = combineReducers({  //把不同的reducer合成一个
    counter: countReducer,
    user: userReducer
})



// console.log(store);


// store.dispatch({type:"ADD"}); 
// store.dispatch({type:"CHANGE",userName:"yuHua"});

function syncAdd(num) {
    return (dispatch, getState) => {
        setTimeout(() => {
            console.log(getState(), "111111111111");
            dispatch({ type: "ADD", num })
        }, 1000)
    }
}

// store.dispatch(syncAdd(3));

// console.log(store.getState(),"store.getState()");


export default function initializeStore(state) {
    const store = createStore(
        allReducers,
        Object.assign(
            {},
            {
                user: userInitStore,
                counter: countInitStore,
            },
            state
        ),
        applyMiddleware(reduxThunk)
    )

    store.subscribe(() => {  //订阅
        console.log("updata", store.getState());
    })
    // store.dispatch(syncAdd(3));

    return store
}