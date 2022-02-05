import * as Styled from './styles'

export type TooltipProps = {
  title: string
  children: React.ReactNode
}

const Tooltip = ({ title, children }: TooltipProps) => (
  <Styled.Wrapper>
    {children}
    <span>{title}</span>
  </Styled.Wrapper>
)

export default Tooltip
