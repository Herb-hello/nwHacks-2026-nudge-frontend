import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupNavigationButton from '../components/navbutton';

export default function Signup3() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRestrictions, setSelectedRestrictions] = useState([]);

  // Common dietary restrictions list
  const dietaryRestrictions = [
    "None",
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Lactose Intolerant",
  ];

  const toggleRestriction = (restriction) => {
    // If "None" is selected, clear all other selections
    if (restriction === "None") {
      setSelectedRestrictions(["None"]);
      return;
    }

    setSelectedRestrictions((prev) => {
      // Remove "None" if another option is selected
      const filtered = prev.filter((r) => r !== "None");

      if (filtered.includes(restriction)) {
        const updated = filtered.filter((r) => r !== restriction);
        // If no restrictions selected, default to "None"
        return updated.length === 0 ? ["None"] : updated;
      } else {
        return [...filtered, restriction];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can store selectedRestrictions in context, localStorage, or pass to next page
    console.log('Selected dietary restrictions:', selectedRestrictions);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-100 relative">
        {/* Decorative dots at top */}
        <div className="flex gap-3 mb-6 justify-center">
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-7 h-2 rounded-full bg-gray-300" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 max-w-80 mx-auto">
          Do you have any dietary restrictions?
        </h1>

        {/* Subtitle */}
        <p className="text-stone-500 text-sm font-light mb-8 max-w-80 mx-auto">
          You can change your dietary restrictions at any time. Just go to your 'Profile' page.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col items-center space-y-5">
            {/* Dietary Restriction Options */}
            {dietaryRestrictions.map((restriction) => (
              <button
                key={restriction}
                type="button"
                onClick={() => toggleRestriction(restriction)}
                className={`w-80 h-16 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black flex items-center justify-between px-6 transition-colors ${
                  selectedRestrictions.includes(restriction)
                    ? 'bg-yellow-100'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <span className="text-2xl text-black">{restriction}</span>
                {selectedRestrictions.includes(restriction) && (
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <circle cx="17.5" cy="17.5" r="17.5" fill="#F5CF64"/>
                    <path d="M10 17.5L15 22.5L25 12.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}

            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search...."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-80 h-16 bg-neutral-100 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black px-6 text-2xl placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Next Button */}
          <SignupNavigationButton 
            currentStep={3} 
            onSubmit={handleSubmit} 
          />
        </form>
      </div>
    </div>
  );
}
