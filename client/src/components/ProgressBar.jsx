const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="w-full bg-amayaBeige/50 dark:bg-gray-600/50 p-3 rounded-xl mb-6 backdrop-blur-sm">
      <div className="flex justify-between text-lg text-white font-medium">
        {steps.map((step, index) => (
          <span key={index} className={currentStep >= index + 1 ? "text-white" : "text-gray-300"}>
            {step}
          </span>
        ))}
      </div>
      <div className="w-full bg-gray-200/30 dark:bg-gray-500/30 h-3 rounded-full overflow-hidden">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-amayaYellow to-amayaTeal transition-all duration-500 ease-in-out"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;