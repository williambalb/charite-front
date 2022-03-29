import Header from './../../components/header';
import { RiArrowRightSFill } from "react-icons/ri";
import {Container, LayerBlur, Entering, CallTitle, Sub, ButtonContainer, Button} from './style';

function Home() {
    return (
        <div>
            <Header />
            <Container>
                <LayerBlur>
                    <Entering>
                        <CallTitle>Se não serve pra você, talvez sirva pra alguém</CallTitle>
                        <Sub>Encontre ou anuncie artigos para doação aqui</Sub>
                        <ButtonContainer>
                            <Button href="#">Criar conta agora <RiArrowRightSFill size={25} style={{ marginBottom: -7}}/></Button>                        </ButtonContainer>
                    </Entering>
                </LayerBlur>
            </Container>
        </div>
    );
}

export default Home;