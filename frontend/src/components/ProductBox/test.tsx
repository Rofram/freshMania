import { render, screen } from '@testing-library/react'

import ProductBox from '.'

import mock from './mock'

describe('<ProductBox />', () => {
  it('should render the heading', () => {
    render(<ProductBox {...mock} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', mock.img)
  })
})
