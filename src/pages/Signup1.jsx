import { useState } from 'react';
import SignupNavigationButton from '../components/navbutton';
import PhoneFrame from '../components/phoneFrame';

export default function Signup1() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.dateOfBirth ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all required fields");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    // Store email in memory instead of localStorage (not supported in artifacts)
    console.log("Email stored:", formData.email);

    fetch("https://2026nwhacksexpress-production.up.railway.app/user", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        dateOfBirth: formData.dateOfBirth,
      }),
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <PhoneFrame>
        <div className="relative w-full h-full bg-white overflow-hidden">
          <div
            className="w-full h-full overflow-y-auto scrollbar-hide"
            data-name="Signup1"
          >
            <div className="flex flex-col px-10 pt-20 pb-6 w-full">
              {/* Decorative dots at top */}
              <div className="flex gap-3 justify-center mb-6">
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="w-7 h-2 rounded-full bg-gray-300" />
                <div className="w-7 h-2 rounded-full bg-gray-300" />
                <div className="w-7 h-2 rounded-full bg-gray-300" />
                <div className="w-7 h-2 rounded-full bg-gray-300" />
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold mb-8">Personal Information</h1>

              {/* Form Fields */}
              <div className="space-y-7">
                {/* First Name */}
                <div>
                  <label className="block text-xl mb-2">
                    <span className="text-red-600">* </span>
                    <span className="text-black">First Name</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-80 h-16 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black px-5 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-xl mb-2">
                    <span className="text-red-600">* </span>
                    <span className="text-black">Last Name</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-80 h-16 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black px-5 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-xl mb-2">
                    <span className="text-red-600">* </span>
                    <span className="text-black">Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-80 h-16 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black px-5 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xl mb-2">
                    <span className="text-red-600">* </span>
                    <span className="text-black">Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-80 h-16 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black px-5 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xl mb-2">
                    <span className="text-red-600">* </span>
                    <span className="text-black">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-80 h-16 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black px-5 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-xl mb-2">
                    <span className="text-red-600">* </span>
                    <span className="text-black">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-80 h-16 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black px-5 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* Next Button */}
                <SignupNavigationButton 
                  currentStep={1} 
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