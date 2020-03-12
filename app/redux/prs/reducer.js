import * as $ from "../actionTypes";

const initialState = {
    prs: [],
    hasNext:true,
    isProgress: true,
    fetching:false
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    if(type === $.PRS_REQUEST){
        return{
            ...state,
            fetching:true
        }
    }

    if (type === $.PRS_SUCCESS) {
        return {
            ...state,
            prs: [...state.prs, ...payload.data],
            hasNext:payload.hasNext,
            isProgress: false,
            fetching:false
        };
    }

    if (type === $.PRS_FAILURE) {
        return {
            ...state,
            prs: [],
            isProgress: false,
            fetching:false
        };
    }

    return state;
}