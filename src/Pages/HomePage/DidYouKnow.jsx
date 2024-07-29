import React from "react";

export default function DidYouKnow() {
  return (
    <section className="w-[90%] m-auto py-10 lg:py-20">
      <div className="flex flex-col justify-center items-center space-y-8">
        <h3 className="text-2xl lg:text-4xl text-black font-switzer font-extrabold">Did you know?</h3>
        <p className="text-lg lg:text-xl text-black font-switzer font-normal max-w-xl text-center">
          Getting home-delivered sushi is more than your life made easy. When
          you order with Fomino, you help thousands of hard-working restaurant
          and store owners and couriers make a living.
        </p>
      </div>
    </section>
  );
}
