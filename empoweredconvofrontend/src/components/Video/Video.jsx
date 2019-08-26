import React from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube';

import axios from 'axios';
import './Video.css';

const Video = props => {
  //   const convoReq = props.match.params.id;
  const convoReq = props.location.search
    .split('')
    .splice(5, props.location.search.length - 1)
    .join('');

  let hasSent = false;
  const finishConvo = ({ played }) => {
    if (props.fromConvo && !hasSent && played >= 0.9) {
      axios
        .delete(
          `https://empoweredconversation.herokuapp.com/conversations/finished/${convoReq}`,
        )
        .then(res => {
          console.log(res, 'from res', 'convo finished');
        })
        .catch(err => {
          console.log(err, 'from err');
        });
      hasSent = true;
    }
    // console.log(played);
  };

  return (
    <div className="videoBackground">
      <div className={'video-' + props.size}>
        <YouTubePlayer
          className="video"
          url="https://www.youtube.com/watch?v=bBrgb-uLtlE"
          controls={true}
          onProgress={finishConvo}
          config={{
            youtube: {
              playerVars: { modestbranding: 1 },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Video;
