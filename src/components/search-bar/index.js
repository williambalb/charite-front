import {CategoryOption, CategorySelect, SearchButtonContainer, SearchContainer, SearchInput} from "./style";
import {RiSearch2Line} from "react-icons/ri";

function SearchBar() {
	return (
		<SearchContainer>
			<CategorySelect>
				<CategoryOption>Todas as Categorias</CategoryOption>
				<CategoryOption>Todas as Categorias</CategoryOption>
				<CategoryOption>Todas as Categorias</CategoryOption>
				<CategoryOption>Todas as Categorias</CategoryOption>
			</CategorySelect>
			<SearchInput/>
			<SearchButtonContainer>
				<RiSearch2Line size={30} color={"#0e1111"}/>
			</SearchButtonContainer>
		</SearchContainer>
	);
}

export default SearchBar;