import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';
import Particles from '../Particles/Particles';

const LoginContainer = styled.div`
  height: 85vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #e3e6e9;
`;

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #e3e6e9;

  h1 {
    font-size: 40px;
    margin-bottom: 40px;

    @media (max-width: 420px) {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }

  p {
    font-size: 16px;
    margin-bottom: 40px;

    @media (max-width: 420px) {
      font-size: 12px;
      margin-bottom: 20px;
    }
  }

  button {
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    width: 80%;
    border-radius: 5px;
    border: none;
    background: #1ca07f;
    color: #e3e6e9;
    font-family: 'Exo', sans-serif;
    margin-bottom: 30px;

    @media (max-width: 420px) {
      width: 100%;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const InputField = styled.div`
  position: relative;
  margin-bottom: 20px;
  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    width: 20px;
    height: 20px;
    padding-bottom: 20px;
  }

  input {
    padding: 10px 40px;
    background: transparent;
    color: #ffffff;
    margin-bottom: 20px;
    border: none;
    font-size: 18px;
    font-family: 'Exo', sans-serif;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #e3e6e9;
      font-family: 'Exo', sans-serif;
    }

    @media (max-width: 420px) {
      border: 1px solid #e3e6e950;
      border-radius: 5px;
    }
  }
`;

const SignUpLink = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;

  span {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-top: 2px;
    padding-bottom: 2px;
    border-bottom: 1px solid #e3e6e9;
    transition: all 0.3s;
    svg {
      margin-left: 30px;
    }

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid rgba(177, 27, 139, 0.849);
      color: rgba(177, 27, 139, 0.849);
      transform: scale(1.08);
      svg {
        color: rgba(177, 27, 139, 0.849);
      }
    }
  }
`;

export default function Register() {
  return (
    <LoginContainer>
      <LoginFormContainer>
        <LoginForm>
          <Particles />
          <h1>Sign in</h1>
          <p>Sign in and start managing your cryptocurrency!</p>
          <InputField>
            <Icon.User />
            <input type="text" placeholder="Login" />
          </InputField>
          <InputField>
            <Icon.Lock />
            <input type="password" placeholder="Password" />
          </InputField>
          <button>Login</button>

          <SignUpLink>
            Don't have an account,{' '}
            <span>
              {' '}
              sign up <Icon.ArrowRight />
            </span>
          </SignUpLink>
        </LoginForm>
      </LoginFormContainer>
    </LoginContainer>
  );
}
