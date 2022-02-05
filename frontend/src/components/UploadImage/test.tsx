import { render, screen } from '@testing-library/react'

import UploadImage from '.'

import mock from './mock'

describe('<UploadImage />', () => {
  it('should render the heading', () => {
    render(<UploadImage {...mock} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', mock.previewImage)
  })
})
