import {MenuNav, ListNav, ItemNav, LinkStyle, Button} from './style';
import {Link} from 'react-router-dom';

function Nav(){
    return (
        <MenuNav>
            <ListNav>
                <ItemNav>
                    <Link to="/how" style={LinkStyle}>
                        Como funciona
                    </Link>
                </ItemNav>
                <ItemNav>
                    <Link to="/login" style={LinkStyle}>
                        Entrar
                    </Link>
                </ItemNav>
                <Link to="/signup">
                    <Button>
                        Cadastre-se
                    </Button>
                </Link>
            </ListNav>
        </MenuNav>
    );
}

export default Nav;