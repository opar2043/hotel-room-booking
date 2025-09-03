import React from "react";
import useBookings from "../Hook/useBookings";

const AllBooking = () => {
  const [bookings, isLoading] = useBookings([]);
  console.log(bookings);

  if (isLoading) return <p>Loading bookings...</p>;

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-4 text-white">All Bookings</h2>

      <table className="min-w-full border border-gray-300 text-white/80">
        <thead>
          <tr className="bg-gray-100 text-slate-950">
            <th className="border p-2">ID</th>
            <th className="border p-2">Room Type</th>
            <th className="border p-2">Check-in</th>
            <th className="border p-2">Check-out</th>
            <th className="border p-2">Rooms</th>
            <th className="border p-2">Guests</th>
            <th className="border p-2">Nights</th>
            <th className="border p-2">Subtotal</th>
            <th className="border p-2">Taxes</th>
            <th className="border p-2">Fees</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Confirmed</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, idx) => (
            <tr key={idx}>
              <td className="border p-2">{booking.id}</td>
              <td className="border p-2">{booking.type}</td>
              <td className="border p-2">{booking.start}</td>
              <td className="border p-2">{booking.end}</td>
              <td className="border p-2">{booking.rooms}</td>
              <td className="border p-2">{booking.guests}</td>
              <td className="border p-2">{booking.nights}</td>
              <td className="border p-2">{booking.subtotal}</td>
              <td className="border p-2">{booking.taxes}</td>
              <td className="border p-2">{booking.fees}</td>
              <td className="border p-2">{booking.total}</td>
              <td className="border p-2">{booking.isConfirm ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooking;