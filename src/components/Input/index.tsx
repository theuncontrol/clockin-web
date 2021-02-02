import React, { useEffect, useRef } from 'react'

import { useField } from '@unform/core'

import { Container } from './styles'

interface Props extends React.HTMLProps<HTMLInputElement> {
  name: string
}

export const Input: React.FC<Props> = ({ name, children, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <input ref={inputRef} defaultValue={defaultValue} id={name} {...rest} />
      <label htmlFor={name}>
        <span className="content-name">{children}</span>
      </label>
    </Container>
  )
}
