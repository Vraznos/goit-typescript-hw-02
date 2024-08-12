import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";
export default function Contact({ contItem: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.contact}>
        <p className={css.contactName}>
          <BsFillPersonFill className={css.icon} />
          {name}
        </p>
        <a href="tel:{ number }" className={css.contactPhone}>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </a>
      </div>
      <button type="button" className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
