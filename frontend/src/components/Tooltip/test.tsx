import { render, screen } from '@testing-library/react'

import Tooltip from '.'

import mock from './mock'

describe('<Tooltip />', () => {
  it('should render the heading', () => {
    render(<Tooltip {...mock} />)

    expect(screen.getByText(mock.title)).toBeInTheDocument()
  })
})
