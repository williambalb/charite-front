import {MenuNav, ListNav, ItemNav, Link, Button, Avatar} from './style';

function Nav(){
    return (
        <MenuNav>
            <ListNav>
                <ItemNav><Link href="#">itens</Link></ItemNav>
                <ItemNav><Link href="#">anunciar</Link></ItemNav>
                <ItemNav><Link href="#">entrar</Link></ItemNav>
                <Button href="#">cadastre-se</Button>
            </ListNav>
        </MenuNav>
    );
}

export default Nav;