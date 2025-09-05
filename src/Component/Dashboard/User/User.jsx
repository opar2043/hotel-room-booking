import Swal from "sweetalert2";
import useAxios from "../../Hook/useAxios";
import useUser from "../../Hook/useUser";


const User = () => {
  const axiosSecure = useAxios();
  const [userdata, isLoading, refetch] = useUser([] ) || []

  function handleRoleUpdate(id, currentRole) {
    const newRole = currentRole === "customer" ? "admin" : "customer";

    Swal.fire({
      title: "Are you sure?",
      text: `Change role to ${newRole}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/${id}`, { role: newRole })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `User role updated to ${newRole}`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
              return;
            } 
          });
      }
    });
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 border border-gray-700">Name</th>
              <th className="p-3 border border-gray-700">Email</th>
              <th className="p-3 border border-gray-700">Role</th>
              <th className="p-3 border border-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((user) => (
              <tr
                key={user._id}
                className={`text-center ${
                  user.role === "admin" ? "bg-blue-900/40" : ""
                }`}
              >
                <td className="p-2 border border-gray-700">{user.name}</td>
                <td className="p-2 border border-gray-700">{user.email}</td>
                <td
                  className={`p-2 border border-gray-700 font-semibold ${
                    user.role === "admin" ? "text-blue-400" : "text-green-400"
                  }`}
                >
                  {user.role}
                </td>
                <td className="p-2 border border-gray-700">
                  <button
                    onClick={() => handleRoleUpdate(user._id, user.role)}
                    className={`px-4 py-1 rounded ${
                      user.role === "customer"
                        ? "bg-green-600 hover:bg-green-500"
                        : "bg-red-600 hover:bg-red-500"
                    }`}
                  >
                    {user.role === "customer" ? "Make Admin" : "Make Customer"}
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

export default User;
