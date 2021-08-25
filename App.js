import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import  { css } from "styled-components";

const Container = styled.div`
  height: 100vh;
  position: relative;
`;

const Shape = css`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;
const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0% 100%);
  background-color: pink;
`;
function App() {
  return (
    <>
    <Container>
      <Navbar />
      <Intro />
      <IntroShape></IntroShape>
    </Container>
    <Container>
        <Features/>
        <FeatureShape/>
      </Container>
    </>
  
  );
}

export default App;
