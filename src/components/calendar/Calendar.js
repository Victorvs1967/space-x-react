import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../main/Main';

import useLaunches from '../../components/hooks/useLaunches';

import './calendar.css';

const Calendar = () => {

    const { data } = useLaunches();

    const loader = `
        <div className='cssload-loader'>
            <div className='cssload-inner cssload-one'></div>
            <div className='cssload-inner cssload-two'></div>
            <div className='cssload-inner cssload-three'></div>
        </div>  
    `;

    return (
        <>
            <Main name='Calendar SpaceX' />
            <section className="calendar">
                <div className="container">
                    <ul className="calendar-list">
                        { data ? data.map(item => (
                                <li key={item.id} className="calendar-item">
                                    <article className="launches">
                                        <div className="launches-image">
                                            <img src={item.links.patch.small} alt="img"/>
                                        </div>
                                        <div className="launches-content">
                                            <h2 className="launches-title">{item.name}</h2>
                                            <Link to={`/details/${item.id}`} className="button launches-details">Подробнее</Link>
                                        </div>
                                    </article>
                                </li>
                            )) : loader
                        }
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Calendar;