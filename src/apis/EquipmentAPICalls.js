
const SERVER_IP = `${process.env.REACT_APP_RESTAPI_SERVER_IP}`;
const SERVER_PORT = `${process.env.REACT_APP_RESTAPI_SERVER_PORT}`;
const PRE_URL = `http://${SERVER_IP}:${SERVER_PORT}/skylift/equipment`;

export const callEquipmentListAPI = ({ currentPage = 1 }) =>
{
    const requestURL = `${PRE_URL}/equipmentList?page=${currentPage}`;

    return async (dispatch,getState) => {
        const result = await fetch(requestURL).then(resp => resp.json());
        
        if( result.status === 200)
        {
            console.log("[callEquipmentListAPI] result : ", result);
            dispatch(getEquipment(result));
        }

    };


}