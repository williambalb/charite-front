import {NavLogoLink, NavLogo} from './style';
import {Link} from "react-router-dom";

function LogoTest(){
    return (
        <Link to="/" style={{textDecoration: 'none'}}>
            <NavLogoLink>
                <NavLogo>Charite</NavLogo>
            </NavLogoLink>
        </Link>
    );
}

export default LogoTest;