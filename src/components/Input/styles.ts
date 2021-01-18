import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;

  > label {
    width: 100%;
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    transition: 0.2s all ease-in-out;
    cursor: text;
  }

  input {
    width: 100%;
    height: 100%;
    position: relative;

    padding: 8px 8px;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 4px;
    transition: 0.2s all ease-in-out;

    &:after {
      content: '';
      width: 100%;
      height: 2px;

      position: absolute;
      left: 0;
      top: 0;

      background-color: red;
    }

    &:focus {
      outline: none;

      &:after {
      }
    }

    &:focus + label {
      color: red;
      font-size: 12px;

      top: -14px;
      transform: translateY(0);
    }
  }
`
