import { useLocation } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const PayOne = () => {
  const { state: course } = useLocation();
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("✅ دفع الكورس:", course.title);
      setMessage("تم الدفع لهذا الكورس بنجاح");
    } else {
      setMessage(error.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">pay: {course.title}</h2>
      <p>price: ${course.price}</p>

      <form onSubmit={handleSubmit} className="max-w-md mt-4">
        <CardElement />
        <button
          type="submit"
          className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-md"
        >
          pay now
        </button>
        {message && <p className="mt-2 text-sm text-red-600">{message}</p>}
      </form>
    </div>
  );
};

export default PayOne;
