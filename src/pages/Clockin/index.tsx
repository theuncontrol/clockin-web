import React from 'react'

import { Container, Input, Form } from './styles'

const Clockin: React.FC = () => {
  function handleSubmit(data: any) {
    console.log(JSON.stringify(data))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Ponto Digital</h1>
        <Input name="identity" required autoComplete="off">
          Matricula ou ID do Colaborador
        </Input>
        <button type="submit">Bater o ponto</button>
      </Form>
    </Container>
  )
}

export default Clockin
