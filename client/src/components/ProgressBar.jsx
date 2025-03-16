const ProgressBar = ({ steps, currentStep }) => {
    return (
      <div className="w-full bg-amayaBeige p-2 rounded-lg">
        <div className="flex justify-between text-sm text-black">
          {steps.map((step, index) => (
            <span key={index} className={currentStep >= index + 1 ? "font-bold" : ""}>
              {step}
            </span>
          ))}
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-amayaBlue h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;