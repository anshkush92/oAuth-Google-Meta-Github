import { Routes, Route } from "react-router-dom";
import useFakeData from "./hooks/useFakeData";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BlogsPage from "./pages/BlogsPage";
import Page404 from "./pages/Page404";

const App = () => {
  const fakeData = useFakeData();
  // console.log(fakeData);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/blogs" element={<BlogsPage></BlogsPage>}></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
    </div>
  );
};

export default App;
