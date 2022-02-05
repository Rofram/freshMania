/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Styled from './styles'
import Image from 'next/image'
import getImageUrl from 'utils/getImageUrl'
import formatPrice from 'utils/format-price'

export type ProductBoxProps = {
  id: string
  img: string
  name: string
  price: number
}

const ProductBox = ({ id, img, name, price }: ProductBoxProps) => {
  function handleEdit() {
    console.log('')
  }

  function handleDelete(productId: string) {
    console.log('')
  }
  return (
    <Styled.Wrapper>
      <Styled.ImageBox>
        <Image
          src={getImageUrl(img)}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </Styled.ImageBox>
      <Styled.Content>
        <h1>{name}</h1>
        <Styled.Price>{formatPrice(price)}</Styled.Price>
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default ProductBox
