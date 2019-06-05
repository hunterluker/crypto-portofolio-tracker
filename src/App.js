import React from 'react';
import main_routes from './Routes/main_routes';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Header from './Components/Header/Header';

const GlobalStyle = createGlobalStyle`
  ${reset};
  font-family: 'Exo', sans-serif;
`;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #350259, #351f97);
  font-family: 'Exo', sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      {main_routes}
    </AppContainer>
  );
}

export default App;
