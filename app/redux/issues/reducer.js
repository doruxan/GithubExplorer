import * as $ from "../actionTypes";

const initialState = {
    issues: [],
    hasNext:true,
    isProgress: true,
    fetching : false
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    if(type === $.ISSUES_REQUEST){
        return{
            ...state,
            fetching:true
        }
    }


    if (type === $.ISSUES_SUCCESS) {
        return {
            ...state,
            issues: [...state.issues, ...payload.data],
            hasNext:payload.hasNext,
            isProgress: false,
            fetching : false
        };
    }

    if (type === $.ISSUES_FAILURE) {
        return {
            ...state,
            issues: [],
            isProgress: false,
            fetching : false
        };
    }

    return state;
}