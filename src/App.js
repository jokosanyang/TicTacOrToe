import React from 'react';
import Quiz from './components/Quiz';
import GlobalStyle from './globalStyle';
import * as S from './App.style';

const App = () => {
	const [started, setStart] = React.useState(null);

	return (
		<React.Fragment>
			<GlobalStyle/>
			<header>
				<h1>TIC, TAC, TOE</h1>
			</header>
			{started ? (
				<Quiz setStart={setStart}/>
			) : (
				<section>
					<h2>
						If you've come to finally discover who you are, you're in the right
						place.
						<br />
						Answer four quick questions and find out once and for all, if you're
						a tic, a tac, or a toe.
					</h2>
					<S.Button onClick={() => setStart(true)}>Start</S.Button>
				</section>
			)}
		</React.Fragment>
	);
};

export default App;
