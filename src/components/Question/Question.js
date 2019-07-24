import React from 'react';

const Question = (props) => {
	const { number, numberFunction } = props;

	const [tic, setTic] = React.useState(0);
	const [tac, setTac] = React.useState(0);
	const [toe, setToe] = React.useState(0);
	const tictactoe = [tic, tac, toe];

	const questions = [
		'When you see a meme you agree with, you exclaim:',
		'How do you respond when confronted with the Truth?',
		'Which fruit do you identify the most with?',
		'Which is your favourite season?'
	];
	const answers = [
		['dayummm it me', 'SAME', 'I agree with this meme.'],
		['fight', 'curl up on the sofa', 'laugh it off'],
		['peach', 'banana', 'tomato'],
		['winter', 'the final one', 'the one where Jess comes back']
	];

	const [question, setQuestion] = React.useState(questions[0]);
	const [answer, setAnswer] = React.useState(answers[0]);

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
        console.log(tictactoe);
		if (number < 4) {
			numberFunction(number + 1);
			setQuestion(questions[number]);
			setAnswer(answers[number]);
		}
	};

	return (
		<div>
			<p>Question {number} of 4</p>
			<h3>{question}</h3>
			{answer.map((option, t) => {
				return (
					<button key={t} onClick={() => ticFunction(tictactoe[t])}>
						{option}
					</button>
				);
			})}
		</div>
	);
};

export default Question;
