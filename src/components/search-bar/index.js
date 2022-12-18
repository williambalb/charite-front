import {CategoryOption, CategorySelect, SearchButtonContainer, SearchContainer, SearchInput} from "./style";
import {RiSearch2Line} from "react-icons/ri";

function SearchBar() {
	return (
		<SearchContainer>
			<CategorySelect>
				<CategoryOption>Todas as Categorias</CategoryOption>
				<CategoryOption>Eletrodomésticos</CategoryOption>
				<CategoryOption>Móveis</CategoryOption>
				<CategoryOption>Transportes</CategoryOption>
				<CategoryOption>Transportes escolares</CategoryOption>
			</CategorySelect>
			<SearchInput/>
			<SearchButtonContainer>
				<RiSearch2Line size={20} color={"#0e1111"}/>
			</SearchButtonContainer>
		</SearchContainer>
	);
}

export default SearchBar;