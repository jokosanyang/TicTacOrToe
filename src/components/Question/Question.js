import React from 'react';

const Question = (props) => {
	const { number, numberFunction } = props;

	const [tic, setTic] = React.useState(0);
	const [tac, setTac] = React.useState(0);
	const [toe, setToe] = React.useState(0);

	const questions = [
		'When you see a meme you agree with, you exclaim:',
		'How do you respond when confronted with the Truth?',
		'Which fruit do you identify the most with?',
		'which is your favourite season?'
	];
	const answers1 = ['dayummm it me', 'SAME', 'I agree with this meme.'];
	const answers2 = ['fight', 'curl up on the sofa', 'laugh it off'];
	const answers3 = ['peach', 'banana', 'tomato'];
	const answers4 = ['winter', 'the final one', 'the one where Jess comes back'];

	const ticFunction = (id) => {
		switch (id) {
			case tic:
				setTic(tic + 1);
				break;
			case tac:
				setTac(tac + 1);
				break;
			case toe:
				setToe(toe + 1);
				break;
			default:
				console.log('Problem with the switch case. :(');
		}
		if (number < 4) numberFunction(number + 1);
	};

	return (
		<div>
			<p>Question {number} of 4</p>
			<h3>Question goes here</h3>
			<button onClick={() => ticFunction(tic)}>Answer 1</button>
			<button onClick={() => ticFunction(tac)}>Answer 2</button>
			<button onClick={() => ticFunction(toe)}>Answer 3</button>
		</div>
	);
};

export default Question;
