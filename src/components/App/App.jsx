import { useState } from 'react';
import { useEffect } from 'react';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import Description from '../Description/Description';

const App = () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return savedFeedback ? savedFeedback : initialState;
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(initialState);
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positivePercentage = Math.round(
    ((good + neutral) / totalFeedback) * 100
  );

  const hasFeedback = totalFeedback > 0;

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        hasFeedback={hasFeedback}
      />
      {hasFeedback && (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
      {!hasFeedback && <Notification message="No feedback yet" />}
    </div>
  );
};

export default App;
