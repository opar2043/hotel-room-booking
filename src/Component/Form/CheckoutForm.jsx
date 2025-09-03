// import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import useAuth from '../Hook/useAuth';
// import useAxios from '../Hook/useAxios';
// import Swal from 'sweetalert2';

// const CheckoutForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [message , setMessage] = useState('');
//     const [isLoading , setIsLoading] = useState(false);
//     const { cart, setCart } = useAuth();
//     const axiosSecure = useAxios();
//     useEffect(() => {
//     if (!stripe) {
//       return;
//     }

//     const clientSecret = new URLSearchParams(window.location.search).get(
//       "payment_intent_client_secret"
//     );

//     if (!clientSecret) {
//       return;
//     }

//     stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
//       if (!paymentIntent) {
//         return;
//       }

//     stripe.retrievePaymentIntent(clientSecret);
//     switch (paymentIntent.status) {
//       case "succeeded":
//         setMessage("Payment succeeded!");
//         break;
//       case "processing":
//         setMessage("Your payment is processing.");
//         break;
//       case "requires_payment_method":
//         setMessage("Your payment was not successful, please try again.");
//         break;
//       default:
//         setMessage("Something went wrong.");
//         break;
//     }

//     });
//   }, [stripe]);


//  async  function handleSubmit(e){
//    e.preventDefault();

//    if (!stripe || !elements) {
//       // Stripe.js hasn't yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     setIsLoading(true);

//     const { error } = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         // Make sure to change this to your payment completion page
//         return_url: "http://localhost:5173/confirmed",
//       },
//  });

//     if (error.type === "card_error" || error.type === "validation_error") {
//       setMessage(error.message);
//     } else {
//       setMessage("An unexpected error occurred.");
//     }

//     setIsLoading(false);
//   }

//     const paymentElementOptions = {
//     layout: "tabs"
//   }

//   return (
//     <div>
//          <form id="payment-form" onSubmit={handleSubmit}>

//       <PaymentElement id="payment-element" options={paymentElementOptions} />
//       <button disabled={isLoading || !stripe || !elements} id="submit" className='bg-blue-600 w-full py-2 px-5 mt-2 text-white rounded-md'>
//         <span id="button-text">
//           {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
//         </span>
//       </button>
//       {/* Show any error or success messages */}
//       {message && <div id="payment-message">{message}</div>}
//     </form>
//     </div>
//   )
// }

// export default CheckoutForm




import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useAuth from "../Hook/useAuth";
import useAxios from "../Hook/useAxios";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, setCart } = useAuth();
  const axiosSecure = useAxios();

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/confirmed",
      },
      
    });

    if (error) {
      setMessage(error.message || "An unexpected error occurred.");
      setIsLoading(false);
      return;
    }

    // ✅ Only after successful payment, save booking
    if (paymentIntent && paymentIntent.status === "succeeded") {
      try {
        await axiosSecure.post("/bookings", cart);
        Swal.fire({
          title: "Confirmed",
          text: `Successfully booked for ${cart.length} room(s)`,
          icon: "success",
        });
        setCart([]);
        setMessage("Payment and booking succeeded!");
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
      {message && <div id="payment-message" className="mt-2 text-white">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
