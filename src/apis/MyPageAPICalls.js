// MyPageAPICalls.js
const SERVER_IP = `${process.env.REACT_APP_RESTAPI_SERVER_IP}`;
const SERVER_PORT = `${process.env.REACT_APP_RESTAPI_SERVER_PORT}`;
const PRE_URL = `http://${SERVER_IP}:${SERVER_PORT}/skylift/myPage`;

export const callMyPageAPI = () => {
  const requestURL = `${PRE_URL}/membersAll`;


  return async (dispatch, getState) => {
    try {
      const response = await fetch(requestURL);
      const result = await response.json();

      if (response.status === 200) {
        // 요부분 타입은 만든 액션으로 바꾸기 
        dispatch({type: 'MyPage/GET_MEMBERS_ALL', payload: {totalMemberCount: result.data.totalMemberCount}});
      }
    } catch (error) {
      console.error('Failed to fetch member list:', error);
    }
  };
};

export const callGoToWorkAPI = ({id = 0}) => {
  const requestURL = `${PRE_URL}/attendance/${id}`;


  return async (dispatch, getState) => {
    try {
      const response = await fetch(requestURL, {method: 'POST'});
      // const result = await response.json();

      if (response.status === 200) {
        // 넘어온 시간값 넘기기
        dispatch({type: 'MyPage/POST_GO_TO_WORK', payload: {time: (new Date().toISOString())}});
      }
    } catch (error) {
      console.error('Failed to fetch member list:', error);
    }
  };
};


export const callEndWorkAPI = ({id = 0}) => {
  const requestURL = `${PRE_URL}/attendance/endTime/${id}`;

return async (dispatch, getState) => {
  try {
    const response = await fetch(requestURL, {method: 'PATCH'});
    // const result = await response.json();

    if (response.status === 200) {
      // 넘어온 시간값 넘기기
      dispatch({type: 'MyPage/END_WORK', payload: {time: (new Date().toISOString())}});
    }
  } catch (error) {
    console.error('Failed to fetch member list:', error);
  }
};

}