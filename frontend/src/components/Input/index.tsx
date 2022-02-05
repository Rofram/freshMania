import { useField } from '@unform/core'
import Tooltip from 'components/Tooltip'
import { InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'

import * as Styled from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  icon?: React.ComponentType<IconBaseProps>
  mask?: string
}

const Input = ({ name, label, icon: Icon, mask, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }

  function handleKeyUp() {
    if (inputRef.current && mask) {
      inputRef.current.value = maskInput(inputRef.current.value, mask)
    }
  }

  function maskInput(value: number | string, pattern: string) {
    let i = 0
    const v = value.toString().replace(/[^a-zA-Z0-9]/g, '')
    return pattern.replace(/#/g, () => {
      const caractere = v[i++]
      return caractere || ''
    })
  }

  return (
    <>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Container
        isFilled={isFilled}
        isFocused={isFocused}
        isError={!!error}
      >
        {!!Icon && <Icon size={20} />}
        <Styled.Input
          id={name}
          name={name}
          onFocus={() => setIsFocused(true)}
          onKeyUp={handleKeyUp}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
        {error && (
          <Tooltip title={error}>
            <FiAlertCircle color="#d1585e" size={20} />
          </Tooltip>
        )}
      </Styled.Container>
    </>
  )
}

export default Input
