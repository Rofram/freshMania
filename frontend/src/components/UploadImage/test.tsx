import { render, screen } from '@testing-library/react'
import { Form } from '@unform/web'

import UploadImage from '.'

import mock from './mock'

describe('<UploadImage />', () => {
  it('should render the heading', () => {
    const handleSbumit = jest.fn()
    render(
      <Form onSubmit={handleSbumit}>
        <UploadImage {...mock} />
      </Form>
    )

    expect(screen.getByRole('img')).toHaveAttribute('src', mock.previewImage)
  })
})
