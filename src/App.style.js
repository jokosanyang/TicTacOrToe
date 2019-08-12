import styled from 'styled-components';

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

const Answer = styled(Button)`
	color: #000;
	background: #fff;
	padding: 25px 60px 25px 60px;
`;

const Link = styled.a`
	border: none;
	font-family: inherit;
	font-size: inherit;
	cursor: pointer;
	display: inline-block;
	margin: 1rem 1rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
	position: relative;
	transition: all 0.3s;
	box-shadow: 0 5px;
	padding: 1rem 2rem;
	color: #000;
	background: #fff;
	padding: 25px 60px 25px 60px;
`;

const Image = styled.img`
	width: 35%;
	height: 35%;
`;

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export { Answer, Button, Image, Container, Link };
