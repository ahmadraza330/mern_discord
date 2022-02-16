import { alertActions } from '../actions/alertAction';

const initialState = {
    showAlertMessage: false,
    alertMessageContent: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case alertActions.SHOW_ALERT:
            return {
                ...state,
                showAlertMessage: true,
                alertMessageContent: action.content,
            };
        case alertActions.CLOSE_ALERT:
            return {
                ...state,
                showAlertMessage: false,
                alertMessageContent: null,
            };
        default:
            return state;
    }
};

export default reducer;
