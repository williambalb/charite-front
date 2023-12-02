import services from '../../pages/categories/services';
import {CategoryOption, CategorySelect, SearchButtonContainer, SearchContainer, SearchInput} from "./style";
import {RiSearch2Line} from "react-icons/ri";
import {useEffect, useState} from "react";

function SearchBar() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		services.all()
			.then((res) => {
				setCategories(res.data.categories.data);
			}, (err) => {
				console.log(err);
			})
	}, [])

	return (
		<SearchContainer>
			<CategorySelect>
				{categories.map((category, key) => {
					return (
						<CategoryOption key={key}>{category.name}</CategoryOption>
					)
				})}
			</CategorySelect>
			<SearchInput/>
			<SearchButtonContainer>
				<RiSearch2Line size={20} color={"#0e1111"}/>
			</SearchButtonContainer>
		</SearchContainer>
	);
}

export default SearchBar;