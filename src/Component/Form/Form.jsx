import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const {id}  = useParams()
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, pass });
    setName("");
    setPass("");
  };



      const [rooms , setRooms] = useState([]);
      useEffect(()=>{
          fetch("/room.json")
          .then(data => data.json())
          .then(set => setRooms(set))
      },[])
  

      const select = rooms.find(room => room.roomNo == id);
      console.log(select);


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
            LH
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mt-4">EconLodge</h1>
          <p className="text-gray-500 text-sm">Premium Hospitality Experience</p>
        </div>

        {/* Welcome */}
        <h2 className="text-lg font-semibold text-center text-gray-700 mb-6">
          Welcome Guest
        </h2>


        {/* pass */}

        <p className="text-md text-center text-gray-700 mb-6">
         Passward : {select?.pass}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Room Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
