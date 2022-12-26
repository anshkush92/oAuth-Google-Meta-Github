// Test -------------------------- Importing the Packages ---------------------------------

// Test -------------------------- Importing the styles / other components ----------------
import Signup from "../components/body/signup/Signup";
import Navbar from "../components/navbar/Navbar";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const SignupPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Signup></Signup>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default SignupPage;
