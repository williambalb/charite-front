import {
    Container,
    MessageSection,
    FormSection,
    FormContainer,
    FormTitle,
    FormSubtitle,
    Form,
    FormLabel,
    FormInput,
    RememberInput,
    FormLink,
    LoginButton,
    GoogleButton,
    FormGroup,
    Group,
    SignUpGroup,
    LinkStyle,
    InputGroup,
    RememberLabel,
    ButtonGroup, BlurSection
} from './style';
import {Link} from "react-router-dom";
import BigLogo from "../../components/biglogo";

function Login() {
    return (
        <Container>
            <FormSection>
                <FormContainer>
                    <FormTitle>Bem-vindo de volta</FormTitle>
                    <FormSubtitle>Bem-vindo de volta! Por favor, insira seus dados</FormSubtitle>
                    <Form>
                        <InputGroup>
                            <FormLabel for="email">E-mail</FormLabel>
                            <FormInput type="email" id="email" placeholder="Digite seu e-mail" />
                        </InputGroup>
                        <InputGroup>
                            <FormLabel for="password">Senha</FormLabel>
                            <FormInput type="password" id="password" placeholder="Digite sua senha" />
                        </InputGroup>
                        <FormGroup>
                            <Group>
                                <RememberInput type="checkbox" id="remember"/>
                                <RememberLabel for="remember">Lembrar senha</RememberLabel>
                            </Group>
                            <Link to="/forgot" style={LinkStyle}><FormLink>Esqueci a senha</FormLink></Link>
                        </FormGroup>
                        <ButtonGroup>
                            <LoginButton type="submit" value="Login"/>
                            <GoogleButton>Login com Google</GoogleButton>
                            <SignUpGroup>Não tem uma conta?<Link to="/signup" style={LinkStyle}><FormLink> Cadastre-se gratuitamente</FormLink></Link></SignUpGroup>
                        </ButtonGroup>
                    </Form>
                </FormContainer>
            </FormSection>
            <MessageSection>
                <BlurSection>
                    <BigLogo />
                </BlurSection>
            </MessageSection>
        </Container>
    );
}

export default Login;