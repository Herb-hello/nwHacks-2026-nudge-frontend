import { useNavigate } from 'react-router-dom';

export default function SignupNavigationButton({ currentStep, onSubmit }) {
  const navigate = useNavigate();
  
  const isFinalStep = currentStep === 5;
  const buttonText = isFinalStep ? 'Save' : 'Next';
  
  const handleClick = (e) => {
    e.preventDefault();
    
    // Call the onSubmit function if provided (for form validation)
    if (onSubmit) {
      const result = onSubmit(e);
      // If onSubmit returns false, don't navigate
      if (result === false) return;
    }
    
    // Navigate to next step or home
    if (isFinalStep) {
      navigate('/home');
    } else {
      navigate(`/signup/${currentStep + 1}`);
    }
  };

  return (
    <div className="flex justify-end pt-6">
      <button
        type="submit"
        onClick={handleClick}
        className="relative bg-[#F5CF64] hover:bg-[#e6c055] transition-colors rounded-full px-8 h-11 flex items-center gap-3"
      >
        <span className="text-white text-xl font-bold">
          {buttonText}
        </span>
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
          <path d="M1 6.36395C0.447715 6.36395 4.97488e-10 6.81167 0 7.36395C-4.97488e-10 7.91624 0.447715 8.36395 1 8.36395L1 7.36395L1 6.36395ZM20.7071 8.07106C21.0976 7.68054 21.0976 7.04737 20.7071 6.65685L14.3431 0.292885C13.9526 -0.0976395 13.3195 -0.0976395 12.9289 0.292885C12.5384 0.683409 12.5384 1.31657 12.9289 1.7071L18.5858 7.36395L12.9289 13.0208C12.5384 13.4113 12.5384 14.0445 12.9289 14.435C13.3195 14.8255 13.9526 14.8255 14.3431 14.435L20.7071 8.07106ZM1 7.36395L1 8.36395L20 8.36395L20 7.36395L20 6.36395L1 6.36395L1 7.36395Z" fill="white"/>
        </svg>
      </button>
    </div>
  );
}