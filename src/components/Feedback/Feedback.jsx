import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  if (totalFeedback === 0) {
    return;
  }

  return (
    <>
      <ul className={css.listFeedback}>
        <li>
          <p>Good: {feedback.good}</p>
        </li>
        <li>
          <p>Neutral: {feedback.neutral} </p>
        </li>
        <li>
          <p>Bad: {feedback.bad} </p>
        </li>
        <li>
          <p>Total: {totalFeedback}</p>
        </li>
        <li>
          <p>Positive: {positiveFeedback}% </p>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
