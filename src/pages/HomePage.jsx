import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Recipe Card Component
function RecipeCard({ recipe, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="min-w-[164px] h-[107px] bg-white rounded-[10px] shadow-[0px_2px_8px_rgba(0,0,0,0.1)] cursor-pointer overflow-hidden flex-shrink-0"
    >
      <img 
        src={recipe.image || 'https://placehold.co/164x107'} 
        alt={recipe.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  
  // Sample recipe data
  const [recipes] = useState([
    { id: 1, name: 'Greek Yogurt & Berries', image: 'https://placehold.co/164x107' },
    { id: 2, name: 'Avocado Toast', image: 'https://placehold.co/164x107' },
    { id: 3, name: 'Smoothie Bowl', image: 'https://placehold.co/164x107' },
    { id: 4, name: 'Pancakes', image: 'https://placehold.co/164x107' },
    { id: 5, name: 'Oatmeal', image: 'https://placehold.co/164x107' }
  ]);

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <div className="w-96 min-h-[932px] bg-white relative overflow-hidden mx-auto">
      {/* Good morning Header */}
      <div className="px-[41px] pt-[62px]">
        <div className="w-60 h-16">
          <span className="text-black text-2xl font-bold">Good morning,<br/></span>
          <span className="text-black text-3xl font-bold">Kylie</span>
        </div>
      </div>

      {/* Breakfast Ideas Text */}
      <div className="px-[42px] pt-[29px]">
        <p className="text-black text-sm font-normal">
          Since it's 8:00am, here are some breakfast ideas:
        </p>
      </div>

      {/* Swipeable Recipe Cards */}
      <div className="px-[42px] pt-[29px]">
        <div className="overflow-x-auto scrollbar-hide -mx-[42px] px-[42px]">
          <div className="flex gap-4 pb-2">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => handleRecipeClick(recipe.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fridge Vitals Section */}
      <div className="px-[41px] pt-[71px]">
        <h2 className="text-black text-3xl font-bold mb-[53px]">
          Fridge Vitals
        </h2>

        {/* Household Card */}
        <div className="w-80 h-36 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black mb-[27px]">
          <div className="px-6 pt-[19px]">
            <div className="flex justify-between items-start mb-[10px]">
              <h3 className="text-black text-2xl font-bold">
                Li Household
              </h3>
              <div className="bg-[#FFCECE] rounded-full px-[16px] py-[4px]">
                <span className="text-red-500 text-base font-normal">
                  GOING SOON
                </span>
              </div>
            </div>
            <div className="text-black text-base font-normal leading-5">
              4 Apples<br/>
              5 Bananas<br/>
              1 Black Forest Ham
            </div>
          </div>
        </div>

        {/* Temperature and Humidity Cards */}
        <div className="flex gap-[10px]">
          {/* Temperature Card */}
          <div className="w-40 h-24 bg-orange-200 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black p-[10px]">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-black text-2xl font-bold mb-1">3°C</div>
                <div className="text-black text-base font-normal leading-tight">
                  Ambient<br/>Temperature
                </div>
              </div>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className="mt-1">
                <path d="M13.2812 23.4375C12.0769 23.438 10.9061 23.041 9.95052 22.3081C8.99492 21.5752 8.30798 20.5473 7.99633 19.384C7.68467 18.2207 7.76572 16.9871 8.2269 15.8745C8.68808 14.762 9.50359 13.8329 10.5469 13.2313L10.9375 13.0063V3.90625C10.9354 3.35344 11.1292 2.81775 11.4846 2.39434C11.8401 1.97092 12.3341 1.68718 12.8789 1.5935C13.4237 1.49983 13.9841 1.60228 14.4605 1.88266C14.937 2.16305 15.2986 2.60322 15.4812 3.125H13.2812V4.6875H15.625V6.25H13.2812V7.8125H15.625V9.375H13.2812V10.9375H15.625V13.0063L16.0156 13.2313C17.0589 13.8329 17.8744 14.762 18.3356 15.8745C18.7968 16.9871 18.8778 18.2207 18.5662 19.384C18.2545 20.5473 17.5676 21.5752 16.612 22.3081C15.6564 23.041 14.4856 23.438 13.2812 23.4375ZM17.1875 12.1219V3.90625C17.1875 2.87025 16.7759 1.87668 16.0434 1.14411C15.3108 0.41155 14.3173 0 13.2812 0C12.2452 0 11.2517 0.41155 10.5191 1.14411C9.78655 1.87668 9.375 2.87025 9.375 3.90625V12.1219C8.12075 12.9599 7.16925 14.1791 6.66105 15.5994C6.15285 17.0196 6.11488 18.5657 6.55275 20.0092C6.99062 21.4527 7.88111 22.7172 9.09271 23.6157C10.3043 24.5143 11.7728 24.9995 13.2812 24.9995C14.7897 24.9995 16.2582 24.5143 17.4698 23.6157C18.6814 22.7172 19.5719 21.4527 20.0098 20.0092C20.4476 18.5657 20.4097 17.0196 19.9015 15.5994C19.3932 14.1791 18.4418 12.9599 17.1875 12.1219Z" fill="black"/>
                <path d="M13.2812 14.0625C14.3173 14.0625 15.3108 14.4741 16.0434 15.2066C16.7759 15.9392 17.1875 16.9327 17.1875 17.9688C17.1875 19.0048 16.7759 19.9983 16.0434 20.7309C15.3108 21.4634 14.3173 21.875 13.2812 21.875C12.2452 21.875 11.2517 21.4634 10.5191 20.7309C9.78655 19.9983 9.375 19.0048 9.375 17.9688C9.375 16.9327 9.78655 15.9392 10.5191 15.2066C11.2517 14.4741 12.2452 14.0625 13.2812 14.0625Z" fill="black"/>
              </svg>
            </div>
          </div>

          {/* Humidity Card */}
          <div className="w-40 h-24 bg-orange-200 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black p-[10px]">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-black text-2xl font-bold mb-1">35%</div>
                <div className="text-black text-base font-normal leading-tight">
                  Fridge<br/>Humidity
                </div>
              </div>
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" className="mt-1">
                <path d="M13.1596 0.822662C8.4581 7.24926 5.75854 13.1654 5.75854 18.0273C5.75854 22.1538 9.0755 25.5024 13.1629 25.5024C17.2535 25.5024 20.5664 22.1538 20.5664 18.0273C20.5664 13.1654 17.7879 7.15013 13.1596 0.822662Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Routines Section */}
      <div className="px-[40px] pt-[114px] pb-[66px]">
        <h2 className="text-black text-3xl font-bold mb-[58px]">
          Routines
        </h2>

        {/* Routine Card */}
        <div className="w-80 h-11 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black flex items-center px-4 gap-4">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <g clipPath="url(#clip0_23_92)">
              <path d="M3 16.5C2.73343 16.5 2.25 16.839 2.25 17.625C2.25 18.411 2.73343 18.75 3 18.75H15.75C16.0166 18.75 16.5 18.411 16.5 17.625C16.5 16.839 16.0166 16.5 15.75 16.5C15.3358 16.5 15 16.1642 15 15.75C15 15.3358 15.3358 15 15.75 15C17.14 15 18 16.3401 18 17.625C18 18.899 17.1545 20.2273 15.7853 20.2497C15.6752 20.9396 15.4091 21.5815 14.9805 22.0995C14.3879 22.8158 13.5192 23.25 12.4688 23.25H6.28125C5.23077 23.25 4.36208 22.8158 3.76949 22.0995C3.34094 21.5815 3.07478 20.9396 2.96473 20.2497C1.59547 20.2273 0.75 18.899 0.75 17.625C0.75 16.3401 1.61001 15 3 15C3.41421 15 3.75 15.3358 3.75 15.75C3.75 16.1642 3.41421 16.5 3 16.5ZM4.49362 20.25C4.58162 20.6067 4.73192 20.9096 4.92524 21.1433C5.23089 21.5128 5.6747 21.75 6.28125 21.75H12.4688C13.0753 21.75 13.5191 21.5128 13.8248 21.1433C14.0181 20.9096 14.1684 20.6067 14.2564 20.25H4.49362Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M11.2102 4.50503C11.6217 4.45718 11.994 4.75193 12.0419 5.16337L12.3906 8.16196C12.3987 8.23126 12.397 8.29945 12.3867 8.36517C13.3005 8.52979 14.1448 8.87323 14.8341 9.41039C15.8336 10.1894 16.4576 11.3402 16.4979 12.7875C16.8563 12.8602 17.1884 13.0368 17.4508 13.2992C17.8025 13.6508 18 14.1277 18 14.625C18 15.1223 17.8025 15.5992 17.4508 15.9508C17.0992 16.3025 16.6223 16.5 16.125 16.5H8.56066L7.41328 17.6474C7.41318 17.6475 7.41338 17.6473 7.41328 17.6474C7.32627 17.7344 7.22268 17.8038 7.10901 17.8509C6.99519 17.8981 6.87319 17.9223 6.75 17.9223C6.62681 17.9223 6.50481 17.8981 6.39099 17.8509C6.27732 17.8038 6.17403 17.7347 6.08701 17.6477C6.08692 17.6476 6.08711 17.6478 6.08701 17.6477L4.93934 16.5H2.625C2.12772 16.5 1.6508 16.3025 1.29917 15.9508C0.947544 15.5992 0.75 15.1223 0.75 14.625C0.75 14.1277 0.947544 13.6508 1.29917 13.2992C1.56151 13.0369 1.89357 12.8603 2.2518 12.7875C2.28942 11.3353 2.91431 10.1828 3.91705 9.40436C4.93023 8.61785 6.27756 8.25001 7.6875 8.25001H10.8907L10.5519 5.33665C10.504 4.92521 10.7988 4.55288 11.2102 4.50503Z" fill="black"/>
            </g>
          </svg>
          <div className="text-black text-base font-normal">
            <span className="font-bold">Breakfast:</span> 8:00am | 15 min prep
          </div>
        </div>
      </div>

      {/* Add CSS to hide scrollbar */}
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