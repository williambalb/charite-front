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
import service from "./services";
import {Link} from "react-router-dom";
import BigLogo from "../../components/biglogo";
import Notification from "../../components/notification";
import {useEffect} from "react";

function Login() {
    
    const handleSubmit = (event) => {
        const payload = {
            "email": event.target.email.value,
            "password": event.target.password.value
        }
        Notification().Block.dots('[data-id=form-block]');
        service.login(payload)
            .then((res) => {
                Notification().Notify.success("ok");
                Notification().Block.remove('[data-id=form-block]');
            }, (err) => {
                Notification().Block.remove('[data-id=form-block]');
                alert(err)
            })
        
        event.preventDefault();
    }
    
    return (
        <Container>
            <FormSection>
                <FormContainer>
                    <FormTitle>Bem-vindo de volta</FormTitle>
                    <FormSubtitle>Bem-vindo de volta! Por favor, insira seus dados</FormSubtitle>
                    <Form onSubmit={handleSubmit} data-id="form-block">
                        <InputGroup>
                            <FormLabel htmlFor="email" >E-mail</FormLabel>
                            <FormInput name="email" type="email" id="email" placeholder="Digite seu e-mail" required/>
                        </InputGroup>
                        <InputGroup>
                            <FormLabel htmlFor="password">Senha</FormLabel>
                            <FormInput name="password"  type="password" id="password" placeholder="Digite sua senha" required/>
                        </InputGroup>
                        <FormGroup>
                            <Group>
                                <RememberInput type="checkbox" id="remember"/>
                                <RememberLabel htmlFor="remember" name="remember" >Lembrar senha</RememberLabel>
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