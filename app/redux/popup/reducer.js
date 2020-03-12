import * as $ from "../actionTypes";

const INITIAL_STATE = {
    message: '',
}

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    if (type === $.SET_POPUP) {
        return {
            ...state,
            message: payload
        }
    }

    if (type === $.RESET_POPUP) {
        return INITIAL_STATE
    }

    return state;
}