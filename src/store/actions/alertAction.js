export const alertActions = {
    SHOW_ALERT: 'SHOW_ALERT',
    CLOSE_ALERT: 'CLOSE_ALERT',
};


export const getActions = (dispatch) => {
    return {
        openAlertMessage: (content) => dispatch(openAlertMessage(content)),
        closeAlertMessage: () => dispatch(closeAlertMessage()),
    };
}

export const openAlertMessage = (content) => {
    return {
        type: alertActions.SHOW_ALERT,
        content
    };
};

export const closeAlertMessage = () => {
 return {
     type: alertActions.CLOSE_ALERT,
 };
};