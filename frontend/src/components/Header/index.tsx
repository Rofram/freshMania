import * as Styled from './styles'
import { FaWallet } from 'react-icons/fa'

const Header = () => (
  <Styled.Wrapper>
    <FaWallet size={40} />
    <h1>
      <strong>Dev</strong>Market
    </h1>
  </Styled.Wrapper>
)

export default Header
