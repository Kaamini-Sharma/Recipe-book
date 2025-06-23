import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/Card";

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <Card className="rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300 bg-white">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-contain bg-gray-100"
        />
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-1">{recipe.title}</h2>
          <p className="text-sm text-gray-600">
            Shared by: {recipe.contributor}
          </p>
          <p className="text-xs mt-1 text-gray-400 uppercase">
            {recipe.category}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RecipeCard;
