"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Page = () => {
  const [activeTab, setActiveTab] = useState("explore");

  return (
    <div className="min-h-screen bg-white text-black"> {/* Ensuring all text is black */}
      {/* Search Bar */}
      <div className="p-4">
        <div className="relative flex items-center border rounded-full px-4 py-2 bg-gray-100">
          <input
            type="text"
            placeholder="Search products, services or vendors"
            className="w-full bg-transparent outline-none text-black"
          />
          <FaSearch className="text-black" size={18} />
        </div>
      </div>

      {/* Signup Section */}
      <div className="text-center py-2 text-black text-sm">
        Signup to personalize experience
      </div>
      <div className="flex justify-center space-x-4 py-2">
        <button className="bg-red-600 text-white px-6 py-2 rounded-full">Signup</button>
        <button className="border border-red-600 text-red-600 px-6 py-2 rounded-full">Sell on Buyam</button>
      </div>

      {/* Shops Available */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-black">Shops Available</h2>
        <button className="text-red-600 text-sm">See all</button>
      </div>
      <div className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide px-4">
        {["FreshMart", "City Grocers", "Daily Needs", "Food Lovers", "Green Basket", "SuperMart"].map((shop, index) => (
          <div key={index} className="w-40 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-sm font-semibold text-black">
            {shop}
          </div>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-6 border-b py-2 text-black">
        <button onClick={() => setActiveTab("explore")} className={`pb-2 ${activeTab === "explore" ? "border-b-2 border-red-600 font-semibold" : ""}`}>
          Explore
        </button>
        <button onClick={() => setActiveTab("forYou")} className={`pb-2 ${activeTab === "forYou" ? "border-b-2 border-red-600 font-semibold" : ""}`}>
          For You
        </button>
        <button onClick={() => setActiveTab("following")} className={`pb-2 ${activeTab === "following" ? "border-b-2 border-red-600 font-semibold" : ""}`}>
          Following
        </button>
      </div>

      {/* Content Sections (Only One Visible at a Time) */}
      <div className="p-4">
        {/* Explore Section */}
        {activeTab === "explore" && (
          <div>
            <h2 className="text-lg font-semibold text-black">Explore</h2>
            {/* Categories */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-black">Categories</h2>
              <button className="text-red-600 text-sm">See all</button>
            </div>
            <div className="grid grid-cols-4 gap-4 py-4">
              {["Electronics", "Super Market", "Health & Beauty", "Home & Office", "Phone & Tablets", "Computing", "Baby Products", "Gaming", "Sporting Goods"].map((category, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                  <span className="text-xs text-center text-black">{category}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* For You Section */}
        {activeTab === "forYou" && (
          <div>
            <h2 className="text-lg font-semibold text-black">For You</h2>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-black">Trending Now on Buyam</h2>
              <button className="text-red-600 text-sm">See all</button>
            </div>
            <div className="flex space-x-4 overflow-x-auto py-4">
              <div className="w-28 h-28 bg-gray-200 rounded-lg"></div>
              <div className="w-28 h-28 bg-gray-200 rounded-lg"></div>
              <div className="w-28 h-28 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        )}

        {/* Following Section */}
        {activeTab === "following" && (
          <div>
            <h2 className="text-lg font-semibold text-black">Following</h2>
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
              <p className="font-semibold mt-2 text-black">No Products or Services</p>
              <p className="text-sm text-center text-black">Please signup to see products from vendors you are following</p>
              <button className="border border-red-600 text-red-600 px-6 py-2 rounded-full mt-4">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
