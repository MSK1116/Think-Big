import React, { useState, useEffect } from "react";
import codes from "../../public/refCode.json";
import Footer from "./Footer";
import Navbar from "./Navbar";

const App = () => {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [redirecting, setRedirecting] = useState(false);
  const [timer, setTimer] = useState(5);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // Only allow single digits
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);

    // Automatically focus next input
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleReset = () => {
    setInputs(["", "", "", "", "", ""]);
    setError(""); // Clear error
  };

  const handleVerify = () => {
    setError("");

    if (inputs.some((input) => input === "")) {
      setError("Please fill in all digits before verifying.");
      return;
    }

    const enteredCode = inputs.join(""); // Combine all inputs into one string
    const match = codes.find((item) => item.refCode === enteredCode);

    if (match) {
      setRedirecting(true); // Start redirecting countdown
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            window.location.href = match.link; // Redirect after countdown
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setError("Invalid code. Please reconfirm and try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Enter Code</h1>
        <div className="flex gap-2">
          {inputs.map((value, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              value={value}
              maxLength="1"
              className={`w-12 h-12 border rounded-lg bg-slate-600 text-green-700 text-center text-lg focus:ring-2 outline-none ${error && !redirecting ? "border-red-500" : "border-gray-300"}`}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !value && index > 0) {
                  document.getElementById(`otp-input-${index - 1}`).focus();
                }
              }}
            />
          ))}
        </div>
        {error && (
          <div className="flex items-center mt-4">
            <p className="text-red-500 mr-4">{error}</p>
            <button onClick={handleReset} className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
              Reset
            </button>
          </div>
        )}
        {!redirecting && (
          <button onClick={handleVerify} className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Verify
          </button>
        )}
        {redirecting && (
          <div className="mt-6 text-center">
            <p className="text-green-500 text-lg font-semibold">Redirecting in {timer} seconds...</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
