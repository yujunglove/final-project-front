import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./Pages/Main";
import MyPage from "./Pages/myPagepage/MyPage";
import SubLayout from "./layouts/SubLayout";
import MyToDoList from "./Pages/myPagepage/MyToDoList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={ <Main/> } />
        </Route>
        <Route path="/mypage" element={<SubLayout/>}>
          <Route index element={ <MyPage/> } />
        </Route>
        <Route path="/mytodo" element={<SubLayout/>}>
          <Route index element={ <MyToDoList/> } />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
