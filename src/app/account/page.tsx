import React from "react";
import { FaCog, FaInfoCircle, FaQuestionCircle, FaShareAlt, FaLanguage, FaUserShield, FaStar, FaShoppingBag, FaEye } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Profile Header */}
      <div className="bg-white p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <img src="/profile-placeholder.png" alt="Profile" className="w-12 h-12 rounded-full border" />
          <div className="ml-3">
            <p className="font-semibold text-black">Not Logged in</p>
            <p className="text-red-500 text-sm">+237 x xx xx xx xx</p>
          </div>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">Sign in</button>
      </div>

      {/* Profile Menu */}
      <div className="p-4 space-y-4">
        <div className="bg-white p-3 flex items-center justify-between rounded-lg shadow-sm">
          <div className="flex items-center">
            <FaShoppingBag className="text-blue-500 text-lg" />
            <p className="ml-3 text-black">Vendor of the day</p>
          </div>
          <FaEye className="text-gray-400" />
        </div>

        <div className="bg-white p-3 flex items-center justify-between rounded-lg shadow-sm">
          <div className="flex items-center">
            <FaEye className="text-red-400 text-lg" />
            <p className="ml-3 text-black">Today's Products</p>
          </div>
          <FaEye className="text-gray-400" />
        </div>

        {/* Grid Menu */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: <FaCog className="text-orange-500" />, text: "Settings" },
            { icon: <FaInfoCircle className="text-red-500" />, text: "About Buyam" },
            { icon: <FaQuestionCircle className="text-teal-500" />, text: "Help & Support" },
            { icon: <FaShareAlt className="text-purple-500" />, text: "Share" },
            { icon: <FaLanguage className="text-pink-500" />, text: "Language" },
            { icon: <FaUserShield className="text-green-500" />, text: "Invite" },
            { icon: <FaUserShield className="text-yellow-500" />, text: "Legal & Policies" },
            { icon: <FaStar className="text-blue-500" />, text: "Rate Us" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 flex items-center rounded-lg shadow-sm">
              {item.icon}
              <p className="ml-3 text-black">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
