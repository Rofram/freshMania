import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 40rem;
  position: relative;
`

export const Content = styled.div`
  padding: 1.5rem;
  border: 2px solid #4a63e5;
  border-top: none;
  border-radius: 0 0 2rem 2rem;
`

export const ButtonsContent = styled.div`
  position: absolute;
  top: 0;
  right: -4rem;
  z-index: 5;
  display: flex;
  width: 6rem;
  height: 9rem;
  overflow: hidden;
  background-color: #4a63e5;
  border-radius: 0 2rem 2rem 0;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background: transparent;
    color: #fff;
    padding: 1rem;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
