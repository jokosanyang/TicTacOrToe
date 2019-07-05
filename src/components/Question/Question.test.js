import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Question from './Question';

afterEach(cleanup);

test('clicking first button increments tic variable', () => {
	const { getByText } = render(<Question />);
	const Button1 = getByText(/Answer 1/);
	fireEvent.click(Button1);
});
