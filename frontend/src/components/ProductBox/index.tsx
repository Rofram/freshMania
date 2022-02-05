/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Styled from './styles'
import Image from 'next/image'
import getImageUrl from 'utils/getImageUrl'
import formatPrice from 'utils/format-price'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useRef } from 'react'
import api from 'services/api'
import { toast } from 'react-toastify'

export type ProductBoxProps = {
  id: string
  img: string
  name: string
  price: number
}

const ProductBox = ({ id, img, name, price }: ProductBoxProps) => {
  const productBoxRef = useRef<HTMLDivElement>(null)

  function handleEdit() {
    console.log('')
  }

  async function handleDelete(productId: string) {
    const response = await api.delete('/products', {
      params: {
        id: productId
      }
    })

    if (response.status === 200) {
      productBoxRef.current?.remove()
      toast('produto deletado com sucesso!', {
        type: 'success'
      })
    } else {
      toast('não foi possível deletar o produto, tente novamente mais tarde.', {
        type: 'error'
      })
    }
  }
  return (
    <Styled.Wrapper ref={productBoxRef}>
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
      <Styled.ProductOptions>
        <button onClick={() => handleDelete(id)}>
          <FaTrash size={20} />
        </button>
        <button>
          <FaEdit size={20} />
        </button>
      </Styled.ProductOptions>
    </Styled.Wrapper>
  )
}

export default ProductBox
