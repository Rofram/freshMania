import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 25rem;
  border: 2px solid #4a63e5;
  border-radius: 2rem;
  position: relative;
`

export const ImageBox = styled.div`
  position: relative;
  display: flex;
  width: 24rem;
  height: 20rem;
  border-bottom: 2px solid #4a63e5;

  img {
    border-radius: 2rem 2rem 0 0;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  margin: 1.6rem;
`

export const Price = styled.div`
  display: inline-block;
  font-weight: bold;
  height: 1rem;
`
