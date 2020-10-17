import {useEffect, useState} from 'react';

import FetchData from '../../service/FetchData';

const images = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship',  
}

const videos = {
    'Falcon 1': 'moon',
    'Falcon 9': 'earth',
    'Falcon Heavy': 'mars',
    'Starship': 'space',
  };
  
const fetchData = new FetchData();

const useRockets = () => {

    const [ data, setData ] = useState([]);   

    useEffect(() => {
        fetchData.getRocket()
        .then(rockets => setData(state => [...rockets]))
    }, []);

    const getImage = rocket => {
        const rocket_ = data.find(item => item.name === rocket);
        if (rocket_) return `../img/${images[rocket_.name]}.png`;
    };
    const getVideo = rocket => {
        const rocket_ = data.find(item => item.name === rocket);
        if (rocket_) return `../video/${videos[rocket_.name]}.mp4`;
    };

    return { data, getImage, getVideo };        
};

export default useRockets;
