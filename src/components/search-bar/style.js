import styled from 'styled-components';

export const SearchContainer = styled.div`
    height: 40px;
    flex: 2;
    display: flex;
    padding: 10px;
`;

export const CategorySelect = styled.select`
	position: absolute;
	top: 50%;
	width: 180px;
	margin-left: 10px;
	transform: translateY(-40%);
    font-family: "Lato Regular", sans-serif;
    font-size: 14px;
  	flex: 1;
  	border: none;
    :focus {
    	outline: none;
    }
`;

export const CategoryOption = styled.option`
	font-family: "Lato Regular", sans-serif;
	font-size: 14px;
	:hover {
		font-size: 25px;
	}
`;

export const SearchInput = styled.input.attrs({
	type: "text",
	placeholder: "Buscar"
})`
  	flex: 3;
	height: 20px;
 	border: 1px solid #999;
	border-radius: 5px;
  	padding: 10px 10px 10px 196px;
  	font-family: "Lato Regular", sans-serif;
    font-size: 16px;
`;

export const SearchButtonContainer = styled.div`
	cursor: pointer;
  	width: 42px;
	margin-left: -40px;
  	height: 42px;
  	display: flex;
  	justify-content: center;
  	align-items: center;
`;
