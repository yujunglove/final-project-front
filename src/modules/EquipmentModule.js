import { createActions, handleActions } from 'redux-actions';


const initialState = [];

const GET_EQUIPMENTS = 'equipment/GET_EQUUIPMENTS';

export const { equipment : { getEquipments } } = createActions({
    [GET_EQUIPMENTS] : res => res
});

const equipmentReducer = handleActions({
    [GET_EQUIPMENTS] : (state,{ payload }) => payload
},initialState);

export default equipmentReducer;