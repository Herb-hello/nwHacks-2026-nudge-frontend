import { useState } from 'react';

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
    <div className="w-full max-w-md mx-auto min-h-screen bg-white relative pb-20" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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

      {/* Bottom Navigation Bar */}
      <div className="w-full h-14 fixed bottom-0 left-0 bg-white border-t border-black/20">
        <div className="flex justify-center items-center gap-20 h-full px-12">
          {/* Home Icon */}
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3356 2.25259C11.7145 1.9158 12.2855 1.9158 12.6644 2.25259L21.6644 10.2526C22.0772 10.6195 22.1143 11.2516 21.7474 11.6644C21.3805 12.0771 20.7484 12.1143 20.3356 11.7474L20 11.4491V19C20 20.1046 19.1046 21 18 21H6.00001C4.89544 21 4.00001 20.1046 4.00001 19V11.4491L3.66437 11.7474C3.25159 12.1143 2.61952 12.0771 2.2526 11.6644C1.88568 11.2516 1.92286 10.6195 2.33565 10.2526L11.3356 2.25259ZM6.00001 9.67129V19H9.00001V14C9.00001 13.4477 9.44773 13 10 13H14C14.5523 13 15 13.4477 15 14V19H18V9.67129L12 4.33795L6.00001 9.67129ZM13 19V15H11V19H13Z" fill="#55525B"/>
            </svg>
          </button>

          {/* Inventory Icon */}
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4ZM4 8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8C16 11.3137 13.3137 14 10 14C6.68629 14 4 11.3137 4 8ZM16.8284 3.75736C17.219 3.36683 17.8521 3.36683 18.2426 3.75736C20.5858 6.1005 20.5858 9.8995 18.2426 12.2426C17.8521 12.6332 17.219 12.6332 16.8284 12.2426C16.4379 11.8521 16.4379 11.219 16.8284 10.8284C18.3905 9.26633 18.3905 6.73367 16.8284 5.17157C16.4379 4.78105 16.4379 4.14788 16.8284 3.75736ZM17.5299 16.7575C17.6638 16.2217 18.2067 15.8959 18.7425 16.0299C20.0705 16.3618 20.911 17.2109 21.3944 18.1778C21.8622 19.1133 22 20.1571 22 21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21C20 20.3429 19.8878 19.6367 19.6056 19.0722C19.339 18.5391 18.9295 18.1382 18.2575 17.9701C17.7217 17.8362 17.3959 17.2933 17.5299 16.7575ZM6.5 18C5.24054 18 4 19.2135 4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21C2 18.3682 3.89347 16 6.5 16H13.5C16.1065 16 18 18.3682 18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 19.2135 14.7595 18 13.5 18H6.5Z" fill="#55525B"/>
            </svg>
          </button>

          {/* Community Icon */}
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 4C16.2091 4 18 5.79086 18 8C18 10.2091 16.2091 12 14 12C11.7909 12 10 10.2091 10 8C10 5.79086 11.7909 4 14 4ZM20 8C20 4.68629 17.3137 2 14 2C10.6863 2 8 4.68629 8 8C8 11.3137 10.6863 14 14 14C17.3137 14 20 11.3137 20 8ZM7.17157 3.75736C6.78104 3.36683 6.14788 3.36683 5.75735 3.75736C3.41421 6.1005 3.41421 9.8995 5.75735 12.2426C6.14788 12.6332 6.78104 12.6332 7.17157 12.2426C7.56209 11.8521 7.56209 11.219 7.17157 10.8284C5.60947 9.26633 5.60947 6.73367 7.17157 5.17157C7.56209 4.78105 7.56209 4.14788 7.17157 3.75736ZM6.47014 16.7575C6.33619 16.2217 5.79326 15.8959 5.25747 16.0299C3.92954 16.3618 3.089 17.2109 2.60557 18.1778C2.13779 19.1133 2 20.1571 2 21C2 21.5523 2.44772 22 3 22C3.55228 22 4 21.5523 4 21C4 20.3429 4.11221 19.6367 4.39443 19.0722C4.661 18.5391 5.07046 18.1382 5.74253 17.9701C6.27833 17.8362 6.60409 17.2933 6.47014 16.7575ZM17.5 18C18.7595 18 20 19.2135 20 21C20 21.5523 20.4477 22 21 22C21.5523 22 22 21.5523 22 21C22 18.3682 20.1065 16 17.5 16H10.5C7.89347 16 6 18.3682 6 21C6 21.5523 6.44771 22 7 22C7.55229 22 8 21.5523 8 21C8 19.2135 9.24054 18 10.5 18H17.5Z" fill="#55525B"/>
            </svg>
          </button>

          {/* Recipes Icon - Active */}
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 16.5C2.73343 16.5 2.25 16.839 2.25 17.625C2.25 18.411 2.73343 18.75 3 18.75H15.75C16.0166 18.75 16.5 18.411 16.5 17.625C16.5 16.839 16.0166 16.5 15.75 16.5C15.3358 16.5 15 16.1642 15 15.75C15 15.3358 15.3358 15 15.75 15C17.14 15 18 16.3401 18 17.625C18 18.899 17.1545 20.2273 15.7853 20.2497C15.6752 20.9396 15.4091 21.5815 14.9805 22.0995C14.3879 22.8158 13.5192 23.25 12.4688 23.25H6.28125C5.23077 23.25 4.36208 22.8158 3.76949 22.0995C3.34094 21.5815 3.07478 20.9396 2.96473 20.2497C1.59547 20.2273 0.75 18.899 0.75 17.625C0.75 16.3401 1.61001 15 3 15C3.41421 15 3.75 15.3358 3.75 15.75C3.75 16.1642 3.41421 16.5 3 16.5ZM4.49362 20.25C4.58162 20.6067 4.73192 20.9096 4.92524 21.1433C5.23089 21.5128 5.6747 21.75 6.28125 21.75H12.4688C13.0753 21.75 13.5191 21.5128 13.8248 21.1433C14.0181 20.9096 14.1684 20.6067 14.2564 20.25H4.49362Z" fill="#55525B"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M11.2102 4.50503C11.6217 4.45718 11.994 4.75193 12.0419 5.16337L12.3906 8.16196C12.3987 8.23126 12.397 8.29945 12.3867 8.36517C13.3005 8.52979 14.1448 8.87323 14.8341 9.41039C15.8336 10.1894 16.4576 11.3402 16.4979 12.7875C16.8563 12.8602 17.1884 13.0368 17.4508 13.2992C17.8025 13.6508 18 14.1277 18 14.625C18 15.1223 17.8025 15.5992 17.4508 15.9508C17.0992 16.3025 16.6223 16.5 16.125 16.5H8.56066L7.41328 17.6474C7.41318 17.6475 7.41338 17.6473 7.41328 17.6474C7.32627 17.7344 7.22268 17.8038 7.10901 17.8509C6.99519 17.8981 6.87319 17.9223 6.75 17.9223C6.62681 17.9223 6.50481 17.8981 6.39099 17.8509C6.27732 17.8038 6.17403 17.7347 6.08701 17.6477C6.08692 17.6476 6.08711 17.6478 6.08701 17.6477L4.93934 16.5H2.625C2.12772 16.5 1.6508 16.3025 1.29917 15.9508C0.947544 15.5992 0.75 15.1223 0.75 14.625C0.75 14.1277 0.947544 13.6508 1.29917 13.2992C1.56151 13.0369 1.89357 12.8603 2.2518 12.7875C2.28942 11.3353 2.91431 10.1828 3.91705 9.40436C4.93023 8.61785 6.27756 8.25001 7.6875 8.25001H10.8907L10.5519 5.33665C10.504 4.92521 10.7988 4.55288 11.2102 4.50503ZM3.75403 12.75H14.9955C14.9485 11.7864 14.5375 11.081 13.912 10.5935C13.2257 10.0587 12.2294 9.75001 11.0625 9.75001H7.6875C6.51932 9.75001 5.52289 10.0567 4.83685 10.5893C4.20994 11.0759 3.7986 11.7817 3.75403 12.75ZM2.625 14.25C2.52554 14.25 2.43016 14.2895 2.35983 14.3598C2.28951 14.4302 2.25 14.5256 2.25 14.625C2.25 14.7245 2.28951 14.8198 2.35983 14.8902C2.43016 14.9605 2.52554 15 2.625 15H5.09484C5.39281 15.0001 5.67891 15.1185 5.88972 15.3291L6.75 16.1893L7.60998 15.3294C7.8208 15.1188 8.10684 15.0001 8.40481 15H16.125C16.2245 15 16.3198 14.9605 16.3902 14.8902C16.4605 14.8198 16.5 14.7245 16.5 14.625C16.5 14.5256 16.4605 14.4302 16.3902 14.3598C16.3198 14.2895 16.2245 14.25 16.125 14.25H2.625ZM6.35203 16.5873C6.35193 16.5874 6.35213 16.5872 6.35203 16.5873V16.5873ZM7.14797 16.5873C7.14787 16.5872 7.14807 16.5874 7.14797 16.5873V16.5873Z" fill="#55525B"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M21.782 4.50416C22.1939 4.54771 22.4925 4.91695 22.449 5.32886L20.7729 21.1806C20.7277 21.742 20.4736 22.2661 20.0606 22.6493C19.6445 23.0354 19.0978 23.25 18.5302 23.25H12C11.5858 23.25 11.25 22.9142 11.25 22.5C11.25 22.0858 11.5858 21.75 12 21.75H18.5301C18.7194 21.75 18.9016 21.6785 19.0403 21.5498C19.179 21.4211 19.2639 21.2447 19.278 21.056L19.2789 21.0446L20.9573 5.17114C21.0008 4.75922 21.3701 4.4606 21.782 4.50416Z" fill="#55525B"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M20.9133 1.25829C21.0468 1.65041 20.8371 2.07649 20.445 2.20998L18.6287 2.8283L17.9778 5.43189C17.8773 5.83374 17.4701 6.07806 17.0683 5.9776C16.6664 5.87714 16.4221 5.46993 16.5226 5.06809L17.2726 2.06809C17.3344 1.82097 17.5173 1.62209 17.7585 1.54L19.9616 0.790003C20.3537 0.656517 20.7798 0.866177 20.9133 1.25829Z" fill="#55525B"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.75 5.25C9.75 4.83579 10.0858 4.5 10.5 4.5H22.5C22.9142 4.5 23.25 4.83579 23.25 5.25C23.25 5.66421 22.9142 6 22.5 6H10.5C10.0858 6 9.75 5.66421 9.75 5.25Z" fill="#55525B"/>
            </svg>
          </button>

          {/* Profile Icon */}
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4ZM6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8ZM8 18C6.34315 18 5 19.3431 5 21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21C3 18.2386 5.23858 16 8 16H16C18.7614 16 21 18.2386 21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 19.3431 17.6569 18 16 18H8Z" fill="#55525B"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}