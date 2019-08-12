import React from 'react';
import * as S from '../../App.style';
import ticImage from '../../../public/tic.jpg';
import tacImage from '../../../public/tac.jpg';
import toeImage from '../../../public/toe.jpg';

const Result = (props) => {
	const { tic, tac, toe, setStart } = props;
	const tictactoe = [tic, tac, toe];
	console.log(tictactoe);

	const [winner, setWinner] = React.useState({});

	const getResult = (array) => {
		let max = array[0];
		let maxIndex = 0;

		for (var i = 1; i < array.length; i++) {
			if (array[i] > max) {
				maxIndex = i;
				max = array[i];
			}
		}
		const tResults = ['TIC', 'TAC', 'TOE'];
		const tImage = [ticImage, tacImage, toeImage];

		return { name: tResults[maxIndex], image: tImage[maxIndex] };
	};

	return (
		<S.Container>
			<h2>Wow! You're a {getResult(tictactoe).name}!</h2>
			<S.Image src={getResult(tictactoe).image} alt="" height="42" width="42" />
			<S.Link
				target="blank"
				href={`https://twitter.com/intent/tweet?text=I%20just%20found%20out%20that%20I'm%20a%20${
					getResult(tictactoe).name
				}!%20Discover%20who%20you%20are%20at:%20https://tictacortoe.netlify.com`}>
				Share your result on Twitter!
			</S.Link>
			<S.Button onClick={() => setStart(false)}>Start again</S.Button>
		</S.Container>
	);
};

export default Result;
