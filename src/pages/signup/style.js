import styled from "styled-components";
import img from "../../assets/images/back3.jpg";

export const Container = styled.div`
  	display: flex;
`;

export const FormSection = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    background: #fff;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormTitle = styled.h1`
    font: bold 30px 'Lato Regular';
    margin: 10px 0;
`;

export const FormSubtitle = styled.h4`
    font: 16px 'Lato Regular';
    margin: 10px 0;
    color: #555;
`;

export const Form = styled.form`

`;

export const FormLabel = styled.label`
    font: bold 14px 'Lato Regular';
    margin: 10px 0;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`;

export const HorizontalGroup = styled.div`
    ${InputGroup} {
        margin: 0 !important;
    }
    display: flex;
    gap: 10px;
`;

export const FormInput = styled.input`
    height: 20px;
    padding: 10px 15px;
    border: 1px solid #999;
    color: #222;
    border-radius: 5px;
    font: 16px 'Lato Regular';
`;

export const FormLink = styled.p`
    margin: 0;
    flex: 1;
`;

export const LinkStyle = {
	textDecoration: 'none',
	fontWeight: 'bold',
	fontFamily: 'Lato Regular',
	fontSize: '14px',
	marginLeft: '5px',
	color: '#000'
}

export const LoginGroup = styled.div`
    margin-top: 20px;
    color: #888;
    display: flex;
    font: 13px 'Lato Regular';
    justify-content: center;
`;

export const ButtonGroup = styled.div`
	display: flex;
    flex-direction: column;
`;

export const SignUpButton = styled.input`
    height: 40px;
    border-radius: 5px;
    border: none;
    color: #fff;
    background: #0094C6;
    padding: 0;
    cursor: pointer;
    margin: 10px 0 20px 0;
    font: 14px 'Lato Regular';
`;

export const MessageSection = styled.div`
	flex: 1;
	height: 100vh;
	background: url(${img}) center;
	background-size: cover;
`;

export const BlurSection = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(28, 28, 28, 0.75);
`;
