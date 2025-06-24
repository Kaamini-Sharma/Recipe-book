import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Editrecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setrecipe] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recipes")) || [];
    const found = stored.find((r) => r.id === parseInt(id));
    if (!found) return navigate("/");
    setrecipe(found);
  }, [id, navigate]);

  const handleChange = (e) => {
    setrecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("recipes")) || [];
    const updated = stored.map((r) => (r.id === recipe.id ? recipe : r));
    localStorage.setItem("recipes", JSON.stringify(updated));
    navigate(`/recipe/${recipe.id}`);
  };

  if (!recipe) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
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
              setrecipe({ ...recipe, image: reader.result });
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
          value={recipe.contributor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          value={recipe.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={recipe.description}
          onChange={handleChange}
          className="w-full p-2 border rounded min-h-[100px]"
          required
        />
        <Button type="submit" className="bg-green-500 hover:bg-green-600">
          Update recipe
        </Button>
      </form>
    </div>
  );
};

export default Editrecipe;
