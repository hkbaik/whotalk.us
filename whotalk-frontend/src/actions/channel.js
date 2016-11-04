import CHANNEL from './ActionTypes/channel';
import { createAction } from 'redux-actions';
import * as service from 'services/channel';


export const initialize = createAction(CHANNEL.INITIALIZE);
export const setIdentity = createAction(CHANNEL.SET_IDENTITY);
export const checkValidity = (username) => ({
    type: CHANNEL.CHECK_VALIDITY,
    payload: {
        promise: service.checkValidity(username)
    }
});

export const setSocketState = createAction(CHANNEL.SET_SOCKET_STATE);

export const receiveRealtimeData = createAction(CHANNEL.RECEIVE_REALTIME_DATA);
export const writeMessage = createAction(CHANNEL.WRITE_MESSAGE);
export const messageFailure = createAction(CHANNEL.MESSAGE_FAILURE);
export const removeMessage = createAction(CHANNEL.REMOVE_MESSAGE);
