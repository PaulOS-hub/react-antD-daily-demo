import * as Type from './action-type'

let defaultState = {
    name: "paul",
    age: 20,
    userList: []
}

export const savedData = (state = defaultState, action = {}) => {
    console.log(action)
    switch (action.type) {
        case Type.SAVEFORM:
            return { ...state, ...action.payload }
        case Type.GETLIST:
            return { ...state, userList: action.payload }
        default:
            return state;
    }
}