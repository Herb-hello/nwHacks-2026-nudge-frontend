import { useState } from 'react';
import SignupNavigationButton from '../components/navbutton';
import PhoneFrame from '../components/phoneFrame';

export default function Signup4() {
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  // Recipe preferences list
  const recipePreferences = [
    "Quick to Make",
    "Few Dishes",
    "Breakfast",
    "Lunch",
    "Dinner",
  ];

  const togglePreference = (preference) => {
    setSelectedPreferences((prev) => {
      if (prev.includes(preference)) {
        return prev.filter((p) => p !== preference);
      } else {
        return [...prev, preference];
      }
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    // You can store selectedPreferences in context, localStorage, or pass to next page
    console.log('Selected recipe preferences:', selectedPreferences);
    
    const email = "user@example.com"; // Store in memory instead of localStorage

    fetch(
      `https://2026nwhacksexpress-production.up.railway.app/user/${email}/recipeInterests`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipeInterests: selectedPreferences,
        }),
      },
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <PhoneFrame>
        <div className="relative w-full h-full bg-white overflow-hidden">
          <div
            className="w-full h-full overflow-y-auto scrollbar-hide"
            data-name="Signup4"
          >
            <div className="flex flex-col px-10 pt-20 pb-12 w-full">
              {/* Decorative dots at top */}
              <div className="flex gap-3 justify-center mb-6">
                <div className="w-7 h-2 rounded-full bg-gray-300" />
                <div className="w-7 h-2 rounded-full bg-gray-300" />
                <div className="w-7 h-2 rounded-full bg-gray-300" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="w-7 h-2 rounded-full bg-gray-300" />
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold mb-4">
                What recipes are you interested in?
              </h1>

              {/* Subtitle */}
              <p className="text-stone-500 text-sm font-light mb-8">
                You can change your preferences at any time. Just go to your 'Profile' page.
              </p>

              {/* Form Fields */}
              <div className="space-y-5">
                <div className="flex flex-col space-y-5">
                  {/* Recipe Preference Options */}
                  {recipePreferences.map((preference) => (
                    <button
                      key={preference}
                      type="button"
                      onClick={() => togglePreference(preference)}
                      className={`w-80 h-16 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black flex items-center justify-between px-6 transition-colors ${
                        selectedPreferences.includes(preference)
                          ? 'bg-yellow-100'
                          : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-2xl text-black">{preference}</span>
                      {selectedPreferences.includes(preference) && (
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                          <circle cx="17.5" cy="17.5" r="17.5" fill="#F5CF64"/>
                          <path d="M10 17.5L15 22.5L25 12.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <SignupNavigationButton 
                  currentStep={4} 
                  onSubmit={handleSubmit} 
                />
              </div>
            </div>
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