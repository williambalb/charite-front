import {Badge, Container, ImageContainer, Title, TitleContainer, UserContainer, UserImg, UserName} from "./style";

function Item(props) {
	return (
		<Container>
			<ImageContainer>
				<Badge>Sepetiba - RJ</Badge>
				<Badge>11 dias</Badge>
			</ImageContainer>
			<TitleContainer>
				<Title>{props.name}</Title>
			</TitleContainer>
			<UserContainer>
				<UserImg />
				<UserName>{props.userName}</UserName>
			</UserContainer>
		</Container>
	)
}

export default Item;