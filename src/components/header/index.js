import Logo from './../../components/logo';
import Nav from './../../components/nav';
import {Heading} from './style';

function Header() {
    return (
        <Heading>
            <Logo />
            <Nav />
        </Heading>
    )
}

export default Header;