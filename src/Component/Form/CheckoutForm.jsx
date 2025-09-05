
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ submitData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { setCart } = useAuth();
  const navigate = useNavigate()

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required", 
    });

    if (error) {
      setMessage(error.message || "An unexpected error occurred.");
      setIsLoading(false);
      return;
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      try {
        // ✅ Call parent submitData() instead of axios again
        await submitData();
        Swal.fire({
          title: "Confirmed",
          text: "Your booking is successful!",
          icon: "success",
        });
        setCart([]); // reset cart
        setMessage("Payment and booking succeeded!");
        navigate('/confirmed')
      } catch (err) {
        console.error(err);
        Swal.fire({
          title: "Something went wrong while saving booking",
          icon: "error",
        });
      }
    }

    setIsLoading(false);
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="bg-blue-600 w-full py-2 px-5 mt-2 text-white rounded-md"
      >
        {isLoading ? "Processing..." : "Pay now"}
      </button>
      {message && (
        <div id="payment-message" className="mt-2 text-white">{message}</div>
      )}
    </form>
  );
};

export default CheckoutForm;
