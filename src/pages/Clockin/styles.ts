import styled from 'styled-components'
import { Form as CustomForm } from '@unform/web'
import { Input as CustomInput } from '../../components/Input'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled(CustomForm)`
  width: 100%;
  max-width: 400px;
  height: 400px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  background-color: #fff;

  h1 {
    margin-bottom: 16px;
  }

  button {
    padding: 8px 16px;
    border: none;
    background-image: linear-gradient(
      90deg,
      rgba(95, 168, 211, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    color: var(--color-background);
    font-size: 24px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    transition: background 0.2s ease;
  }
`

export const Input = styled(CustomInput)`
  text-transform: uppercase;
`
