import React from "react";

export default function PaymentInputFields(props) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="card-number" className="text-white text-sm">
        {props.name}
      </label>
      <input
        type="text"
        className="py-3 px-4 rounded-md outline-none relative"
      />
      <img
        src="/images/card-name.webp"
        alt="card-name"
        className="w-8 h-3 absolute top-16 right-4"
      />
    </div>
  );
}
