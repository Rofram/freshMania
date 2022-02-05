import { ChangeEvent } from 'react'
import Input from 'components/Input'
import UploadImage from 'components/UploadImage'
import * as Styled from './styles'

export type ProductFormProps = {
  imageChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleResetForm: () => void
  previewImage?: string
  submitButtonLabel: string
}

const ProductForm = ({
  imageChange,
  handleResetForm,
  previewImage,
  submitButtonLabel
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
      <Styled.ButtonsContent>
        <button type="reset" onClick={handleResetForm}>
          limpar
        </button>
        <button type="submit">{submitButtonLabel}</button>
      </Styled.ButtonsContent>
    </Styled.Content>
  </Styled.Wrapper>
)

export default ProductForm
