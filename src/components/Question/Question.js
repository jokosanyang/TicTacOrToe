import React from 'react';
import * as S from '../../App.style';

const Question = (props) => {
	const {
		number,
		numberFunction,
		tic,
		tac,
		toe,
		setTic,
		setTac,
		setToe
	} = props;
	const tictactoe = ['tic', 'tac', 'toe'];

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
			case 'tic':
				setTic(tic + 1);
				break;
			case 'tac':
				setTac(tac + 1);
				break;
			case 'toe':
				setToe(toe + 1);
				break;
			default:
				console.log('Problem with the switch case. :(');
		}
		if (number <= 4) {
			numberFunction(number + 1);
		}
		if (number < 4) {
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
					<S.Answer key={t} onClick={() => {
						console.log(tictactoe[t]);
						return ticFunction(tictactoe[t])}}>
						{option}
					</S.Answer>
				);
			})}
		</div>
	);
};

export default Question;