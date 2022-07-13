import { Routes, Route } from "react-router-dom";
import useFakeData from "./hooks/useFakeData";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BlogsPage from "./pages/BlogsPage";

const App = () => {
  const fakeData = useFakeData();
  console.log(fakeData);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/blogs" element={<BlogsPage></BlogsPage>}></Route>
      </Routes>
    </div>
  );
};

export default App;
