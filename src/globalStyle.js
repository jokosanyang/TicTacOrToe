import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    body {
        background-color: #f3c3f1;
        font-family: 'Poppins', sans-serif;
        text-align: center;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif;
    }
`;

export default globalStyle;