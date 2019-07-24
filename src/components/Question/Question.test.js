import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Question from './Question';

afterEach(cleanup);

test('clicking an answer increments question number', () => {
	const { getByText } = render(<Question />);
	const Button2 = getByText(/SAME/);
	fireEvent.click(Button2);
    getByText('Question 2');
});
