import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const Title = styled.h1`
    width: 60%;
    font-size: 60px; 
`;
const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
`;
const Right = styled.div`
    width: 40%;

    
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;

`;

const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
`;
const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`;
const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Adventures in creative age</Title>
                <Desc>We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.
                </Desc>
                <Info>
                    <Button>Start A Project</Button>
                    <Contact>
                        <Phone>Call us (+237)</Phone>
                        <ContactText>For any question or concern</ContactText>
                    </Contact>
                </Info>
            </Left>
           <Right></Right> 
        </Container>
    )
};

export default Intro;
