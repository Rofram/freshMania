import styled, { keyframes } from 'styled-components'

const popup = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const Wrapper = styled.div`
  max-width: 25rem;
  border: 2px solid #4a63e5;
  background-color: #4a63e5;
  border-radius: 2rem;
  position: relative;
  z-index: 10;
  animation: ${popup} 0.3s ease-in-out;
`

const placeholderShimmer = keyframes`
  from {
    background-position: -40rem 0;
  }
  to {
    background-position: 40rem 0;
  }
`

export const ImageBox = styled.div`
  position: relative;
  display: flex;
  width: 24rem;
  height: 20rem;
  border-bottom: 2px solid #4a63e5;
  border-radius: 2rem 2rem 0 0;
  z-index: 10;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  animation: ${placeholderShimmer} 1s linear infinite forwards;

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
  color: #f1f1f1;
`

export const Price = styled.div`
  display: inline-block;
  font-weight: bold;
  height: 1rem;
`

export const ProductOptions = styled.div`
  position: absolute;
  top: 0;
  right: -4rem;
  z-index: 5;
  display: flex;
  width: 5rem;
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
