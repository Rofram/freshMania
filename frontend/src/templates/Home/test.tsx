import { render, screen } from '@testing-library/react'

import Home from '.'

import mock from './mock'

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Header" />
    }
  }
})

describe('<Home />', () => {
  it('should render the heading', () => {
    render(<Home {...mock} />)

    expect(screen.getByTestId('Header')).toBeInTheDocument()
  })
})
