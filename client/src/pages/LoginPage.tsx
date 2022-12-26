// Test -------------------------- Importing the Packages ---------------------------------

// Test -------------------------- Importing the styles / other components ----------------
import Navbar from "../components/navbar/Navbar";
import Login from "../components/body/login/login";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const LoginPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Login></Login>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default LoginPage;
