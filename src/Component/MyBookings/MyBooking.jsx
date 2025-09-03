// import React, { useState } from "react";
// import useBookings from "../Hook/useBookings";

// const MyBooking = () => {
//   const [bookings, isLoading] = useBookings([]);
//   const [email, setEmail] = useState("");
//   const [matchedBookings, setMatchedBookings] = useState([]);

//   const handleSearch = () => {
//     const filtered = bookings.filter(
//       (booking) => booking.email?.toLowerCase() === email.toLowerCase()
//     );
//     setMatchedBookings(filtered);
//   };

//   if (isLoading) return <p>Loading bookings...</p>;

//   return (
//     <div className="p-4 min-h-screen">
//       <h2 className="text-xl font-bold mb-4">Search Booking by Email</h2>

//       <div className="mb-4 flex gap-2">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
//         >
//           Search
//         </button>
//       </div>

//       {matchedBookings.length > 0 ? (
//         <table className="min-w-full border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2">Room Type</th>
//               <th className="border p-2">Check-in</th>
//               <th className="border p-2">Check-out</th>
//               <th className="border p-2">Guests</th>
//               <th className="border p-2">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {matchedBookings.map((booking, idx) => (
//               <tr key={idx}>
//                 <td className="border p-2">{booking.type}</td>
//                 <td className="border p-2">{booking.start}</td>
//                 <td className="border p-2">{booking.end}</td>
//                 <td className="border p-2">{booking.guests}</td>
//                 <td className="border p-2">${booking.total}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         email && <p>No bookings found for this email.</p>
//       )}
//     </div>
//   );
// };

// export default MyBooking;






import React, { useState } from "react";
import useBookings from "../Hook/useBookings";

const MyBooking = () => {
  const [bookings, isLoading] = useBookings([]);
  const [id, setId] = useState(""); // user can type id for testing
  const [matchedBookings, setMatchedBookings] = useState([]);

  const handleSearch = () => {
    const filtered = bookings.filter(
      (booking) => booking.id === Number(id)
    );
    setMatchedBookings(filtered);
  };

  if (isLoading) return <p>Loading bookings...</p>;

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Search Booking by ID</h2>

      <div className="mb-4 flex gap-2">
        <input
          type="number"
          placeholder="Enter booking ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {matchedBookings.length > 0 ? (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-black">
              <th className="border p-2">Room Type</th>
              <th className="border p-2">Check-in</th>
              <th className="border p-2">Check-out</th>
              <th className="border p-2">Guests</th>
              <th className="border p-2">Total</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {matchedBookings.map((booking, idx) => (
              <tr key={idx}>
                <td className="border p-2 text-white">{booking.type}</td>
                <td className="border p-2 text-white">{booking.start}</td>
                <td className="border p-2 text-white">{booking.end}</td>
                <td className="border p-2 text-white">{booking.guests}</td>
                <td className="border p-2 text-white">${booking.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        id && <p>No bookings found for this ID.</p>
      )}
    </div>
  );
};

export default MyBooking;


