import React, { useState, useEffect} from 'react';
import RelaxWrapper from 'react-rellax-wrapper';

import Main from '../main/Main';
import useRockets from '../hooks/useRockets';

import './features.css';

const Features = ( props ) => {

	const { name, description, diameter, height, mass, payload_weights: payloadWeights } = props;

	const [ image, setImage ]  = useState(null);
	
    const { getImage } = useRockets();

    useEffect(() => {
        setImage(getImage(name));
	}, [getImage])
	
	return (
		<>
			<Main rocket={name}/>
			<section className="features">
				<h2 className="features-title">{name}<br/>Overview</h2>
				<div className="overview">
	
					<table className="table">
						<caption className="table-title">Size</caption>
						<thead>
							<tr>
								<td className="table-column">HEIGHT</td>
								<td className="table-column">{height.meters} m / {height.feet} ft</td>
							</tr>
							<tr>
								<td className="table-column">DIAMETER</td>
								<td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
							</tr>
							<tr>
								<td className="table-column">MASS</td>
								<td className="table-column">{mass.kg} kg / {mass.lb} lb</td>
							</tr>
	
							{payloadWeights.map(item => (
							<tr key={item.id}>
								<td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
								<td className="table-column">{item.kg} kg / {item.lb} lb</td>
							</tr>
							))}
							
						</thead>
					</table>
					<RelaxWrapper speed={8}>
						<img src={image} alt="rocket" className="rocket" data-rellax-speed="14"/>
						{/* <img src={`./img/${rockets[name]}.png`} alt="rocket" className="rocket" data-rellax-speed="14"/> */}
					</RelaxWrapper>
					<article>
						<h3 className="features-subtitle">DESCRIPTION</h3>
						<p className="features-text">
							{description}
						</p>
					</article>
				</div>
			</section>
		</>
	);
}

export default Features;
