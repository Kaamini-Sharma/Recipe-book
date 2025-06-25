import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useAuth } from "@/context/AuthProvider";
import Home from "@/pages/Home";
import AddRecipe from "@/pages/AddRecipe";
import EditRecipe from "@/pages/EditRecipe";
import RecipeDetail from "@/pages/RecipeDetail";
// import Login from "@/pages/Login";
// import { AuthProvider } from "@/context/AuthProvider";

function App() {
  return (
    <Router>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <Link to="/" className="text-black-900 hover:underline">
          Recipe-Book
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
          <Link to="/add" className="text-blue-500 hover:underline">
            Add Recipe
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
