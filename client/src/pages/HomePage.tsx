// Test -------------------------- Importing the Packages ---------------------------------

// Test -------------------------- Importing the styles / other components ----------------
import Home from "../components/body/home/Home";
import Navbar from "../components/navbar/Navbar";
// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HomePage;
