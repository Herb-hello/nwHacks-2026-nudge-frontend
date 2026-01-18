export default function RecipeCard({ recipe, onClick }) {
  return (
    <div
      className="flex-shrink-0 w-[280px] flex flex-col px-5 pt-4 pb-2.5 bg-orange-50 rounded-2xl border border-black border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer"
      onClick={onClick}
    >
      <div className="text-xl font-bold text-black line-clamp-1">
        {recipe.title}
      </div>
      <div className="flex gap-3 mt-3 text-sm">
        <div className="flex flex-col self-start flex-1">
          <div className="font-light text-stone-500">Ingredients</div>
          <div className="mt-2 font-medium leading-5 text-black line-clamp-4">
            {recipe.ingredients.map((ingredient, index) => (
              <span key={index}>
                {ingredient}
                {index < recipe.ingredients.length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="object-cover shrink-0 rounded-md aspect-square shadow-[3px_4px_3px_rgba(0,0,0,0.25)] w-[100px] h-[100px]"
        />
      </div>
      <div className="flex gap-0.5 self-end mt-2 text-xs font-light text-right text-black">
        <div>Powered by Google Gemini</div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#4285F4"
          />
        </svg>
      </div>
    </div>
  );
}
