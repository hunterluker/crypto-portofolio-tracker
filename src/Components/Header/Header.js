import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';
import flag from '../../assets/flag.png';

const HeaderContainer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
`;

const Header = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-size: 24px;
    color: #e3e6e9;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    svg {
      width: 22px;
      height: 22px;
      margin-right: 10px;
    }

    @media (max-width: 420px) {
      font-size: 20px;

      svg {
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }
    }
  }

  h2 {
    font-size: 14px;
    color: #e3e6e9;
    display: flex;
    align-items: center;
    font-size: 16px;
    img {
      width: 25px;
      height: 15px;
      margin-right: 10px;
    }

    @media (max-width: 420px) {
      font-size: 12px;

      img {
        width: 20px;
        height: 10px;
      }
    }
  }
`;

export default () => {
  return (
    <HeaderContainer>
      <Header>
        <h1>
          <Icon.Aperture /> Kibisis
        </h1>

        <h2>
          <img src={flag} alt="flag" />
          Eng
        </h2>
      </Header>
    </HeaderContainer>
  );
};
