import React, { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useAxios from "../Hook/useAxios";
import Swal from "sweetalert2";
import useRoom from "../Hook/useRoom";

const Form = () => {
  const stripePromise = loadStripe(
    "pk_test_51QfDLMIXauIQhi9zpYyko394OCzT9oOQKPvLFEn5siB1Eld53WIRA6H63Oowd9ldwe1lkzoOO6WrEjUq2bQM1Tgi004aRSvT6f"
  );

  // Room availabiloity

  const [roomdata, isLoading, refetch] = useRoom([]) || [];

  const standard =
    roomdata &&
    roomdata.filter(
      (room) => room.status == "Free" && room.category == "Standard"
    );
  const double =
    roomdata &&
    roomdata.filter(
      (room) => room.status == "Free" && room.category == "Double Bed"
    );
  const luxary =
    roomdata &&
    roomdata.filter(
      (room) => room.status == "Free" && room.category == "Luxury Suite"
    );

  const allbed = standard && double && luxary;
  // console.log(standard);

  // console.log(luxary);

  const [start, setStart] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [end, setEnd] = useState("");
  const [type, setType] = useState(79); // price per night
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const [clientSecret, setClientSecret] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [roomNum, setRoomnum] = useState(1);

  const axiosSecure = useAxios();

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
      Swal.fire("Please select a valid check-in and check-out date.");
      return;
    }
  }

  function handleAddToCart() {
    if (!start || !end || new Date(start) >= new Date(end)) {
      Swal.fire({
        title: "Please select a valid check-in and check-out date.",
        icon: "error",
        draggable: true,
      });
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
      isConfirm: true,
      name,
      email,
      // roomNum
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

  // stripe payment
  useEffect(() => {
    fetch("https://hotel-book-server-l4so.onrender.com/create-payment-intent", {
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

  // called AFTER successful Stripe payment
  function submitData() {
    axiosSecure
      .post("/bookings", cart)
      .then(() => {
        Swal.fire({
          title: "Confirmed",
          text: `Successfully booked for ${cart.length} room(s)`,
          icon: "success",
        });

        // clear cart + reset form
        setCart([]);
        setStart("");
        setEnd("");
        setRooms(1);
        setGuests(1);
        setType(79);
        setEmail("");
        setName("");
        setShowCheckout(false);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Something Went Wrong",
          icon: "error",
        });
      });
  }

  function handleCheckout() {
    if (clientSecret) {
      setShowCheckout(true);
    } else {
      Swal.fire({
        title: "Payment setup failed",
        icon: "error",
      });
    }
  }

  return (
    <div className="flex justify-center items-center px-4">
      {/* Booking Form */}
      <div className="bg-[#1B1F2B] rounded-2xl p-5 shadow-xl max-w-lg w-full">
        <h2 className="text-white text-xl font-semibold mb-6">
          Book your stay
        </h2>

        {/* Form start */}
        <form className="space-y-4" onSubmit={handleBook}>
          {/* Name + Email */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter Your name"
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
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
              {allbed && (
                <select
                  value={type}
                  onChange={(e) => setType(Number(e.target.value))}
                  className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
                >
                  {standard && standard.length > 0 ? (
                    <option value={79}>Standard / $79</option>
                  ) : (
                    <option value={0} disabled className="text-gray-400">
                      Standard / $79 (All Booked)
                    </option>
                  )}

                  {double && double.length > 0 ? (
                    <option value={99}>Double Bed / $99</option>
                  ) : (
                    <option value={0} disabled className="text-gray-400">
                      Double Bed / $99 (All Booked)
                    </option>
                  )}

                  {luxary && luxary.length > 0 ? (
                    <option value={149}>Luxury Suite / $149</option>
                  ) : (
                    <option value={0} disabled className="text-gray-400">
                      Luxury Suite / $149 (All Booked)
                    </option>
                  )}
                </select>
              )}
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

          <div className="flex gap-5 items-center">
            <button
              type="submit"
              className="w-full bg-gray-700 hover:bg-gray-600 hover:opacity-90 text-white font-medium py-3 rounded-lg transition-colors text-sm"
            >
              Fill Details
            </button>

            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-tr from-[#E8424A] to-[#F97D67]  text-white font-medium py-3 rounded-lg transition-colors text-sm"
            >
              Add to Cart
            </button>
          </div>
        </form>

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

      {/* Drawer */}
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

            {showCheckout && clientSecret && (
              <div className="mt-6">
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm submitData={submitData} />
                </Elements>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
