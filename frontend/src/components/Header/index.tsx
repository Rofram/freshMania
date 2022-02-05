import * as Styled from './styles'

const Header = () => (
  <Styled.Wrapper>
    <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38 14H10a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2Z"
        fill="#2F88FF"
        stroke="#000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 18v-7a7.001 7.001 0 0 1 13.467-2.679c.352.85.533 1.76.533 2.679v7"
        stroke="#000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <h1>
      <strong>Dev</strong>Market
    </h1>
  </Styled.Wrapper>
)

export default Header
