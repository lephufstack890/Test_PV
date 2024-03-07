const initialState = {
    list: null,
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STUDENT_SUCCESS':
            return {
                ...state,
                list: action.payload,
            }
        case 'STUDENT_FAILURE':
            return state
        default:
            return state
    }
};

export default studentReducer;
