import PropTypes from 'prop-types';
import Tweet from './Tweet.jsx';
import './Timeline.css';
import TweetActions from "./TweetActions";

function Timeline({ tweets }) {
  return (
    <ul className="timeline">
      {tweets
        .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
        .map(
          ({
             id,
             user,
             created_on,
             content,
             comments_count,
          }) => (
          <li key={id} className="timeline-item">
            <Tweet user={user} createdOn={created_on}>
              {content}
            </Tweet>
            <TweetActions
              user={user}
              conten={content}
              counters={{
                comments: comments_count
              }} />
          </li>
        ))}
    </ul>
  );
}

Timeline.propTypes = {
  tweets: PropTypes.array,
};

export default Timeline;