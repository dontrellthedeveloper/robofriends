import {CHANGE_SERACH_FIELD} from "./constant.js";

const initialState = {
    searchfield: ''
}

export const seatchRobots = (state=initialState, action={}) => {
    switch (action.type) {
        case: CHANGE_SERACH_FIELD:
            return Object.assign({}, state, searchfield: action.payload);
        default:
            return state;
    }
}