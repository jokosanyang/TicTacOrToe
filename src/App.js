import React from 'react';
import Question from './components/Question/Question';
import Result from './components/Result/Result';

const App = () => {
	const [started, setStart] = React.useState(null);
    const [questionNumber, incrementNumber] = React.useState(1);


	return (
		<React.Fragment>
			<header>
				<h1>TIC, TAC, TOE</h1>
			</header>
			{started ? (
				<Question number={questionNumber} numberFunction={incrementNumber} />
			) : (
				<div>
					<h2>
						If you've come to finally discover who you are, you're in the right
						place.
						<br />
						Answer four quick questions and find out once and for all, if you're
						a tic, a tac, or a toe.
					</h2>
					<button onClick={() => setStart(true)}>Start</button>
				</div>
            )}
            {questionNumber > 4 ? <Result /> : null}
		</React.Fragment>
	);
};

export default App;
