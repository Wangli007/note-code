export const userInitStore = {
    username:'wangLi'
}

const CHANGE = 'CHANGE';
export function userReducer (state = userInitStore,action){
    switch (action.type) {
        case CHANGE:
            return { username:action.username}
        default:
            return state;
    }
}