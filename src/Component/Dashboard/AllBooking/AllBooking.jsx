import { useState } from "react";
import useBookings from "../../Hook/useBookings";

const AllBooking = () => {
  const [bookings, isLoading, refetch] = useBookings([]) || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  // Filter and sort bookings
  const filteredBookings = bookings
    .filter((booking) => {
      const typeStr = booking.type?.toString() || ""; // ensure string
      const matchesSearch =
        typeStr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.name.toString().includes(searchTerm);

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "confirmed" && booking.isConfirm) ||
        (statusFilter === "pending" && !booking.isConfirm);

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (!sortConfig.key) return 0;

      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // helper to map type numbers to names
  const getRoomType = (type) => {
    switch (type) {
      case 79:
        return "Standard";
      case 149:
        return "Luxury";
      case 99:
        return "Double";
      default:
        return `Type ${type}`;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium text-gray-600">Loading bookings...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <h1 className="text-2xl font-bold">Booking Management</h1>
            <p className="text-blue-100">View and manage all hotel bookings</p>
          </div>

          {/* Stats and Filters */}
          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-sm text-blue-600 font-medium">
                  Total Bookings
                </h3>
                <p className="text-2xl font-bold text-blue-800">
                  {bookings.length}
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h3 className="text-sm text-green-600 font-medium">
                  Confirmed
                </h3>
                <p className="text-2xl font-bold text-green-800">
                  {bookings.filter((b) => b.isConfirm).length}
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h3 className="text-sm text-purple-600 font-medium">
                  Total Revenue
                </h3>
                <p className="text-2xl font-bold text-purple-800">
                  {formatCurrency(
                    bookings.reduce((sum, booking) => sum + booking.total, 0)
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search by room type or Name..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="pending">Pending</option>
                </select>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => {
                    setSearchTerm("");
                    setStatusFilter("all");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-4 font-medium text-gray-500">Name</th>
                  <th className="p-4 font-medium text-gray-500">Room Type</th>
                  <th className="p-4 font-medium text-gray-500">
                    Check-in/Check-out
                  </th>
                  <th className="p-4 font-medium text-gray-500">
                    Rooms/Guests/Nights
                  </th>
                  <th className="p-4 font-medium text-gray-500">Total</th>
                  <th className="p-4 font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBookings.map((booking , idx) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 font-mono text-sm text-gray-600">
                     ({idx + 1}) {booking.name}
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-gray-900">
                        <td className="p-4">
                          <div className=" text-gray-700">
                            {getRoomType(booking.type)}
                          </div>
                        </td>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">
                        <div className="text-gray-900">{booking.start}</div>
                        <div className="text-gray-500">{booking.end}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full mr-2">
                          {booking.rooms} Rooms
                        </span>
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full mr-2">
                          {booking.guests} Guests
                        </span>
                        <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                          {booking.nights} Nights
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-gray-900">
                        {formatCurrency(booking.total)}
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          booking.isConfirm
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {booking.isConfirm ? "Confirmed" : "Pending"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* No results */}
            {filteredBookings.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                No bookings found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooking;
