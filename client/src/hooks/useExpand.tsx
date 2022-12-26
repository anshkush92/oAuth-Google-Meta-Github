// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const useExpand = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return { isExpanded, setIsExpanded };
};

// Test -------------------------- Exporting the current component ------------------------
export default useExpand;
