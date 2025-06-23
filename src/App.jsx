import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "@/pages/Home";
import AddRecipe from "@/pages/AddRecipe";
import RecipeDetail from "@/pages/RecipeDetail";
import EditRecipe from "@/pages/EditRecipe";
import { Soup } from "lucide-react";
// import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold hover:text-orange-600 transition"
        >
          <Soup className="w-6 h-6 text-orange-500" />
          Recipe Book
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
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="*" element={<div className="p-8">Page Not Found </div>} />
      </Routes>
    </Router>
  );
}

export default App;
