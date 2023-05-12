import { createActions, handleActions } from "redux-actions";

const initialState = [];

const GET_MEMBERS = 'member/GET_MEMBERS';

export const { member : {getMembers}} = createActions({
    [GET_MEMBERS] : res => res.data,
});

const memberReducer = handleActions(
    {
        [GET_MEMBERS] : (state, {payload}) => payload,
    }
    , initialState);

export default memberReducer;