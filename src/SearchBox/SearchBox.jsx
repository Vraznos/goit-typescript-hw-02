import { useId } from "react";
import css from "./SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  const findId = useId();
  return (
    <div className={css.findContainer}>
      <label className={css.findLabel} htmlFor={findId}>
        Find contacts by name
      </label>
      <input
        className={css.findInput}
        type="text"
        id={findId}
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
      />
    </div>
  );
}
