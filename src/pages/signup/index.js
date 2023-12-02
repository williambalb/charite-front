import {
    Container,
    FormContainer,
    FormSection,
    MessageSection,
    FormSubtitle,
    FormTitle,
    FormLink,
    LinkStyle,
    LoginGroup, Form, FormLabel, FormInput, InputGroup, ButtonGroup, SignUpButton, BlurSection
} from './style';
import Service from "./services";
import {Link} from "react-router-dom";
import BigLogo from "../../components/biglogo";
import Notification from "../../components/notification";

function SignUp() {
    const handleSubmit = (event) => {
        const payload = {
            "name": event.target.name.value,
            "email": event.target.email.value,
            "document": event.target.document.value,
            "password": event.target.password.value
        }
        Notification().Block.dots('[data-id=form-block]');
        Service.signup(payload)
            .then((res) => {
                Notification().Notify.success("Cadastro realizado");
                Notification().Block.remove('[data-id=form-block]');
            }, (err) => {
                Notification().Notify.failure("Não foi possível realizar o cadastro: " + err);
                Notification().Block.remove('[data-id=form-block]');
            });
        
        event.preventDefault();
    }

    return (
        <Container>
            <FormSection>
                <FormContainer>
                    <FormTitle>Seja um membro!</FormTitle>
                    <FormSubtitle>Registre-se e faça parte da comunidade</FormSubtitle>
                    <Form onSubmit={handleSubmit} data-id="form-block">
                        <InputGroup>
                            <FormLabel>Nome completo</FormLabel>
                            <FormInput type="text" name="name" placeholder="Digite seu nome completo"/>
                        </InputGroup>
                        <InputGroup>
                            <FormLabel>E-mail</FormLabel>
                            <FormInput type="email" name="email" placeholder="Digite seu e-mail"/>
                        </InputGroup>
                        <InputGroup>
                            <FormLabel>Documento</FormLabel>
                            <FormInput type="text" name="document" placeholder="Digite seu CPF ou CNPJ"/>
                        </InputGroup>
                        <InputGroup>
                            <FormLabel>Senha</FormLabel>
                            <FormInput type="password" name="password" placeholder="Insira uma senha"/>
                        </InputGroup>
                        <ButtonGroup>
                            <SignUpButton type="submit" value="Registrar-se"/>
                        </ButtonGroup>
                    </Form>
                    <LoginGroup>Já possui uma conta? <Link to="/login" style={LinkStyle}><FormLink>Faça login</FormLink></Link></LoginGroup>
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

export default SignUp;