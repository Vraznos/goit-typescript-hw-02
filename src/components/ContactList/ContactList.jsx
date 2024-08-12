import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contList}>
      {contacts.map((cont) => (
        <li key={cont.id} className={css.contItem}>
          <Contact contItem={cont} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
