import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  const handleButtonClick = (type) => {
    updateFeedback(type);
  };

  return (
    <>
      <ul className={css.listBtn}>
        <li>
          <button className={css.btn} onClick={() => handleButtonClick("good")}>
            Good
          </button>
        </li>
        <li>
          <button
            className={css.btn}
            onClick={() => handleButtonClick("neutral")}
          >
            Neutral
          </button>
        </li>
        <li>
          <button className={css.btn} onClick={() => handleButtonClick("bad")}>
            Bad
          </button>
        </li>
        <li>
          {totalFeedback > 0 && (
            <button className={css.btn} onClick={resetFeedback}>
              Reset
            </button>
          )}
        </li>
      </ul>
    </>
  );
};

export default Options;
