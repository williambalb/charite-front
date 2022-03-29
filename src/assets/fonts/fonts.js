import {createGlobalStyle} from 'styled-components';

import KronaOne from './KronaOne-Regular.ttf';
import LatoRegular from './Lato-Regular.ttf';
import LatoLight from './Lato-Light.ttf';
import Montserrat from './Montserrat-Bold.ttf';
import LexendZetta from './LexendZetta-VariableFont_wght.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Krona One';
        src: local('Krona One'), url(${KronaOne}) format('truetype');
    }
    
    @font-face {
        font-family: 'Lato Regular';
        src: local('Lato Regular'), url(${LatoRegular}) format('truetype');
    }
       
    @font-face {
        font-family: 'Lato Light';
        src: local('Lato Light'), url(${LatoLight}) format('truetype');
    }
    
    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), url(${Montserrat}) format('truetype');
    }
    
    @font-face {
        font-family: 'Lexend Zetta';
        src: local('Lexend Zetta'), url(${LexendZetta}) format('truetype');
    }

`;