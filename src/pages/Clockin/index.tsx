import React from 'react'

import { Container, Input, Form } from './styles'

const Clockin: React.FC = () => {
  function handleSubmit(data: any) {
    console.log(JSON.stringify(data))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="identity">Matricula ou ID do Colaborador</Input>
        <button type="submit">Bater o ponto</button>
      </Form>
    </Container>
  )
}

export default Clockin
