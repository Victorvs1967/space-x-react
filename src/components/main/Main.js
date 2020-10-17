import React, { useState, useEffect } from 'react';

import useRockets from '../hooks/useRockets';

import './main.css';

const Main = ({ rocket, name }) => {

  const [ video, setVideo ]  = useState(null);
	
  const { getVideo} = useRockets();

  useEffect(() => {
    setVideo(getVideo(rocket));
  }, [getVideo])

  console.log(video);

  return (
    <section className="main">
      <h1 className="title">{ rocket || name }</h1>

      <div className="video-container">
        {video && <video className="video" autoPlay loop muted src={video} />}
      </div>
    </section>
  );
}

export default Main;