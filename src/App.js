import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./Pages/Main";
import MyPage from "./Pages/myPage/MyPage";
import SubLayout from "./layouts/SubLayout";
import MyToDoList from "./Pages/myPage/MyToDoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main />} />
          <Route path="/myPage" element={<SubLayout />}>
            <Route element={<MyPage />} />
            <Route path="/myPage/myToDoList" element={<MyToDoList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
