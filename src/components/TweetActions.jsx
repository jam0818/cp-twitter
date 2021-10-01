import PropTypes from "prop-types";
import copy from 'copy-to-clipboard';
import { FaComment } from 'react-icons/fa';
import './TweetActions.css';

function TweetActions({ user, content, counters }) {
  const handleShareButtonClick = () => {
    copy(`@${user}: "${content}"`)
  };

  return (
    <ul className={'tweet-actions'}>
      <li>
        <button type={"button"} className={'tweet-actions-button'}>
          <FaComment size={'18'} /> {counters.comments}
        </button>
      </li>
    </ul>
  );
}

TweetActions.propTypes = {
  user: PropTypes.string,
  content: PropTypes.string,
  counters: PropTypes.shape({
    comment: PropTypes.number,
  })
}

export default TweetActions;