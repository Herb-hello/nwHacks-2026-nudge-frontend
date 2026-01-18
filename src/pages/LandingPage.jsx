import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/phoneFrame';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <PhoneFrame>
        <div className="relative w-full h-full bg-white overflow-hidden">
          <div
            className="w-full h-full overflow-y-auto scrollbar-hide"
            data-name="LandingPage"
          >
            <div className="flex flex-col items-center px-10 pt-20 pb-6 w-full">
              {/* App Title */}
              <div className="text-center text-black text-7xl font-bold">
                nudge.
              </div>

              {/* Main Image */}
              <img
                className="w-72 h-72 mt-16"
                src="nudgeLogo.png"
                alt="Nudge app illustration"
              />

              {/* Tagline */}
              <div className="mt-16 text-center text-black text-xl font-medium">
                Less Waste, More Taste.
              </div>

              {/* Subtitle */}
              <div className="mt-2 text-center text-black text-xl font-normal">
                Your Fridge's Virtual Companion
              </div>

              {/* Call-to-Action Buttons */}
              <div className="mt-10 w-full flex flex-col items-center gap-4">
                <button
                  onClick={() => navigate('/signup/1')}
                  className="w-full bg-[#F5CF64] hover:bg-[#e6c055] transition-colors rounded-full py-4 text-white text-xl font-bold shadow-lg"
                >
                  Get Started
                </button>

                <button
                  onClick={() => navigate('/login')}
                  className="w-full bg-white hover:bg-gray-50 transition-colors rounded-full py-4 text-black text-xl font-bold border-2 border-black"
                >
                  Sign In
                </button>
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