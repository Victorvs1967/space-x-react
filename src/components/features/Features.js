import React from 'react';
import RelaxWrapper from 'react-rellax-wrapper';

import './features.css';

const rockets = {
	'Falcon 1': './img/falcon-1.png',
	'Falcon 9': './img/falcon-9.png',
	'Falcon Heavy': './img/falcon-heavy.png',
	other: './img/starship.png',  
}

const Features = ({ name, description, diameter, height, mass, payload_weights: payloadWeights }) => (
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
			<img src={rockets[name] ? rockets[name] : rockets.other} alt="rocket" className="rocket" data-rellax-speed="14"/>
			</RelaxWrapper>
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{description}
				</p>
			</article>
		</div>
	</section>
);

export default Features;
