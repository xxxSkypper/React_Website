import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    width: 50%;
`;
const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`;

const Title = styled.span`
    font-size: 70px;
`;
const SubTitle = styled.span`
    margin-top: 30px;
    font-size: 24px;
    font-style: italic;
    color: #333;
`;
const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`;
const Button = styled.button`
    width: 150px;
    margin-top: 20px;
    border: none;
    padding: 15px 20px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    cursor: pointer;
`;
const Features = () => {
    return (
        <Container>
            <Left></Left>
            <Right>
                <Title>
                    <b>good</b> design<br/>
                    <b>good</b> business
                </Title>
                <SubTitle>We know that good design means good business.</SubTitle>
                <Desc>We help our clients succeed by creatimg brand identities, digital experinces, and print materials that communicate clearly, acheived marketing goals, and look fantastic.
                </Desc>
                <Desc>We care your business and guarantee you to acheive marketing goals.</Desc>
               
                <Button>Learn More</Button>
            </Right>
        </Container>
    )
};

export default Features;
