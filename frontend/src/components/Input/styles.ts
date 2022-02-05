import styled, { css } from 'styled-components'
import * as TooltipStyles from 'components/Tooltip/styles'

type ContainerProps = {
  isFocused?: boolean
  isFilled?: boolean
  isError?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ isFocused, isFilled, isError }) => css`
    display: flex;
    width: 100%;
    height: 64px;
    padding: 16px;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    color: #5c8599;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    ${(isFocused || isFilled) &&
    css`
      border-color: #83a3b3;
      color: #83a3b3;
    `}

    ${isError &&
    !isFocused &&
    css`
      border-color: #d1585e;
      color: #d1585e;
    `}

    ${TooltipStyles.Wrapper} {
      height: 20px;
      margin-left: 16px;

      svg {
        margin: 0;
      }

      span {
        background: #d1585e;
        color: #fff;

        &::before {
          border-color: #d1585e transparent;
        }
      }
    }
  `}
`

export const Label = styled.label`
  display: flex;
  color: #8fa7b3;
  margin-bottom: 8px;
  line-height: 24px;
  font-size: 1.6rem;

  div + & {
    margin-top: 24px;
  }

  span + & {
    margin-top: 24px;
  }
`

export const Input = styled.input`
  flex: 1;
  background: transparent;
  outline: none;
  border: 0;
  color: #5c8599;
`
