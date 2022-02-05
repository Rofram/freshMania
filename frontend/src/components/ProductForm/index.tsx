import { ChangeEvent } from 'react'
import Input from 'components/Input'
import UploadImage from 'components/UploadImage'
import * as Styled from './styles'
import { FaCheck, FaEraser } from 'react-icons/fa'

export type ProductFormProps = {
  imageChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleResetForm: () => void
  previewImage?: string
}

const ProductForm = ({
  imageChange,
  handleResetForm,
  previewImage
}: ProductFormProps) => (
  <Styled.Wrapper>
    <UploadImage
      name="image"
      onChange={imageChange}
      previewImage={previewImage}
    />
    <Styled.Content>
      <Input name="name" label="Nome do Produto" />
      <Input name="price" label="Preço" />
    </Styled.Content>
    <Styled.ButtonsContent>
      <button type="reset" onClick={handleResetForm}>
        <FaEraser size={20} />
      </button>
      <button type="submit">
        <FaCheck size={20} />
      </button>
    </Styled.ButtonsContent>
  </Styled.Wrapper>
)

export default ProductForm
