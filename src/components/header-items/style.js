import styled from 'styled-components';
import Portrait from '../../assets/images/portrait.jpg';

export const LogoContainer = styled.div`
	flex: .71;
	display: flex;
	justify-content: center;
`;

export const Heading = styled.div`
    background-color: #FFF;
    display: flex;
  	flex: 2;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    width: 100%;
    position: fixed;
`;

export const ActionsContainer = styled.div`
	flex: 1;
	height: 60px;
	align-items: center;
	display: flex;
`;

export const ActionGroup = styled.div`
	flex: 2;
	height: 40px;
    display: flex;
	align-items: center;
	justify-content: space-evenly;
	border-right: 2px solid #f8f8f8;
`;

export const ActionUser = styled.div`
	flex: 1;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ImageContainer = styled.img.attrs({
	src: Portrait
})`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 2px solid #C8C8C8;
`;