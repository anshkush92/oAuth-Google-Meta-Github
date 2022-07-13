// Test -------------------------- Importing the Packages ---------------------------------

// Test -------------------------- Importing the styles / other components ----------------
import Navbar from "../components/navbar/Navbar";
import CompleteCards from "../components/body/cards/CompleteCards";
import Footer from "../components/footer/Footer";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const BlogsPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <CompleteCards></CompleteCards>
      <Footer></Footer>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default BlogsPage;
