import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Card from "./Card";
import PayOne from "./PayOne";

const stripePromise = loadStripe("");

const StripcontainerForOne = () => (
  <Elements stripe={stripePromise}>
    <PayOne />
  </Elements>
);

export default StripcontainerForOne;
