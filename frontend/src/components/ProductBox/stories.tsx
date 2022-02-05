import { Story, Meta } from '@storybook/react'
import ProductBox from '.'

export default {
  title: 'ProductBox',
  component: ProductBox
} as Meta

export const Default: Story = () => <ProductBox />
