import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ContactList.module.css";
import { MdOutlineGridView } from "react-icons/md";
import { TfiViewList } from "react-icons/tfi";


export default function ContactList({ contacts }) {
  const [view, setView] = useState("list");

  return (
    <div>
      <div className={styles.viewOptions}>
        <button className={styles.listButton} onClick={() => setView("list")}>
        <TfiViewList />
        </button>
        <button className={styles.cardButton} onClick={() => setView("card")}>
        <MdOutlineGridView />
        </button>
      </div>
      {view === "list" ? (
        <table className={styles.contactTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th className={styles.actionHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td className={styles.actionButtons}>
                  <Link to={`/contacts/${contact.id}`} className={styles.viewBtn}>View</Link>
                  <button className={styles.editBtn}>Edit</button>
                  <button className={styles.deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={styles.cardContainer}>
          {contacts.map((contact) => (
            <div key={contact.id} className={styles.card}>
              <h3>{contact.name}</h3>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
              <div className={styles.cardActions}>
                <Link to={`/contacts/${contact.id}`} className={styles.viewBtn}>View</Link>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}