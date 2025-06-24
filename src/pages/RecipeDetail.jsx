import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const recipeDetail = () => {
  const { id } = useParams();
  const [recipe, setrecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recipes")) || [];
    const found = stored.find((r) => r.id === parseInt(id));
    if (!found) return navigate("/");
    setrecipe(found);
  }, [id, navigate]);

  const handleDelete = () => {
    const stored = JSON.parse(localStorage.getItem("recipes")) || [];
    const updated = stored.filter((r) => r.id !== parseInt(id));
    localStorage.setItem("recipes", JSON.stringify(updated));
    navigate("/");
  };

  if (!recipe) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-md mt-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-h-[400px] object-contain bg-gray-100 rounded-xl mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-gray-500 text-sm mb-1">
        By {recipe.contributor} | {recipe.category}
      </p>

      <div className="flex gap-4 my-4">
        <Link to={`/edit/${recipe.id}`}>
          <Button className="bg-blue-500 hover:bg-blue-600">Edit</Button>
        </Link>

        <Button onClick={handleDelete} className="bg-red-500 hover:bg-red-600">
          Delete
        </Button>
      </div>

      <hr className="my-4" />
      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      <p className="text-gray-700 whitespace-pre-wrap">{recipe.description}</p>
    </div>
  );
};

export default recipeDetail;
