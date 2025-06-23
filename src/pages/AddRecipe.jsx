import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    contributor: "",
    category: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("recipes") || "[]");
    const newRecipe = { ...recipe, id: Date.now() };
    localStorage.setItem("recipes", JSON.stringify([...stored, newRecipe]));
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={recipe.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
              setRecipe({ ...recipe, image: reader.result });
            };
            if (file) reader.readAsDataURL(file);
          }}
          className="w-full p-2 border rounded"
        />

        {recipe.image && (
          <img
            src={recipe.image}
            alt="Preview"
            className="w-full max-h-[400px] object-contain bg-gray-100 rounded-xl mb-4"
          />
        )}

        <input
          type="text"
          name="contributor"
          placeholder="Contributor Name"
          value={recipe.contributor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Dessert)"
          value={recipe.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Enter full recipe instructions"
          value={recipe.description}
          onChange={handleChange}
          className="w-full p-2 border rounded min-h-[100px]"
          required
        />

        <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
          Save Recipe
        </Button>
      </form>
    </div>
  );
};

export default AddRecipe;
