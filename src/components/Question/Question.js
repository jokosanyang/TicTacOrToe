import React from 'react';

const Question = (props) => {
	const [number, incrementNumber] = React.useState(1);

	return (
		<div>
			<p>Question {number} of 4</p>
			<h3>Question goes here</h3>
            <button onClick={() => incrementNumber(number + 1)}>
                Answer 1
            </button>
            <button onClick={() => incrementNumber(number + 1)}>
                Answer 2
            </button>
            <button onClick={() => incrementNumber(number + 1)}>
                Answer 3
            </button>
            <button onClick={() => incrementNumber(number + 1)}>
                Answer 4
            </button>
		</div>
	);
};

export default Question;
