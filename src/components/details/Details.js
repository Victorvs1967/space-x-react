import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Main from '../main/Main';
import useLaunches from '../hooks/useLaunches';

import './details.css';

const Details = (props) => {

    const [ launch, setLaunch ]  = useState(null);
    const { getLaunch } = useLaunches();

    useEffect(() => {
        setLaunch(getLaunch(props.match.params.id));
    }, [getLaunch])

    const history = useHistory();   

    if (!launch) return null;

    return (
        <>
            <Main name={launch.name} />
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={launch.links.patch.small} alt=""/>
                        </div>
                        <div className="details-content">
                            <p className="details-description">{launch.details}</p>
                        </div>
                    </div>
                    <div>
                        <iframe className="details-youtube" width="560" height="315" src={`https://www.youtube.com/embed/${launch.links.youtube_id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="111" />
                    </div>
                </div>
                <a href={history.goBack} onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </>
    )
};

export default Details;
