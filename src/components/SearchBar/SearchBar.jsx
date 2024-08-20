import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const setSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      toast.error("This is an error!");
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.searchContainer}>
      <header className={styles.header}>
        <form onSubmit={setSubmit} className={styles.form}>
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
