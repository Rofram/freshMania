import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 40rem;
`

export const Content = styled.div`
  padding-top: 1.5rem;
  border: 2px solid #4a63e5;
  border-top: none;
  border-radius: 0 0 2rem 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const ButtonsContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;

  button {
    outline: none;
    border: none;
    padding: 2rem;
    cursor: pointer;
    color: #fff;
    background-color: #4a63e5;
    border-radius: 1rem;
    width: 30%;
  }
`
