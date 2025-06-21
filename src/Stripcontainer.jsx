import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Card from "./Card";

const stripePromise = loadStripe("pk_test_51Rc6LuPNQ76qWBGI6rSEYcl2C7fr4l0auTqdrlWTeFhuHY8WsWYidSrPYIO0A6uTBcIBdwbiebrJJAaonUkyfOGY00B0jeLu4N");

const Stripcontainer = () => (
  <Elements stripe={stripePromise}>
    <Card />
  </Elements>
);

export default Stripcontainer;
