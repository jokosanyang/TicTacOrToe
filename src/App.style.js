import styled from 'styled-components';

const Answer = styled.button`
	border: none;
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	cursor: pointer;
	display: inline-block;
	margin: 1rem 1rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
	position: relative;
	transition: all 0.3s;
	background: #fff;
	box-shadow: 0 5px;
	padding: 25px 60px 25px 60px;
`;

const Button = styled.button`
	border: none;
	font-family: inherit;
	font-size: inherit;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	margin: 1rem 1rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
	position: relative;
	transition: all 0.3s;
	background: #000;
	box-shadow: 0 5px;
	padding: 1rem 2rem;
`;

export { Answer, Button };
