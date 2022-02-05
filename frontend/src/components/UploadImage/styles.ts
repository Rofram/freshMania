import styled from 'styled-components'

export const Wrapper = styled.div`
  input[type='file'] {
    display: none;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  height: 20rem;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;

  img {
    border-radius: 20px 20px 0 0;
  }
`

export const Upload = styled.label`
  display: flex;
  flex: 1;
  height: 100%;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #f5f8fa;
  border: 2px dashed #4a63e5;
  border-radius: 20px 20px 0 0;
  cursor: pointer;

  span {
    font-weight: bold;
    font-size: 1.2rem;
  }
`
