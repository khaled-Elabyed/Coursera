import { useElements, useStripe , CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const  elements = useElements();
    const [message , setMessage] = useState("");

    const handleSubmit = async(e) => {
     e.preventDefault();
     const {error , paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
     })
     if(!error){
        console.log('paymentMethod: ',paymentMethod);
        setMessage('Payment has successfully.')  
    } else{
        setMessage(error.message)
        }
    };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <CardElement />
      <button type="submit" className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-md"
       disabled={!stripe}>
        pay now
      </button>
       {message && <p className="mt-2 text-sm text-red-600">{message}</p>}
      </form>
  );
};

export default CheckoutForm;
