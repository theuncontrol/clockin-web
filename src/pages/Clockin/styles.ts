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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled(CustomInput)``
