import { useState } from "react";
import Navbar from "../components/navbar";
import PhoneFrame from "../components/phoneFrame";
import { Coffee } from "lucide-react";

export default function ProfilePage() {
  const [preferences, setPreferences] = useState({
    breakfast: true,
    lunch: true,
    dinner: false,
    quickToMake: true,
    fewDishes: false,
  });

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <PhoneFrame>
        <div className="relative w-full h-full bg-white overflow-hidden">
          <div
            className="w-full h-[calc(100%-56px)] overflow-y-auto scrollbar-hide"
            data-name="ProfilePage"
          >
            <div className="flex flex-col px-10 pt-16 pb-6 w-full">
              {/* Header */}
              <h2 className="text-2xl font-bold text-black mb-6">
                So tell me more about yourself...
              </h2>

              <h1 className="text-3xl font-bold text-black mb-8">Kylie Seto</h1>

              {/* Li Household Card */}
              <div className="w-full bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black">
                    HackCamp House
                  </h3>
                  <button className="bg-neutral-200 px-4 py-1 rounded-full">
                    <span className="text-base font-normal text-black">
                      Manage
                    </span>
                  </button>
                </div>
                <div className="text-base font-normal text-black leading-6">
                  Arseniy
                  <br />
                  Enya
                  <br />
                  Aaron
                </div>
              </div>

              {/* Vegetarian Card */}
              <div
                className="w-full rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black p-4 mb-6 flex justify-between items-center"
                style={{ backgroundColor: "#FCE7AA" }}
              >
                <h3 className="text-2xl font-bold text-black">Vegetarian</h3>
                <button
                  className="px-4 py-1 rounded-full"
                  style={{ backgroundColor: "#F5CF64" }}
                >
                  <span className="text-base font-normal text-black">Edit</span>
                </button>
              </div>

              {/* Allergies Card */}
              <div
                className="w-full rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black p-6 mb-8"
                style={{ backgroundColor: "#FCE7AA" }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black">Allergies</h3>
                  <button
                    className="px-4 py-1 rounded-full"
                    style={{ backgroundColor: "#F5CF64" }}
                  >
                    <span className="text-base font-normal text-black">
                      Edit
                    </span>
                  </button>
                </div>
                <div className="text-base font-normal text-black leading-6">
                  Egg allergy
                  <br />
                  Dairy allergy
                </div>
              </div>

              {/* Preferences Section */}
              <h2 className="text-3xl font-bold text-black mb-6">
                Preferences
              </h2>

              {/* Preference Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={() => togglePreference("breakfast")}
                  className={`px-4 py-2 rounded-full ${
                    preferences.breakfast ? "bg-neutral-200" : "bg-neutral-100"
                  }`}
                >
                  <span
                    className={`text-base ${
                      preferences.breakfast ? "font-bold" : "font-normal"
                    } text-black`}
                  >
                    Breakfast
                  </span>
                </button>

                <button
                  onClick={() => togglePreference("lunch")}
                  className={`px-4 py-2 rounded-full ${
                    preferences.lunch ? "bg-neutral-200" : "bg-neutral-100"
                  }`}
                >
                  <span
                    className={`text-base ${
                      preferences.lunch ? "font-bold" : "font-normal"
                    } text-black`}
                  >
                    Lunch
                  </span>
                </button>

                <button
                  onClick={() => togglePreference("dinner")}
                  className={`px-4 py-2 rounded-full ${
                    preferences.dinner ? "bg-neutral-200" : "bg-neutral-100"
                  }`}
                >
                  <span
                    className={`text-base ${
                      preferences.dinner ? "font-bold" : "font-normal"
                    } text-black`}
                  >
                    Dinner
                  </span>
                </button>

                <button
                  onClick={() => togglePreference("quickToMake")}
                  className={`px-4 py-2 rounded-full ${
                    preferences.quickToMake
                      ? "bg-neutral-200"
                      : "bg-neutral-100"
                  }`}
                >
                  <span
                    className={`text-base ${
                      preferences.quickToMake ? "font-bold" : "font-normal"
                    } text-black`}
                  >
                    Quick to Make
                  </span>
                </button>

                <button
                  onClick={() => togglePreference("fewDishes")}
                  className={`px-4 py-2 rounded-full ${
                    preferences.fewDishes ? "bg-neutral-200" : "bg-neutral-100"
                  }`}
                >
                  <span
                    className={`text-base ${
                      preferences.fewDishes ? "font-bold" : "font-normal"
                    } text-black`}
                  >
                    Few Dishes
                  </span>
                </button>
              </div>

              {/* Manage Routines Section */}
              <h2 className="text-3xl font-bold text-black mb-8">
                Manage Routines
              </h2>

              {/* Routine Card */}
              <div className="w-full bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black p-4 flex items-center gap-4 mb-6">
                <Coffee className="w-6 h-6 text-black" />
                <div className="text-base text-black">
                  <span className="font-bold">Breakfast:</span> 8:00am | 15 min
                  prep
                </div>
              </div>
            </div>
          </div>

          {/* Navbar at bottom of phone frame */}
          <div className="absolute bottom-5 left-0 right-0 z-50">
            <Navbar />
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
