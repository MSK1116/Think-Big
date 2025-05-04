import React, { useState } from "react";

const ModalOwn = ({ text, children }) => {
  const [isVisibile, setIsVisible] = useState(false);
  const randomNumber = Math.random();

  return (
    <>
      <div className=" relative inline-block" onClick={() => document.getElementById(`${randomNumber}`).showModal()}>
        {children}
        <dialog id={`${randomNumber}`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold">{text}</h3>
            <p className="py-4 text-sm">Press ESC key or click outside to close</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
};

export default ModalOwn;
