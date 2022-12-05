import styled from 'styled-components';

export const SearchContainer = styled.div`
	height: 40px;
  	background-color: #f8f8f8;
  	flex: 2;
  	display: flex;
  	padding: 10px;
`;

export const CategorySelect = styled.select`
	padding: 5px;
    font-family: "Lato Regular", sans-serif;
    font-size: 16px;
  	flex: 1;
  	border: none;
  	overflow: hidden !important;
`;

export const CategoryOption = styled.option`
	font-family: "Lato Regular", sans-serif;
	font-size: 16px;
`;

export const SearchInput = styled.input.attrs({
	type: "text",
	placeholder: "Buscar"
})`
  	flex: 3;
  	background: transparent;
  	overflow: hidden;
 	border: none;
  	padding: 0 10px;
  	font-family: "Lato Regular", sans-serif;
    font-size: 16px;
  	:focus {
    	outline: none;
  	}
`;

export const SearchButtonContainer = styled.div`
  	width: 40px;
  	height: 40px;
  	display: flex;
  	justify-content: center;
  	align-items: center;
`;
