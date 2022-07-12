import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import useFakeData from "./hooks/useFakeData";
import Home from "./pages/Home";

const App = () => {
  const fakeData = useFakeData();
  console.log(fakeData);
  
  const fakeDataRedux = useAppSelector((state) => state.fakeData);
  console.log(fakeDataRedux);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
};

export default App;
