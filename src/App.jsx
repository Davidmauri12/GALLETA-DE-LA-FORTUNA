import { useState } from 'react';
import phrases from './phrases.json';

import { bg1, bg2, bg3, bg4 } from './assets/images';
import './app.css';
const images = [bg1, bg2, bg3, bg4];
function getRandomIndex(arr) {
	return Math.floor(Math.random() * arr.length);
}

function App() {
	const [phrase, setPhrase] = useState(phrases[getRandomIndex(phrases)].phrase);
	const [bgRandom, setBgRandom] = useState(images[getRandomIndex(images)]);
	const handleClick = () => {
		setPhrase(phrases[getRandomIndex(phrases)].phrase);
		setBgRandom(images[getRandomIndex(images)]);
	};
	const bgStyle = `url('${bgRandom}')`;

	return (
		<div className="wrapper" style={{ backgroundImage: bgStyle }}>
			<div className="container">
				<h1 className="title">GALLETA DE LA FORTUNA</h1>

				<blockquote className="card">
					<div className="card__body">
						<p className="card__phrases">"{phrase}"</p>
					</div>
				</blockquote>
				<button className="card__btn" onClick={handleClick}>
					Ver Otro
				</button>
			</div>
		</div>
	);
}

export default App;
