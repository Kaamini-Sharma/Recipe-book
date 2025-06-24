import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Assuming you have a Home component
import AddRecipe from "./pages/AddRecipe"; // Assuming you have an AddRecipe component
import RecipeDetail from "./pages/RecipeDetail"; // Example for a detail page

function App() {
  return (
    <Router basename="/recipe-book">
      {" "}
      {/* Add this basename */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        {/* Add any other routes you have */}
        <Route path="*" element={<Home />} /> {/* Fallback to home */}
      </Routes>
    </Router>
  );
}

export default App;
