import { HomeTemplateProps } from '.'
import ProductBoxMock from 'components/ProductBox/mock'

const mock: HomeTemplateProps = {
  products: Array.from({ length: 6 }, () => ProductBoxMock)
}

export default mock
