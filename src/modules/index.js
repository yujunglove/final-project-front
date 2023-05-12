import { combineReducers } from "redux";
import memberReducer from "./MemberModule";
import myPageReducer from "./MyPageModule";

const rootReducer = combineReducers({
    memberReducer,
    myPageReducer
});

export default rootReducer;