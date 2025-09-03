// import React, { useState } from "react";
// const Form = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [start, setStart] = useState(null);
//   const [end, setEnd] = useState(null);
//   const [type, setType] = useState(79); // price per night
//   const [rooms, setRooms] = useState(0);
//   const [guests, setGuests] = useState(0);

//   // Cart state (array of bookings)
//   const [cart, setCart] = useState([]);

//   // calculate nights
//   const nights =
//     start && end
//       ? Math.max(
//           1,
//           Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24))
//         )
//       : 1;

//   const subtotal = rooms * type * nights;
//   const taxes = subtotal * 0.12;
//   const fees = 5;
//   const total = subtotal + taxes + fees;

//   function handleBook(e) {
//     e.preventDefault();
//     if (!start || !end || new Date(start) >= new Date(end)) {
//       alert("Please select a valid check-in and check-out date.");
//       return;
//     }
//     const roomObj = { start, end, rooms, guests, type, nights };
//     console.log(roomObj);
//   }

//   function handleAddToCart() {
//     if (!start || !end || new Date(start) >= new Date(end)) {
//       alert("Please select a valid check-in and check-out date.");
//       return;
//     }

//     const booking = {
//       id: Date.now(),
//       start,
//       end,
//       rooms,
//       guests,
//       type,
//       nights,
//       subtotal,
//       taxes,
//       fees,
//       total,
//     };

//     setCart((prev) => [...prev, booking]);
//     setDrawerOpen(true);

//     // Reset form inputs (optional)
//     setStart("");
//     setEnd("");
//     setRooms(1);
//     setGuests(2);
//     setType(79);
//   }

//   function getRoomName(price) {
//     if (price === 79) return "Standard";
//     if (price === 99) return "Double Bed";
//     if (price === 149) return "Luxury Suite";
//     return "Room";
//   }

//   // Calculate grand totals from all cart items
//   const grandSubtotal = cart.reduce((sum, item) => sum + item.subtotal, 0);
//   const grandTaxes = cart.reduce((sum, item) => sum + item.taxes, 0);
//   const grandFees = cart.reduce((sum, item) => sum + item.fees, 0);
//   const grandTotal = cart.reduce((sum, item) => sum + item.total, 0);

//   return (
//     <div className="flex justify-center items-center min-h-screen px-4">
//       {/* Booking Form */}
//       <div className="bg-[#1B1F2B] rounded-2xl p-6 shadow-xl max-w-lg w-full">
//         <h2 className="text-white text-xl font-semibold mb-6">
//           Book your stay
//         </h2>

//         <form className="space-y-4" onSubmit={handleBook}>
//           {/* Dates */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-400 text-sm mb-2">
//                 Check-in
//               </label>
//               <input
//                 type="date"
//                 value={start}
//                 onChange={(e) => setStart(e.target.value)}
//                 className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-400 text-sm mb-2">
//                 Check-out
//               </label>
//               <input
//                 type="date"
//                 value={end}
//                 onChange={(e) => setEnd(e.target.value)}
//                 className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
//               />
//             </div>
//           </div>

//           {/* Room + Guests */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-gray-400 text-sm mb-2">
//                 Room type
//               </label>
//               <select
//                 value={type}
//                 onChange={(e) => setType(Number(e.target.value))}
//                 className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
//               >
//                 <option value={79}>Standard / $79</option>
//                 <option value={99}>Double Bed / $99</option>
//                 <option value={149}>Luxury Suite / $149</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-gray-400 text-sm mb-2">Rooms</label>
//               <input
//                 type="number"
//                 min={1}
//                 value={rooms}
//                 onChange={(e) => setRooms(Number(e.target.value))}
//                 className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none text-sm focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-400 text-sm mb-2">Guests</label>
//               <input
//                 type="number"
//                 min={1}
//                 value={guests}
//                 onChange={(e) => setGuests(Number(e.target.value))}
//                 className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none text-sm focus:border-blue-500"
//               />
//             </div>
//           </div>

//           {/* Live Estimate */}
//           <div className="text-white text-sm">
//             {rooms} room(s) × {nights} night(s) — {getRoomName(type)} ($
//             {type}/night) = ${subtotal.toFixed(2)}
//           </div>

//           <div className="flex gap-5 items-center">
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-tr from-[#E8424A] to-[#F97D67] hover:opacity-90 text-white font-medium py-3 rounded-lg transition-colors text-sm"
//             >
//               Check Availability
//             </button>

//             {/* Drawer toggle button */}
//             { nights && total > 80 ? (
//               <button
//                 type="button"
//                 onClick={handleAddToCart}
//                 className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-lg transition-colors text-sm"
//               >
//                 Add to Cart
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => setDrawerOpen(true)}
//                 className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-lg transition-colors text-sm"
//               >
//                 {" "}
//                 Add to Cart{" "}
//               </button>
//             )}
//           </div>
//         </form>
//       </div>

//       {/* Drawer */}
//       {drawerOpen && (
//         <div className="fixed inset-0 flex justify-end z-50">
//           {/* Overlay */}
//           <div
//             className="absolute inset-0 bg-black/50"
//             onClick={() => setDrawerOpen(false)}
//           ></div>

//           {/* Drawer panel */}
//           <div className="relative bg-[#1B1F2B] w-full sm:w-[400px] h-full shadow-xl p-6 overflow-y-auto">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-2">
//               <h2 className="text-white text-lg font-semibold">Your Cart</h2>
//               <button
//                 onClick={() => setDrawerOpen(false)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 Close ✕
//               </button>
//             </div>

//             {/* Cart Items */}
//             {cart.length === 0 ? (
//               <p className="text-gray-400">Your cart is empty.</p>
//             ) : (
//               cart.map((item) => (
//                 <div
//                   key={item.id}
//                   className="bg-[#0F1320] rounded-lg p-4 mb-4 border border-gray-700"
//                 >
//                   <div className="flex justify-between text-white mb-1">
//                     <span>{getRoomName(item.type)}</span>
//                     <span>${item.type.toFixed(2)} / night</span>
//                   </div>
//                   <p className="text-gray-400 text-sm mb-2">
//                     {item.start} → {item.end} ({item.nights} night
//                     {item.nights > 1 ? "s" : ""})
//                   </p>
//                   <div className="flex justify-between text-gray-400 text-sm">
//                     <span>{item.rooms} room(s)</span>
//                     <span>${item.subtotal.toFixed(2)}</span>
//                   </div>
//                   <div className="text-gray-400 text-sm">
//                     {item.guests} guest(s)
//                   </div>

//                   {/* Remove button */}
//                   <button
//                     onClick={() =>
//                       setCart((prev) => prev.filter((c) => c.id !== item.id))
//                     }
//                     className="mt-3 px-4 py-1 bg-red-600 hover:bg-red-500 text-white rounded"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))
//             )}

//             {/* Totals */}
//             {cart.length > 0 && (
//               <div className="text-white space-y-2 mb-4">
//                 <div className="flex justify-between">
//                   <span>Room Subtotal:</span>
//                   <span>${grandSubtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Est. Taxes:</span>
//                   <span>${grandTaxes.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Est. Fees:</span>
//                   <span>${grandFees.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between font-semibold border-t border-gray-700 pt-2 mt-2">
//                   <span>Total:</span>
//                   <span>${grandTotal.toFixed(2)}</span>
//                 </div>
//               </div>
//             )}

//             {/* Footer buttons */}
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setCart([])}
//                 className="w-1/3 bg-gray-600 hover:bg-gray-500 text-white py-2 rounded-lg"
//               >
//                 Clear
//               </button>
//               <button
//                 disabled={cart.length === 0}
//                 className={`flex-1 ${
//                   cart.length === 0
//                     ? "bg-gray-500 cursor-not-allowed"
//                     : "bg-gradient-to-tr from-[#E8424A] to-[#F97D67] hover:opacity-90"
//                 } text-white font-semibold py-2 text-sm rounded-lg`}
//               >
//                 Checkout (${grandTotal.toFixed(2)})
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Form;









import React, { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useAxios from "../Hook/useAxios";
import Swal from "sweetalert2";
const Form = () => {
  const stripePromise = loadStripe(
    "pk_test_51QfDLMIXauIQhi9zpYyko394OCzT9oOQKPvLFEn5siB1Eld53WIRA6H63Oowd9ldwe1lkzoOO6WrEjUq2bQM1Tgi004aRSvT6f"
  );
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [type, setType] = useState(79); // price per night
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const [clientSecret, setClientSecret] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [rent , setRent] = useState([])
  const axiosSecure = useAxios();

  console.log(start , end);

  // ✅ Using global cart and drawer from AuthProvider
  const { drawerOpen, openDrawer, closeDrawer, cart, setCart } = useAuth();

  // calculate nights
  const nights =
    start && end
      ? Math.max(
          1,
          Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24))
        )
      : 1;

  const subtotal = rooms * type * nights;
  const taxes = subtotal * 0.12;
  const fees = 5;
  const total = subtotal + taxes + fees;

  function handleBook(e) {
    e.preventDefault();
    if (!start || !end || new Date(start) >= new Date(end)) {
      alert("Please select a valid check-in and check-out date.");
      return;
    }
  }

  function handleAddToCart() {
    if (!start || !end || new Date(start) >= new Date(end)) {
      alert("Please select a valid check-in and check-out date.");
      return;
    }

    const booking = {
      id: Date.now(),
      start,
      end,
      rooms,
      guests,
      type,
      nights,
      subtotal,
      taxes,
      fees,
      total,
    };

    setCart((prev) => [...prev, booking]);
    openDrawer(); 
  }

  function getRoomName(price) {
    if (price === 79) return "Standard";
    if (price === 99) return "Double Bed";
    if (price === 149) return "Luxury Suite";
    return "Room";
  }

  const grandSubtotal = cart.reduce((sum, item) => sum + item.subtotal, 0);
  const grandTaxes = cart.reduce((sum, item) => sum + item.taxes, 0);
  const grandFees = cart.reduce((sum, item) => sum + item.fees, 0);
  const grandTotal = cart.reduce((sum, item) => sum + item.total, 0);

  //  stripe payment

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ grandTotal }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [grandTotal]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };



  function handleCheckout() {
    // STRIPE Payment Logic
    if (clientSecret) {
      setShowCheckout(true);

      axiosSecure
        .post("/bookings", cart)
        .then(() => {
          Swal.fire({
            title: "Confirmed",
            text: `Successfully booked for ${cart.length} Rooms`,
            icon: "success",
          });

          setCart([]);
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            title: "Something Went Wrong",
            icon: "error",
            draggable: true,
          });
        });
    } else {

      Swal.fire({
        title: "Something Went Wrong",
        icon: "error",
        draggable: true,
      });
      return;
    }


    // Reset form inputs
    setStart("");
    setEnd("");
    setRooms(1);
    setGuests(2);
    setType(79);
  }

  return (
    <div className="flex justify-center items-center px-4">
      {/* Booking Form */}
      <div className="bg-[#1B1F2B] rounded-2xl p-6 shadow-xl max-w-lg w-full">
        <h2 className="text-white text-xl font-semibold mb-6">
          Book your stay
        </h2>

        {/* Form start  */}

        <form className="space-y-4" onSubmit={handleBook}>
          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Check-in
              </label>
              <input
                type="date"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Check-out
              </label>
              <input
                type="date"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Room + Guests */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Room type
              </label>
              <select
                value={type}
                onChange={(e) => setType(Number(e.target.value))}
                className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
              >
                <option value={79}>Standard / $79</option>
                <option value={99}>Double Bed / $99</option>
                <option value={149}>Luxury Suite / $149</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Rooms</label>
              <input
                type="number"
                min={1}
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none text-sm focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Guests</label>
              <input
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none text-sm focus:border-blue-500"
              />
            </div>
          </div>

          {/* Live Estimate */}

          <div className="text-white text-sm">
            {rooms} room(s) × {nights} night(s) — {getRoomName(type)} ($
            {type}/night) = ${subtotal.toFixed(2)}
          </div>

          {/* Live Estimate closed */}

          <div className="flex gap-5 items-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-tr from-[#E8424A] to-[#F97D67] hover:opacity-90 text-white font-medium py-3 rounded-lg transition-colors text-sm"
            >
              Check Availability
            </button>

            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-lg transition-colors text-sm"
            >
              Add to Cart
            </button>
          </div>
        </form>

        {/* Form closed */}

        {/* Totals */}

        {cart.length > 0 && (
          <div className="text-white space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Room Subtotal:</span>
              <span>${grandSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Est. Taxes:</span>
              <span>${grandTaxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Est. Fees:</span>
              <span>${grandFees.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold border-t border-gray-700 pt-2 mt-2">
              <span>Total:</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Drawer     */}

      {drawerOpen && (
        <div className="fixed inset-0 flex justify-end z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeDrawer}
          ></div>

          <div className="relative bg-[#1B1F2B] w-full md:w-[500px] h-full shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-2">
              <h2 className="text-white text-lg font-semibold">Your Cart</h2>
              <button
                onClick={closeDrawer}
                className="text-gray-400 hover:text-white"
              >
                Close ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-400">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#0F1320] rounded-lg p-4 mb-4 border border-gray-700"
                >
                  <div className="flex justify-between text-white mb-1">
                    <span>{getRoomName(item.type)}</span>
                    <span>${item.type.toFixed(2)} / night</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    {item.start} → {item.end} ({item.nights} night
                    {item.nights > 1 ? "s" : ""})
                  </p>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>{item.rooms} room(s)</span>
                    <span>${item.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {item.guests} guest(s)
                  </div>

                  <button
                    onClick={() =>
                      setCart((prev) => prev.filter((c) => c.id !== item.id))
                    }
                    className="mt-3 px-4 py-1 bg-red-600 hover:bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}

            {cart.length > 0 && (
              <div className="text-white space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Room Subtotal:</span>
                  <span>${grandSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Est. Taxes:</span>
                  <span>${grandTaxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Est. Fees:</span>
                  <span>${grandFees.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold border-t border-gray-700 pt-2 mt-2">
                  <span>Total:</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setCart([])}
                className="w-1/3 bg-gray-600 hover:bg-gray-500 text-white py-2 rounded-lg"
              >
                Clear
              </button>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className={`flex-1 ${
                  cart.length === 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-tr from-[#E8424A] to-[#F97D67] hover:opacity-90"
                } text-white font-semibold py-2 text-sm rounded-lg`}
              >
                Checkout (${grandTotal.toFixed(2)})
              </button>
            </div>

            {/* ✅ Stripe Checkout Form */}
            {showCheckout && clientSecret && (
              <div className="mt-6">
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Drawer Closed */}
    </div>
  );
};

export default Form;
