export default function App() {
  return (
    <div className="min-h-screen max-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
      <div className="flex w-full h-full">
        <img 
          src="/phone.png" 
          alt="Phone frame"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        
        {/* Content Area */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-[250px] h-full max-h-[550px] bg-white rounded-[40px] shadow-2xl overflow-hidden">
            {/* Your app content goes here */}
            <div className="p-8 flex flex-col items-center justify-center h-full">
              <h1 className="text-3xl font-bold underline text-gray-800 mb-4">
                Hello world!
              </h1>
              <p className="text-gray-600 text-center">
                This content is inside the phone template
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}