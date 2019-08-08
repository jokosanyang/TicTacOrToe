import React from 'react';
import Question from './Question/Question';
import Result from './Result/Result';

const Quiz = (props) => {
	const [questionNumber, incrementNumber] = React.useState(1);
	const [tic, setTic] = React.useState(0);
	const [tac, setTac] = React.useState(0);
	const [toe, setToe] = React.useState(0);

	return (
		<React.Fragment>
			{questionNumber > 4 ? (
				<Result setStart={props.setStart} tic={tic} tac={tac} toe={toe} />
			) : (
				<Question
					number={questionNumber}
					numberFunction={incrementNumber}
					tic={tic}
					setTic={setTic}
					tac={tac}
					setTac={setTac}
					toe={toe}
					setToe={setToe}
				/>
			)}
		</React.Fragment>
	);
};

export default Quiz;
