export const countInitStore = {
    count:0
}

const ADD = 'ADD';

export function countReducer (state = countInitStore,action){
    switch (action.type) {
        case ADD:
            return { count:state.count + action.num || 1 }
        default:
            return state;
    }
}
