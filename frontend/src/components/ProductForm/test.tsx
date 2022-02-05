import { render, screen } from '@testing-library/react'

import ProductForm from '.'

import mock from './mock'

describe('<ProductForm />', () => {
  it('should render the heading', () => {
    render(<ProductForm {...mock} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', mock.previewImage)
  })
})
