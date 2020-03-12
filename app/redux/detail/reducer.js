import * as $ from "../actionTypes";

const initialState = {
    detail: {},
    readMe: '',
    isProgress: false
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    if (type === $.SET_DETAIL_ITEM) {
        return {
            ...state,
            detail: payload,
        };
    }

    if (type === $.README_REQUEST) {
        return {
            ...state,
            readMe: '',
            isProgress: true
        };
    }

    if (type === $.README_SUCCESS) {
        return {
            ...state,
            readMe: payload,
            isProgress: false
        };
    }

    if (type === $.README_FAILURE) {
        return {
            ...state,
            readMe: '',
            isProgress: false
        };
    }

    return state;
}