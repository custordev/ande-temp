"use client";
import React from "react";

function ToggleSwitch({ isMonthly, handleToggle }: any) {
  return (
    <div className="flex items-center justify-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <span className="text-gray-700 font-medium">Monthly</span>
        <div className="relative mx-3">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={isMonthly}
            onChange={handleToggle}
          />
          <div className="w-14 h-8 px-1 bg-slate-800 rounded-full shadow-inner flex items-center">
            <div
              className={`absolute px-3 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                isMonthly ? "translate-x-0" : "translate-x-6"
              }`}
            ></div>
          </div>
        </div>
        <span className="text-gray-700 font-medium">Annually</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
