import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, cleanup } from '@testing-library/react';
import Question from './components/Question/Question';

test("App renders in the Dom", () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('clicking first answer increments tic variable', () => {
	const { getByText } = render(<Question number={1} numberFunction={(number)=> number+1 }/>);
	const Button1 = getByText(/dayummm/);
	fireEvent.click(Button1);
    
});