import { useState } from "react";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

const Payments = () => {
  const [step, setStep] = useState(1);
  const [paid, setPaid] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handlePay = () => {
    setStep(3);
    setPaid(true);
  };

  return (
    <div className="bg-amayaPeach dark:bg-gray-800 min-h-screen p-10">
      <h1 className="text-6xl font-bold text-amayaBlue dark:text-white text-center mb-12 drop-shadow-md">Payments</h1>
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
        <ProgressBar steps={["Enter Amount", "Confirm", "Success"]} currentStep={step} />
        {step === 1 && (
          <div className="text-center">
            <p className="text-3xl text-black dark:text-white mb-8">Your Dues: ₹3200</p>
            <Button onClick={handleNext} fullWidth>Next</Button>
          </div>
        )}
        {step === 2 && (
          <div className="text-center">
            <p className="text-3xl text-black dark:text-white mb-8">Confirm Payment of ₹3200?</p>
            <Button onClick={handlePay} fullWidth>Confirm</Button>
          </div>
        )}
        {step === 3 && paid && (
          <div className="bg-amayaYellow dark:bg-gray-600 p-6 rounded-xl text-center animate-fade-in">
            <p className="text-3xl text-black dark:text-white">Payment Successful! ₹3200 Paid</p>
            <p className="text-2xl text-black dark:text-white mt-6">Future: SBI via ads-funded site.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payments;