import { createActions, handleActions } from 'redux-actions';

// 리덕스는 공통의 저장공간
// 에이피아이 호출한걸 단순히 리덕스에 담고 불러오는 모듈

// Initial state
const initialState = {
  totalMemberCount: 0,
  time: ''
};

// Action types
const GET_MEMBERS_ALL = 'MyPage/GET_MEMBERS_ALL';
const POST_GO_TO_WORK = 'MyPage/POST_GO_TO_WORK';
const PATCH_END_WORK = 'MyPage/END_WORK';

// Action creators
export const data = createActions({
  [GET_MEMBERS_ALL]: (totalMemberCount) => {
    console.log(totalMemberCount)
    return ({ totalMemberCount })
  }, 
  // const data = createActions({ 이부분 만든 액션을 사용해서 에이피아이 호출한곳에서 적용
  

  // createActions으로 어떤 행위를 할지 명시
  // handleActions으로 어떤 행위에 대해서 어떤 작업을 할지를 명시 => 대게 스토어에 저장하거나 넘어온 데이터를 가공해서 저장하는 용도
  // 그리고 에이피아이콜 파일에서는 이 2개를 사용해서 서버에서 넘어온 데이터를 저장해줘! 라고 호출
  // 마지막으로 저장한 데이터를 useSelector를 사용해서 화면에 데이터를 보여주기
  [POST_GO_TO_WORK]: (data) => {
    console.log(data)
    return ({})
  },

  [PATCH_END_WORK]: (data) => {
    console.log(data)
    return ({})
  }
});

// Reducer
const myPageReducer = handleActions(
  {
    [GET_MEMBERS_ALL]: (state, {payload: {totalMemberCount}}) => {
      return ({
      ...state,
      totalMemberCount,
      })
    },
    [POST_GO_TO_WORK]: (state, {payload: {time}}) => {
      return ({
        ...state,
        time,
      })
    },
    [PATCH_END_WORK]: (state, {payload: {time}}) => {
      return ({
        ...state,
        time,
      })
    },
  },
  initialState
);


export default myPageReducer;