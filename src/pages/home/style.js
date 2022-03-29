import styled from 'styled-components';
import img from './../../assets/images/background.jpg';

export const Container = styled.div`
    background-image: url(${img});
    background-size: cover;
    width: 100%;
    height: 100vh;
    background-position: center center;
`;

export const LayerBlur = styled.div`
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
`;

export const Entering = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 120px;
    width: 45%;
    height: 45%;
`;

export const CallTitle = styled.h1`
    font: 57px 'Montserrat';
    color: #fff;
    line-height: 65px;
    font-weight: Bold;
    text-transform: uppercase;
    text-align: left;
    margin: 0;
`;

export const Sub = styled.h4`
    font: 24px 'Lato Light';
    color: #fff;
    text-align: left;
    margin: 0;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: left;
    margin: 0;
`;

export const Button = styled.a`
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font: 14px 'Lato Regular';
    background-color: #0094C6;
    padding: 10px 15px;
    border-radius: 5px;
    margin-top: 10px;
`;
