import * as $ from "../actionTypes";

const initialState = {
    repos: [],
    hasNext:true,
    isProgress: true,
    fetching:false,
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    if(type === $.REPOS_REQUEST){
        return{
            ...state,
            fetching:true
        }
    }

    if (type === $.REPOS_SUCCESS) {
        return {
            ...state,
            repos: [...state.repos, ...payload.data],
            hasNext:payload.hasNext,
            isProgress: false,
            fetching:false
        };
    }

    if (type === $.REPOS_FAILURE) {
        return {
            ...state,
            repos: [],
            isProgress: false,
            fetching:false
        };
    }

    return state;
}