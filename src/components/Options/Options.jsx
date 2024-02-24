import css from './Options.module.css';
const Options = ({ updateFeedback, resetFeedback, hasFeedback }) => {
  return (
    <div>
      <button className={css.button} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {hasFeedback && (
        <button className={css.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
