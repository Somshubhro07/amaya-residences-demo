import { useState } from "react";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Payments = () => {
  const [step, setStep] = useState(1);
  const [paid, setPaid] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handlePay = () => {
    setStep(3);
    setPaid(true);
  };

  return (
    <div
      className="relative min-h-screen p-10 bg-gradient-to-br from-amayaBlue to-amayaPeach dark:from-gray-800 dark:to-gray-600 overflow-hidden"
      style={{
        backgroundImage: "url('/path-to-wave-pattern.png')", // Subtle wave pattern
        backgroundSize: "300px",
        backgroundPosition: "center",
        opacity: 0.9,
      }}
    >
      {/* Floating Puja Icon */}
      <img
        src="/path-to-puja-icon.png"
        alt="Puja Icon"
        className="absolute top-10 right-10 w-20 h-20 opacity-30 animate-pulse"
      />

      {/* Gradient Heading */}
      <h1
        className="text-6xl font-bold text-center mb-12 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-amayaYellow"
      >
        Payments
      </h1>

      {/* Glassmorphism Card with Animation */}
      <div className="max-w-lg mx-auto bg-white/30 dark:bg-gray-700/30 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/20 animate-fade-in-scale">
        <ProgressBar steps={["Enter Amount", "Confirm", "Success"]} currentStep={step} />
        {step === 1 && (
          <div className="text-center">
            <p className="text-4xl text-white mb-10">Your Dues: ₹3200</p>
            <Button onClick={handleNext} color="gradient" fullWidth>
              Next
            </Button>
          </div>
        )}
        {step === 2 && (
          <div className="text-center">
            <p className="text-4xl text-white mb-10">Confirm Payment of ₹3200?</p>
            <Button onClick={handlePay} color="gradient" fullWidth>
              Confirm
            </Button>
          </div>
        )}
        {step === 3 && paid && (
          <div className="relative bg-amayaYellow/80 p-6 rounded-xl text-center animate-fade-in">
            {/* Sparkle Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-sparkle" />
            <p className="text-4xl text-black">Payment Successful! ₹3200 Paid</p>
            <p className="text-2xl text-black mt-6">Future: SBI via ads-funded site.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payments;