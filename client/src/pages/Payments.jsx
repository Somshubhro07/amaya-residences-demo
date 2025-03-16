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
    <div className="bg-amayaPeach min-h-screen p-8">
      <h1 className="text-5xl font-bold text-amayaBlue text-center mb-8">Payments</h1>
      <div className="max-w-md mx-auto">
        <ProgressBar steps={["Enter Amount", "Confirm", "Success"]} currentStep={step} />
        {step === 1 && (
          <div className="text-center">
            <p className="text-2xl text-black mb-6">Your Dues: ₹3200</p>
            <Button onClick={handleNext} fullWidth>Next</Button>
          </div>
        )}
        {step === 2 && (
          <div className="text-center">
            <p className="text-2xl text-black mb-6">Confirm Payment of ₹3200?</p>
            <Button onClick={handlePay} fullWidth>Confirm</Button>
          </div>
        )}
        {step === 3 && paid && (
          <div className="bg-amayaYellow p-6 rounded-xl text-center">
            <p className="text-2xl text-black">Payment Successful! ₹3200 Paid</p>
            <p className="text-xl text-black mt-4">Future: SBI via ads-funded site.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payments;