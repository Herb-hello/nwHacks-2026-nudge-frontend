import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup4() {
  const navigate = useNavigate();
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  // Recipe preferences list
  const recipePreferences = [
    'Quick to Make',
    'Few Dishes',
    'Breakfast',
    'Lunch',
    'Dinner'
  ];

  const togglePreference = (preference) => {
    setSelectedPreferences(prev => {
      if (prev.includes(preference)) {
        return prev.filter(p => p !== preference);
      } else {
        return [...prev, preference];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can store selectedPreferences in context, localStorage, or pass to next page
    console.log('Selected recipe preferences:', selectedPreferences);
    navigate('/signup/5');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-96 relative">
        {/* Decorative dots at top */}
        <div className="flex gap-3 mb-6">
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-7 h-2 rounded-full bg-gray-300" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">
          What recipes are you interested in?
        </h1>

        {/* Subtitle */}
        <p className="text-stone-500 text-sm font-light mb-8">
          You can change your preferences at any time. Just go to your 'Profile' page.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
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

          {/* Next Button */}
          <div className="flex justify-end pt-8">
            <button
              type="submit"
              className="relative bg-[#F5CF64] hover:bg-[#e6c055] transition-colors rounded-full px-8 h-11 flex items-center gap-3"
            >
              <span className="text-white text-xl font-bold">
                Next
              </span>
              <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
                <path d="M1 6.36395C0.447715 6.36395 4.97488e-10 6.81167 0 7.36395C-4.97488e-10 7.91624 0.447715 8.36395 1 8.36395L1 7.36395L1 6.36395ZM20.7071 8.07106C21.0976 7.68054 21.0976 7.04737 20.7071 6.65685L14.3431 0.292885C13.9526 -0.0976395 13.3195 -0.0976395 12.9289 0.292885C12.5384 0.683409 12.5384 1.31657 12.9289 1.7071L18.5858 7.36395L12.9289 13.0208C12.5384 13.4113 12.5384 14.0445 12.9289 14.435C13.3195 14.8255 13.9526 14.8255 14.3431 14.435L20.7071 8.07106ZM1 7.36395L1 8.36395L20 8.36395L20 7.36395L20 6.36395L1 6.36395L1 7.36395Z" fill="white"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}