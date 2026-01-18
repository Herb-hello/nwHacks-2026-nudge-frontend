import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Home, Users, UtensilsCrossed, User, Plus, Minus } from 'lucide-react';
import PhoneFrame from '../components/phoneFrame';
import Navbar from '../components/navbar';

const RecipeFull = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [servings, setServings] = useState(1);

  const recipe = {
    title: "Greek Yogurt & Berries",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    poweredBy: "Google Gemini",
    ingredients: [
      { name: "Greek Yogurt", baseAmount: 1, unit: "cup" },
      { name: "Berries", baseAmount: 0.5, unit: "cup" },
      { name: "Raisin Bran Cereal", baseAmount: 0.5, unit: "cup" },
      { name: "Honey", baseAmount: 1, unit: "tablespoon" }
    ],
    instructions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus metus a porttitor.",
      "Duis eget mi eu leo gravida consectetur vitae sed nisi. Cras ultrices augue sed justo eleifend accumsan. Vestibulum leo tellus, pellentesque at eros quis, maximus ultrices ipsum.",
      "Praesent dictum pretium imperdiet. Nam vestibulum metus tortor, vitae aliquet elit dignissim in.",
      "Maecenas faucibus luctus enim, sed feugiat lorem finibus a. Suspendisse quis ligula eu dui iaculis congue at gravida mauris."
    ]
  };

  const adjustServings = (delta) => {
    setServings(Math.max(1, servings + delta));
  };

  const formatAmount = (baseAmount) => {
    const scaled = baseAmount * servings;
    // Format nicely - show fractions for common values
    if (scaled === Math.floor(scaled)) {
      return scaled.toString();
    }
    // Round to 2 decimal places and remove trailing zeros
    return parseFloat(scaled.toFixed(2)).toString();
  };

  const handleBackClick = () => {
    navigate('/inventory');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <PhoneFrame>
        <div className="relative w-full h-full bg-white overflow-hidden">
          <div className="w-full h-[calc(100%-56px)] overflow-y-auto scrollbar-hide">
            {/* Header */}
            <div className="flex px-10 pt-[69px] pb-6 w-full border-gray-200">
              <button onClick={handleBackClick} className="p-1 hover:bg-gray-100 rounded">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-bold">{recipe.title}</h1>
            </div>

            {/* Recipe Image */}
            <div className="relative">
              <img 
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] font-light text-black">
                <span>Powered by {recipe.poweredBy}</span>
                <img src="/Gemini-Symbol.png" alt="Gemini" className="w-3 h-3 object-contain" />
              </div>
            </div>

            {/* Content */}
            <div className="px-10 pt-6 pb-20">
              {/* Ingredients Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-black">Ingredients</h2>

                {/* Servings Adjuster */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3 bg-[#F5F5F5] rounded-full px-4 py-2">
                    <button
                      onClick={() => adjustServings(-1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-base w-8 text-center">{servings}</span>
                    <button
                      onClick={() => adjustServings(1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm font-medium">servings</span>
                </div>

                {/* Ingredients List */}
                <div className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-black">
                        {ingredient.name}
                      </span>
                      <span className="text-sm font-medium text-black text-right">
                        {formatAmount(ingredient.baseAmount)} {ingredient.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-black">Instructions</h2>
                <div className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="text-sm font-medium leading-5 text-black">
                      <span className="font-bold">{index + 1}. </span>
                      {instruction}
                    </div>
                  ))}
                </div>
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
};

export default RecipeFull;