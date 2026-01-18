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
      <div className="flex gap-1 self-end mt-2 text-xs font-light text-right text-black items-center">
        <div>Powered by Google Gemini</div>
        <img
          src="/Gemini-Symbol.png"
          alt="Gemini"
          className="w-3.5 h-3.5 object-contain"
        />
      </div>
    </div>
  );
}
