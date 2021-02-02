import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  position: relative;

  input {
    width: 100%;
    height: 100%;

    text-align: center;
    padding-top: 20px;
    border: none;
    outline: none;

    &:focus + label .content-name,
    &:valid + label .content-name {
      transform: translateY(-150%);
      font-size: 14px;

      color: var(--color-primary);
    }

    &:focus + label::after,
    &:valid + label::after {
      transform: translateX(0);
    }
  }

  label {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    border-bottom: 1px solid #aaa;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 100%;
      border-bottom: 3px solid var(--color-primary);
      transform: translateX(-100%);
      transition: all 0.3s ease;
    }

    .content-name {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 5px;
      left: 0pc;
      transition: all 0.3s ease;
    }
  }
`
