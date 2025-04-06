"use client"
import AddKid from "@/components/addKid";
import GetMyKids from "@/components/getMyKids";
import React, { useState } from "react";

const ButtonBar = () => {
  const [activeTab, setActiveTab] = useState("Add Kid");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start">
      {/* Button Bar */}
      <div className="w-full bg-white p-4 flex justify-center gap-4 shadow-md">
        <button
          className={`px-4 py-2 rounded transition ${
            activeTab === "Add Kid"
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-600 hover:bg-blue-200"
          }`}
          onClick={() => setActiveTab("Add Kid")}
        >
          Add Kid
        </button>
        <button
          className={`px-4 py-2 rounded transition ${
            activeTab === "My Kids"
              ? "bg-green-600 text-white"
              : "bg-green-100 text-green-600 hover:bg-green-200"
          }`}
          onClick={() => setActiveTab("My Kids")}
        >
          My Kids
        </button>
        <button
          className={`px-4 py-2 rounded transition ${
            activeTab === "contact"
              ? "bg-red-600 text-white"
              : "bg-red-100 text-red-600 hover:bg-red-200"
          }`}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>

      {/* Conditional Content */}
      <div className="mt-10 text-center text-lg">
        {activeTab === "Add Kid" && <AddKid />}
        {activeTab === "My Kids" && <GetMyKids />}
        {activeTab === "contact" && (
          <p>📞 Get in touch via the Contact Page.</p>
        )}
      </div>
    </div>
  );
};

export default ButtonBar;
