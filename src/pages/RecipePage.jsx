import { useState } from 'react';
import Navbar from '../components/navbar';

export default function RecipePage() {
  const [filter, setFilter] = useState('all');

  const recipes = [
    {
      id: 1,
      title: 'Greek Yogurt & Berries',
      category: 'breakfast',
      ingredients: ['Greek Yogurt', 'Berries', 'Raisin Bran Cereal', '...'],
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Chicken Quesadillas',
      category: 'lunch',
      ingredients: ['Tortilla', 'Cheese', 'Chicken', '...'],
      image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Marry Me Pasta',
      category: 'dinner',
      ingredients: ['Pasta', 'Tomato Sauce', 'Chicken', '...'],
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop'
    }
  ];

  const handleFilterClick = (filterType) => {
    setFilter(filter === filterType ? 'all' : filterType);
  };

  const getFilteredRecipes = () => {
    if (filter === 'all') return recipes;
    return recipes.filter(recipe => recipe.category === filter);
  };

  const filteredRecipes = getFilteredRecipes();

  return (
    <div className="w-[430px] h-[932px] bg-white relative overflow-y-auto mx-auto pb-20" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
        div {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {/* Header */}
      <div className="px-10 pt-16">
        <h2 className="text-2xl font-bold text-black mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          What's cookin' good lookin'...
        </h2>
        
        <h1 className="text-3xl font-bold text-black mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Recipes
        </h1>

        {/* Filter Pills */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => handleFilterClick('breakfast')}
            className="px-6 py-1.5 rounded-full bg-[#F5F5F5]"
          >
            <span className="text-base font-normal text-black" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Breakfast
            </span>
          </button>
          
          <button
            onClick={() => handleFilterClick('lunch')}
            className="px-6 py-1.5 rounded-full bg-[#F5F5F5]"
          >
            <span className="text-base font-normal text-black" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Lunch
            </span>
          </button>
          
          <button
            onClick={() => handleFilterClick('quick')}
            className="px-6 py-1.5 rounded-full bg-[#F5F5F5]"
          >
            <span className="text-base font-normal text-black" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Quick
            </span>
          </button>
        </div>

        {/* Recipe Cards */}
        <div className="space-y-6 pb-6">
          {filteredRecipes.map(recipe => (
            <div 
              key={recipe.id}
              className="w-80 h-48 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black p-5"
            >
              {/* Recipe Title */}
              <h3 className="text-2xl font-bold text-black mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {recipe.title}
              </h3>

              {/* Content Area */}
              <div className="flex justify-between">
                {/* Ingredients List */}
                <div>
                  <p className="text-sm font-light text-stone-500 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Ingredients
                  </p>
                  <div className="text-sm font-medium text-black leading-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {recipe.ingredients.map((ingredient, index) => (
                      <div key={index}>{ingredient}</div>
                    ))}
                  </div>
                </div>

                {/* Recipe Image */}
                <img 
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-40 h-28 rounded-md outline outline-2 outline-zinc-300 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Navbar />
    </div>
  );
}