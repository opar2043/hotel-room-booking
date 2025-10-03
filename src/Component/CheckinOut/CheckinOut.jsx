
import React, { useState } from 'react';
import { Calendar, User, Mail, Phone, Home, Users, MessageSquare } from 'lucide-react';
import logo from "../../assets/logo2.jpg";

export default function ImprovedGuestPortal() {
  const [activeTab, setActiveTab] = useState('checkin');

  // Generate room numbers
  const rooms = [];
  for (let floor = 1; floor <= 8; floor++) {
    for (let room = 1; room <= 10; room++) {
      rooms.push(floor.toString() + room.toString().padStart(2, '0'));
    }
  }

  const InputField = ({ icon: Icon, label, ...props }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500">
          <Icon size={20} />
        </div>
        <input
          {...props}
          required
          className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl text-base transition-all focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100"
        />
      </div>
    </div>
  );

  const SelectField = ({ icon: Icon, label, children, ...props }) => (
    <div className="space-y-1">
      <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none z-10">
          <Icon size={20} />
        </div>
        <select
          {...props}
          required
          className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl text-base transition-all appearance-none focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 bg-white"
        >
          {children} 
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );

  const TextAreaField = ({ icon: Icon, label, ...props }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-4 text-red-500">
          <Icon size={20} />
        </div>
        <textarea
          {...props}
          className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl text-base focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 min-h-[120px] resize-y transition-all"
        />
      </div>
    </div>
  );

  return (
    <div className=" bg-white/90 flex items-center justify-center p-4 ">
      <div className="bg-white rounded-3xl shadow-2xl w-full md:w-3/5 overflow-hidden ">

        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-3 sm:p-6">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-3 mb-2">
              <img className="w-40 h-40 rounded-xl" src={logo} />
              <div className="text-xs tracking-[0.3em] opacity-90">BY CHOICE HOTELS</div>
            </div>
            <div className="mt-3">
              <div className="text-sm tracking-widest mb-2 opacity-90">WELCOME TO</div>
              <div className="text-xl md:text-2xl font-bold mb-1">Guest Portal</div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          {/* Tabs */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setActiveTab('checkin')}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-base uppercase tracking-wider transition-all transform hover:scale-[1.02] ${
                activeTab === 'checkin'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Check-In
            </button>
            <button
              onClick={() => setActiveTab('checkout')}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-base uppercase tracking-wider transition-all transform hover:scale-[1.02] ${
                activeTab === 'checkout'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Check-Out
            </button>
          </div>

          {/* Check-In Form */}
          {activeTab === 'checkin' && (
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-4"
            >
              {/* hidden key */}
              <input type="hidden" name="access_key" value="fce30606-5918-43c7-8b08-940a760e16d6" />
              <input type="hidden" name="subject" value="New Check-In Submission" />

              <InputField
                icon={User}
                label="Guest Name"
                type="text"
                name="guest_name"
                placeholder="Enter your full name"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  icon={Mail}
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                />
                <InputField
                  icon={Phone}
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  placeholder="(504) 123-4567"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField icon={Home} label="Room Number" name="room">
                  <option value="">Select your room</option>
                  {rooms.map(room => (
                    <option key={room} value={room}>Room {room}</option>
                  ))}
                </SelectField>
                <SelectField icon={Users} label="Number of Guests" name="guests">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </SelectField>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  icon={Calendar}
                  label="Check-In Date"
                  type="date"
                  name="checkin_date"
                />
                <InputField
                  icon={Calendar}
                  label="Check-Out Date"
                  type="date"
                  name="checkout_date"
                />
              </div>

              <TextAreaField
                icon={MessageSquare}
                label="Special Requests (Optional)"
                name="special_requests"
                placeholder="Any special requests or notes..."
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-xl text-lg font-bold uppercase tracking-wider shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Complete Check-In
              </button>
            </form>
          )}

          {/* Check-Out Form */}
          {activeTab === 'checkout' && (
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value="fce30606-5918-43c7-8b08-940a760e16d6" />
              <input type="hidden" name="subject" value="New Check-Out Submission" />

              <InputField
                icon={User}
                label="Guest Name"
                type="text"
                name="guest_name"
                placeholder="Enter your full name"
              />

              <SelectField icon={Home} label="Room Number" name="room">
                <option value="">Select your room</option>
                {rooms.map(room => (
                  <option key={room} value={room}>Room {room}</option>
                ))}
              </SelectField>

              <InputField
                icon={Mail}
                label="Email Address"
                type="email"
                name="email"
                placeholder="your@email.com"
              />

              <TextAreaField
                icon={MessageSquare}
                label="How was your stay? (Optional)"
                name="feedback"
                placeholder="We'd love to hear about your experience..."
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-8 rounded-xl text-lg font-bold uppercase tracking-wider shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Complete Check-Out
              </button>
            </form>
          )}

          {/* Footer */}
          <div className="mt-5 pt-4 border-t-2 border-gray-100 text-center">
            <div className="flex items-center justify-center gap-3 text-red-600 text-lg font-bold mb-3">
              <span className="text-2xl">✦</span>
              <span>Easy Stop On The Road</span>
              <span className="text-2xl">✦</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 EconoLodge Gretna • Gretna, Louisiana
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



















