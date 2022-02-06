import { render, screen } from '@testing-library/react'
import { Form } from '@unform/web'

import Input from '.'

import mock from './mock'

describe('<Input />', () => {
  it('should render the heading', () => {
    const handleSbumit = jest.fn()
    render(
      <Form onSubmit={handleSbumit}>
        <Input {...mock} />
      </Form>
    )

    expect(screen.getByText(mock.label)).toBeInTheDocument()
  })
})
