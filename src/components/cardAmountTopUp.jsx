import React from "react";

export default function CardAmountTopUp({ desc, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {Number(desc).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}
    </button>
  );
}
