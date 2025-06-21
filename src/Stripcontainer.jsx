import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Card from "./Card";

const stripePromise = loadStripe("");

const Stripcontainer = () => (
  <Elements stripe={stripePromise}>
    <Card />
  </Elements>
);

export default Stripcontainer;
