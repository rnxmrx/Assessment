import React from "react";

export default function Modal({ closeModal, save }) {
  return (
    <div className="modal">
      <h3>Add New</h3>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <button onClick={save}>Save</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
}
