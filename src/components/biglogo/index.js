import {NavLogoLink, NavLogo} from './style';
import {Link} from "react-router-dom";

function BigLogo(){
	return (
		<Link to="/" style={{textDecoration: 'none'}}>
			<NavLogoLink>
				<NavLogo>Charite</NavLogo>
			</NavLogoLink>
		</Link>
	);
}

export default BigLogo;