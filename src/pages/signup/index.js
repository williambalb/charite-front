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
import {Link} from "react-router-dom";
import BigLogo from "../../components/biglogo";

function SignUp() {
    return (
        <Container>
            <FormSection>
                <FormContainer>
                    <FormTitle>Seja um membro!</FormTitle>
                    <FormSubtitle>Registre-se e faça parte da comunidade</FormSubtitle>
                    <Form>
                        <InputGroup>
                            <FormLabel>Nome completo</FormLabel>
                            <FormInput type="text" placeholder="Digite seu nome completo"/>
                        </InputGroup>
                        <InputGroup>
                            <FormLabel>E-mail</FormLabel>
                            <FormInput type="email" placeholder="Digite seu e-mail"/>
                        </InputGroup>
                        <InputGroup>
                            <FormLabel>Documento</FormLabel>
                            <FormInput type="text" placeholder="Digite seu CPF ou CNPJ"/>
                        </InputGroup>
                        <InputGroup>
                            <FormLabel>Senha</FormLabel>
                            <FormInput type="password" placeholder="Insira uma senha"/>
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