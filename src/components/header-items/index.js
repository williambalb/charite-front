import {ActionGroup, ActionsContainer, ActionUser, Heading, ImageContainer, LogoContainer} from './style';
import SearchBar from "../search-bar";
import {RiArrowDropDownLine, RiHeart2Line, RiMessage3Line, RiNotification2Line} from "react-icons/ri";
import LogoTest from "../logo-test";

function HeaderItems() {
    return (
        <Heading>
            <LogoContainer>
                <LogoTest />
            </LogoContainer>
            <SearchBar />
            <ActionsContainer>
                <ActionGroup>
                    <RiHeart2Line size={25} color={"#0e1111"} />
                    <RiNotification2Line size={25} color={"#0e1111"} />
                    <RiMessage3Line size={25} color={"#0e1111"} />
                </ActionGroup>
                <ActionUser>
                    <ImageContainer />
                    <RiArrowDropDownLine size={20} color={"#0e1111"} />
                </ActionUser>
            </ActionsContainer>
        </Heading>
    )
}

export default HeaderItems;