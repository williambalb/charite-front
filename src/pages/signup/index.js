import {
    Container,
    FormContainer,
    FormSection,
    MessageSection,
    FormSubtitle,
    FormTitle,
    FormLink,
    LinkStyle,
    LoginGroup, Form, FormLabel, FormInput, HorizontalGroup, InputGroup, ButtonGroup, SignUpButton, BlurSection
} from './style';
import Service from "./services";
import {Link} from "react-router-dom";
import BigLogo from "../../components/biglogo";
import Notification from "../../components/notification";
import { useState, useEffect } from 'react';

function SignUp() {
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState( );

    useEffect(() => {
        if (password !== undefined && confirmPassword !== undefined) {
            console.log(password === confirmPassword);

            let confirm_password_input = document.getElementById('confirm_password');
            if (password !== confirmPassword) {
                confirm_password_input.setCustomValidity("As senhas não coincidem")
            } else {
                confirm_password_input.setCustomValidity("");
            }
        }
    }, [password, confirmPassword])

    const handleSubmit = (event) => {
        const payload = {
            "firstname": event.target.firstname.value,
            "lastname": event.target.lastname.value,
            "email": event.target.email.value,
            "document": event.target.document.value,
            "password": event.target.password.value,
            "password_confirmation": event.target.confirm_password.value,
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

    function handlePassword(event) {
        if(event.target.name === 'confirm_password'){
            setConfirmPassword(event.target.value);
            return;
        }

        setPassword(event.target.value);
    }


    return (
        <Container>
            <FormSection>
                <FormContainer>
                    <FormTitle>Seja um membro!</FormTitle>
                    <FormSubtitle>Registre-se e faça parte da comunidade</FormSubtitle>
                    <Form onSubmit={handleSubmit} data-id="form-block">
                        <HorizontalGroup>
                            <InputGroup>
                                <FormLabel title='Insira seu primeiro nome'>Primeiro Nome</FormLabel>
                                <FormInput type="text" name="firstname" placeholder="John" required/>
                            </InputGroup>
                            <InputGroup>
                                <FormLabel title='Insira seu último nome'>Último Nome</FormLabel>
                                <FormInput type="text" name="lastname" placeholder="Doe" required/>
                            </InputGroup>
                        </HorizontalGroup>
                        <InputGroup>
                            <FormLabel title='Insira seu melhor e-mail'>E-mail</FormLabel>
                            <FormInput type="email" name="email" placeholder="johndoe@mail.com" required/>
                        </InputGroup>
                        <InputGroup>
                            <FormLabel title='Insira seu CPF'>Documento</FormLabel>
                            <FormInput type="text" name="document" placeholder="123.456.789-00" required/>
                        </InputGroup>
                        <HorizontalGroup>
                            <InputGroup>
                                <FormLabel title='Senhas fortes incluem letras maiúsculas, minúsculas, números e símbolos'>Senha</FormLabel>
                                <FormInput onChange={handlePassword} min='8' type="password" name="password" placeholder="8 ou + caracteres" required/>
                            </InputGroup>
                            <InputGroup>
                                <FormLabel title='Repita a mesma senha do campo anterior'>Confirmar senha</FormLabel>
                                <FormInput onChange={handlePassword} min='8' type="password" name="confirm_password" id="confirm_password" placeholder="Repita a senha" required/>
                            </InputGroup>
                        </HorizontalGroup>
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