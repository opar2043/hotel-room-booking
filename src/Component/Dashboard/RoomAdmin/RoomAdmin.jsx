import React from "react";
import useAxios from "../../Hook/useAxios";
import useRoom from "../../Hook/useRoom";
import Swal from "sweetalert2";

const RoomAdmin = () => {
  const axiosSecure = useAxios();
  const [roomdata, isLoading, refetch] = useRoom([]) || [];

  function handleUpdate(id, currentStatus) {
    const newStatus = currentStatus === "Free" ? "Booked" : "Free";

    Swal.fire({
      title: "Are you sure?",
      text: `Change status to ${newStatus}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/rooms/${id}`, { status: newStatus })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Room status updated to ${newStatus}`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
              return
            } else {
              Swal.fire({
                icon: "info",
                title: "No changes were made.",
              });
              return
            }
          })
      }
    });
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-6">Room Management</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 border border-gray-700">Room No</th>
              <th className="p-3 border border-gray-700">Category</th>
              <th className="p-3 border border-gray-700">Price</th>
              <th className="p-3 border border-gray-700">Status</th>
              <th className="p-3 border border-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {roomdata.map((room) => (
              <tr
                key={room._id}
                className={`text-center ${
                  room.status === "Booked" ? "bg-red-900/40" : ""
                }`}
              >
                <td className="p-2 border border-gray-700">{room.roomnum}</td>
                <td className="p-2 border border-gray-700">{room.category}</td>
                <td className="p-2 border border-gray-700">${room.price}</td>
                <td
                  className={`p-2 border border-gray-700 font-semibold ${
                    room.status === "Booked" ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {room.status}
                </td>
                <td className="p-2 border border-gray-700">
                  <button
                    onClick={() => handleUpdate(room._id, room.status)}
                    className={`px-4 py-1 rounded ${
                      room.status === "Free"
                        ? "bg-green-600 hover:bg-green-500"
                        : "bg-red-600 hover:bg-red-500"
                    }`}
                  >
                    {room.status === "Free" ? "Book" : "Free"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomAdmin;
