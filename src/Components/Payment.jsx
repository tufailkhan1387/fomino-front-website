import React from "react";
import { MdPayment } from "react-icons/md";

import PaymentModal from "./PaymentModal";

export default function Payment() {

  return (
    <>
      <div className="flex items-center gap-3">
        <MdPayment className="text-black text-2xl" />
        <span className="text-xl font-semibold">Payment Method</span>
      </div>

      <div className="p-4 shadow-large rounded-lg space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-paraColor font-semibold">
            Add a debit/ credit card
          </div>

          <PaymentModal />
        </div>
      </div>
    </>
  );
}
