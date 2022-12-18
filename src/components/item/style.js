import styled from "styled-components";
import ImDefault from "../../assets/images/item_1_image_1.jpg";
import UsImg from '../../assets/images/portrait.jpg';

export const Container = styled.div`
	width: 200px;
	height: 320px;
	border-radius: 10px;
	border: 2px solid #E4E4E4;
`;

export const ImageContainer = styled.div`
    background-image: url(${ImDefault});
    background-size: cover;
    background-position: center 70%;
	width: 200px;
	height: 250px;
	display: flex;
	flex-direction: row;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	justify-content: space-between;
	align-items: flex-start;
`;

export const Badge = styled.div`
    height: 16px;
    background: #fff;
    color: #8a8a8a;
    padding: 0 10px;
    border-radius: 4px;
    font: 11px "Lato-Regular", sans-serif;
    line-height: 1.5;
	margin: 10px;
`;

export const Image = styled.img`
	background-image: url(${ImDefault});
	background-size: cover;
	background-position: center center;
	width: 250px;
	height: 250px;
`;

export const TitleContainer = styled.div`
	width: 100%;
	height: 35px;
	display: flex;
	border-bottom: 2px solid #E4E4E4;
	align-items: center;
`;

export const Title = styled.h3`
	margin: 0;
	text-indent: 10px;
	font: bold 16px "Lato Regular", sans-serif;
	color: #3A3A3A;
`;

export const UserContainer = styled.div`
	width: 100%;
	height: 35px;
    display: flex;
	align-items: center;
`;

export const UserImg = styled.img.attrs(
	{
		src: UsImg
	}
)`
	width: 25px;
	height: 25px;
	border-radius: 5px;
	margin: 0 10px 0;
`;

export const UserName = styled.p`
    font: 11px "Lato-Regular", sans-serif;
    line-height: 12px;
`;

export const Description = styled.h6`
	font: 14px "Lato Regular", sans-serif;
	color: #AAA;
	margin: 0;
`;



