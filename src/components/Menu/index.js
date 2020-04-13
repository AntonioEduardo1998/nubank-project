import React from 'react';
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';
import QRCode from 'react-native-qrcode-svg';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({translateY}) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1]
            })
        }}>
            <Code>
                <QRCode value="http://github.com/AntonioEduardo1998" size={80} color="#8B10AE" backgroundColor="#fff" />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff"></Icon>
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff"></Icon>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff"></Icon>
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff"></Icon>
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => {}}>
            <SignOutButtonText>Sair do app</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}