import React from 'react';
import * as S from '../../App.style';

const Result = (props) => {
	const { tic, tac, toe, setStart } = props;
	const tictactoe = [tic, tac, toe];
	console.log(tictactoe);

	const getResult = (array) => {
		let max = array[0];
		let maxIndex = 0;

		for (var i = 1; i < array.length; i++) {
			if (array[i] > max) {
				maxIndex = i;
				max = array[i];
			}
		}
		const results = ['TIC', 'TAC', 'TOE']
		return results[maxIndex];
	};

	return (
		<section>
			<h2>Wow! You're a {getResult(tictactoe)}!</h2>
			<img src={`${getResult(tictactoe)}.jpg`} alt=""></img>
			<S.Button onClick={()=>setStart(false)}>Start again</S.Button>
		</section>
	);
};

export default Result;
