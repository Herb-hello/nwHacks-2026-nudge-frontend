import { useState } from 'react';
import SignupNavigationButton from '../components/navbutton';

export default function Signup5() {
  const [formData, setFormData] = useState({
    fridgeCode: "",
    householdName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate household name is required
    if (!formData.householdName.trim()) {
      alert('Please enter a household name');
      return false; // Return false to prevent navigation
    }

    // Log all signup data (you'll want to combine with context data)
    console.log('Signup complete!', formData);
    
    const email = localStorage.getItem("email");

    fetch(
      `https://2026nwhacksexpress-production.up.railway.app/user/${email}/fridgeHousehold`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fridgeCode: formData.fridgeCode,
          householdName: formData.householdName,
        }),
      },
    );
  };

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col">
      <div className="w-100 mx-auto pt-20">
        {/* Decorative dots at top */}
        <div className="flex gap-3 mb-6 justify-center">
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-12">Connect to your Fridge</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Fridge Code */}
          <div>
            <label className="block text-xl mb-2">Fridge Code</label>
            <input
              type="text"
              name="fridgeCode"
              value={formData.fridgeCode}
              onChange={handleChange}
              placeholder=""
              className="w-80 h-16 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black px-5 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Info Text */}
          <p className="text-stone-500 text-sm font-light">
            You're the first to join! Create a household now.
          </p>

          {/* Household Name */}
          <div>
            <label className="block text-xl mb-2">
              <span className="text-red-600">* </span>
              <span className="text-black">Household Name</span>
            </label>
            <input
              type="text"
              name="householdName"
              value={formData.householdName}
              onChange={handleChange}
              placeholder=""
              className="w-80 h-16 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black px-5 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Save Button - pushed to bottom */}
          <div className="mt-auto pt-32">
            <SignupNavigationButton 
              currentStep={5} 
              onSubmit={handleSubmit} 
            />
          </div>
        </form>
      </div>
    </div>
  );
}
