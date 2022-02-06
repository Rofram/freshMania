import { render, screen } from '@testing-library/react'
import { Form } from '@unform/web'

import ProductForm from '.'

import mock from './mock'

describe('<ProductForm />', () => {
  it('should render the heading', () => {
    const handleSbumit = jest.fn()
    render(
      <Form onSubmit={handleSbumit}>
        <ProductForm {...mock} />
      </Form>
    )

    expect(screen.getByRole('img')).toHaveAttribute('src', mock.previewImage)
  })
})
