import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup5() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fridgeCode: '',
    householdName: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate household name is required
    if (!formData.householdName.trim()) {
      alert('Please enter a household name');
      return;
    }

    // Log all signup data (you'll want to combine with context data)
    console.log('Signup complete!', formData);
    
    // Navigate to home page or dashboard
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-96 relative">
        {/* Decorative dots at top */}
        <div className="flex gap-3 mb-6">
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-7 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-12">
          Connect to your Fridge
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Fridge Code */}
          <div>
            <label className="block text-xl mb-2">
              Fridge Code
            </label>
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

          {/* Save Button */}
          <div className="flex justify-end pt-72">
            <button
              type="submit"
              className="relative bg-[#F5CF64] hover:bg-[#e6c055] transition-colors rounded-full px-8 h-11 flex items-center gap-3"
            >
              <span className="text-white text-xl font-bold">
                Save
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