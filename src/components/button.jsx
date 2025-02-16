import React from "react";

export default function Button({ desc, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {desc}
    </button>
  );
}
