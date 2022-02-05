import { render, screen } from '@testing-library/react'

import Input from '.'

import mock from './mock'

describe('<Input />', () => {
  it('should render the heading', () => {
    render(<Input {...mock} />)

    expect(screen.getByText(mock.label)).toBeInTheDocument()
  })
})
