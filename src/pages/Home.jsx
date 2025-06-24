import { useEffect, useState } from "react";
import recipeCard from "@/components/ui/recipeCard";
import { motion } from "framer-motion";

const Home = () => {
  const [recipes, setrecipes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recipes")) || [];
    setrecipes(stored);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        🍽 recipe Sharing Book
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, i) => (
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <recipeCard recipe={recipe} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
