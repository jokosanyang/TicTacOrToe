import React from 'react';
import Quiz from './components/Quiz';

const App = () => {
	const [started, setStart] = React.useState(null);

	return (
		<React.Fragment>
			<header>
				<h1>TIC, TAC, TOE</h1>
			</header>
			{started ? (
				<Quiz/>
			) : (
				<section>
					<h2>
						If you've come to finally discover who you are, you're in the right
						place.
						<br />
						Answer four quick questions and find out once and for all, if you're
						a tic, a tac, or a toe.
					</h2>
					<button onClick={() => setStart(true)}>Start</button>
				</section>
			)}
		</React.Fragment>
	);
};

export default App;
