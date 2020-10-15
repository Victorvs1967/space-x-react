import React from 'react';
import RelaxWrapper from 'react-rellax-wrapper';

import './features.css';

const rockets = {
	'Falcon 1': './img/falcon-1.png',
	'Falcon 9': './img/falcon-9.png',
	'Falcon Heavy': './img/falcon-heavy.png',
	other: './img/starship.png',  
}

const Features = (props) => (
	<section className="features">
		<h2 className="features-title">Falcon 1 <br/>Overview</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">Size</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">{ props.rocketFeatures ? props.rocketFeatures.height.meters : '22.25'} m / { props.rocketFeatures ? props.rocketFeatures.height.feet : '73'} ft</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">{ props.rocketFeatures ? props.rocketFeatures.diameter.meters : '1.68 '} m / { props.rocketFeatures ? props.rocketFeatures.diameter.feet : '5.5'} ft</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">{ props.rocketFeatures ? props.rocketFeatures.mass.kg : '30,146'} kg / { props.rocketFeatures ? props.rocketFeatures.mass.lb : '66,460'} lb</td>
					</tr>
					<tr>
						<td className="table-column">PAYLOAD TO LEO</td>
						<td className="table-column">{ props.rocketFeatures ? props.rocketFeatures.payload_weights[0].kg : '450'} kg / { props.rocketFeatures ? props.rocketFeatures.payload_weights[0].lb : '992'} lb</td>
					</tr>
				</thead>
			</table>
			<RelaxWrapper speed={8}>
			<img src={rockets[props.rocket] ? rockets[props.rocket] : rockets.other} alt="rocket" className="rocket" data-rellax-speed="14"/>
			</RelaxWrapper>
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{ props.rocketFeatures ? props.rocketFeatures.description : 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.'}
				</p>
			</article>
		</div>
	</section>
);

export default Features;
