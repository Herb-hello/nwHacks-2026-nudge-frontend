function Test() {
  return (
    <div className="w-96 h-[932px] relative">
      <div className="w-96 h-[932px] left-0 top-0 absolute bg-white">
        {/* Page indicator dots */}
        <div className="w-1.5 h-1.5 left-[147px] top-[69px] absolute bg-zinc-300 rounded-2xl" />
        <div className="w-6 h-1.5 left-[161px] top-[69px] absolute bg-zinc-300 rounded-2xl" />
        <div className="w-6 h-1.5 left-[193px] top-[69px] absolute bg-zinc-300 rounded-2xl" />
        <div className="w-6 h-1.5 left-[226px] top-[69px] absolute bg-zinc-300 rounded-2xl" />
        <div className="w-6 h-1.5 left-[257px] top-[69px] absolute bg-zinc-300 rounded-2xl" />

        {/* Title */}
        <div className="w-96 h-11 left-[40px] top-[87px] absolute justify-start text-black text-3xl font-bold font-['Space_Grotesk']">
          Personal Information
        </div>

        {/* First Name */}
        <div className="w-56 left-[43px] top-[145px] absolute justify-start">
          <span className="text-red-600 text-xl font-normal font-['Space_Grotesk']">* </span>
          <span className="text-black text-xl font-normal font-['Space_Grotesk']">First Name</span>
        </div>
        <div className="w-80 h-16 left-[43px] top-[179px] absolute bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black" />

        {/* Last Name */}
        <div className="w-56 left-[43px] top-[254px] absolute justify-start">
          <span className="text-red-600 text-xl font-normal font-['Space_Grotesk']">* </span>
          <span className="text-black text-xl font-normal font-['Space_Grotesk']">Last Name</span>
        </div>
        <div className="w-80 h-16 left-[43px] top-[288px] absolute bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black" />

        {/* Date of Birth */}
        <div className="w-56 left-[43px] top-[363px] absolute justify-start">
          <span className="text-red-600 text-xl font-normal font-['Space_Grotesk']">* </span>
          <span className="text-black text-xl font-normal font-['Space_Grotesk']">Date of Birth</span>
        </div>
        <div className="w-80 h-16 left-[43px] top-[397px] absolute bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black" />

        {/* Email Address */}
        <div className="w-56 left-[43px] top-[472px] absolute justify-start">
          <span className="text-red-600 text-xl font-normal font-['Space_Grotesk']">* </span>
          <span className="text-black text-xl font-normal font-['Space_Grotesk']">Email Address</span>
        </div>
        <div className="w-80 h-16 left-[43px] top-[506px] absolute bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black" />

        {/* Password */}
        <div className="w-56 left-[43px] top-[581px] absolute justify-start">
          <span className="text-red-600 text-xl font-normal font-['Space_Grotesk']">* </span>
          <span className="text-black text-xl font-normal font-['Space_Grotesk']">Password</span>
        </div>
        <div className="w-80 h-16 left-[43px] top-[615px] absolute bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black" />

        {/* Confirm Password */}
        <div className="w-56 left-[43px] top-[690px] absolute justify-start">
          <span className="text-red-600 text-xl font-normal font-['Space_Grotesk']">* </span>
          <span className="text-black text-xl font-normal font-['Space_Grotesk']">Confirm Password</span>
        </div>
        <div className="w-80 h-16 left-[43px] top-[724px] absolute bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black" />

        {/* Next Button */}
        <div className="w-28 h-10 left-[280px] top-[824px] absolute bg-amber-300 rounded-[20px]" />
        <div className="w-20 h-7 left-[285px] top-[830px] absolute text-center justify-start text-white text-xl font-bold font-['Space_Grotesk']">
          Next
        </div>
        <div className="w-5 h-0 left-[352px] top-[844px] absolute border-2 border-white" />
      </div>

      {/* Phone frame overlay */}
      <img
        className="w-[490px] h-[990px] left-[-29px] top-[-31px] absolute pointer-events-none"
        src="./phone.png"
        alt="Phone frame"
      />
    </div>
  );
}

export default Test;
