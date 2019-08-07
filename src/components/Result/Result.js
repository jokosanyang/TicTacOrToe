import React from 'react';

const Result = (props) => {
	const { tic, tac, toe } = props;
	const tictactoe = [tic, tac, toe];
	console.log(tictactoe);

	return (
		<section>
			<h2>Wow! You're a bleep!</h2>
		</section>
	);
};

export default Result;
