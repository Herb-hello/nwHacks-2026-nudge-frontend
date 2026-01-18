import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import PhoneFrame from "../components/phoneFrame";

export default function RecipePage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const recipes = [
    {
      id: 1,
      title: "Greek Yogurt & Berries",
      category: "breakfast",
      ingredients: ["Greek Yogurt", "Berries", "Raisin Bran Cereal", "Honey"],
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Chicken Quesadillas",
      category: "lunch",
      ingredients: ["Tortilla", "Cheese", "Chicken"],
      image:
        "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Marry Me Pasta",
      category: "dinner",
      ingredients: [
        "Pasta",
        "Tomato Sauce",
        "Tomato Paste",
        "Cheese",
        "Chicken",
        "Basil",
      ],
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
    },
  ];

  const handleFilterClick = (filterType) => {
    setFilter(filter === filterType ? "all" : filterType);
  };

  const getFilteredRecipes = () => {
    if (filter === "all") return recipes;
    return recipes.filter((recipe) => recipe.category === filter);
  };

  const filteredRecipes = getFilteredRecipes();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <PhoneFrame>
        <div className="relative w-full h-full bg-white overflow-hidden">
          <div
            className="w-full h-[calc(100%-56px)] overflow-y-auto scrollbar-hide"
            data-name="RecipePage"
          >
            <div className="flex flex-col px-10 pt-16 pb-6 w-full">
              {/* Header */}
              <h2 className="text-2xl font-bold text-black mb-1">
                What's cookin' good lookin'...
              </h2>

              <h1 className="text-3xl font-bold text-black mb-6">Recipes</h1>

              {/* Filter Pills */}
              <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide">
                <button
                  onClick={() => handleFilterClick("breakfast")}
                  className={`px-6 py-1.5 rounded-full whitespace-nowrap ${
                    filter === "breakfast" ? "bg-[#A0A0A0]" : "bg-[#F5F5F5]"
                  }`}
                >
                  <span
                    className={`text-base text-black ${
                      filter === "breakfast" ? "font-bold" : "font-normal"
                    }`}
                  >
                    Breakfast
                  </span>
                </button>

                <button
                  onClick={() => handleFilterClick("lunch")}
                  className={`px-6 py-1.5 rounded-full whitespace-nowrap ${
                    filter === "lunch" ? "bg-[#A0A0A0]" : "bg-[#F5F5F5]"
                  }`}
                >
                  <span
                    className={`text-base text-black ${
                      filter === "lunch" ? "font-bold" : "font-normal"
                    }`}
                  >
                    Lunch
                  </span>
                </button>

                <button
                  onClick={() => handleFilterClick("dinner")}
                  className={`px-6 py-1.5 rounded-full whitespace-nowrap ${
                    filter === "dinner" ? "bg-[#A0A0A0]" : "bg-[#F5F5F5]"
                  }`}
                >
                  <span
                    className={`text-base text-black ${
                      filter === "dinner" ? "font-bold" : "font-normal"
                    }`}
                  >
                    Dinner
                  </span>
                </button>

                <button
                  onClick={() => handleFilterClick("quick")}
                  className={`px-6 py-1.5 rounded-full whitespace-nowrap ${
                    filter === "quick" ? "bg-[#A0A0A0]" : "bg-[#F5F5F5]"
                  }`}
                >
                  <span
                    className={`text-base text-black ${
                      filter === "quick" ? "font-bold" : "font-normal"
                    }`}
                  >
                    Quick
                  </span>
                </button>

                <button
                  onClick={() => handleFilterClick("few dishes")}
                  className={`px-6 py-1.5 rounded-full whitespace-nowrap ${
                    filter === "few dishes" ? "bg-[#A0A0A0]" : "bg-[#F5F5F5]"
                  }`}
                >
                  <span
                    className={`text-base text-black ${
                      filter === "few dishes" ? "font-bold" : "font-normal"
                    }`}
                  >
                    Few Dishes
                  </span>
                </button>
              </div>

              {/* Recipe Cards */}
              <div className="space-y-6 pb-6">
                {filteredRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="w-80 min-h-48 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black p-5"
                  >
                    {/* Recipe Title */}
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {recipe.title}
                    </h3>

                    {/* Content Area */}
                    <div className="flex justify-between">
                      {/* Ingredients List */}
                      <div>
                        <p className="text-sm font-light text-stone-500 mb-3">
                          Ingredients
                        </p>
                        <div className="text-sm font-medium text-black leading-5">
                          {recipe.ingredients.map((ingredient, index) => (
                            <div key={index}>{ingredient}</div>
                          ))}
                        </div>
                      </div>

                      {/* Recipe Image */}
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        onClick={() => navigate(`/recipes/${recipe.id}`)}
                        className="w-40 h-28 rounded-md outline outline-2 outline-zinc-300 object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navbar at bottom of phone frame */}
          <div className="absolute bottom-5 left-0 right-0 z-50">
            <Navbar />
          </div>
        </div>
      </PhoneFrame>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
