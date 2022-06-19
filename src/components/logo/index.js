import {NavLogoLink, NavLogo} from './style';
import {Link} from "react-router-dom";

function Logo(){
    return (
        <Link to="/" style={{textDecoration: 'none'}}>
            <NavLogoLink href="#">
                <NavLogo>Charite</NavLogo>
            </NavLogoLink>
        </Link>
    );
}

export default Logo;