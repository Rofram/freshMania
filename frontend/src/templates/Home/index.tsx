/* eslint-disable react-hooks/exhaustive-deps */
import Header from 'components/Header'
import ProductBox, { ProductBoxProps } from 'components/ProductBox'
import * as Styled from './styles'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import ProductForm from 'components/ProductForm'
import getValidationErrors from 'utils/getValidationErrors'
import api from 'services/api'

export type HomeTemplateProps = {
  products: ProductBoxProps[]
}

type RegisterProductFormData = {
  name: string
  price: string
  image: File[]
}

const Home = ({ products }: HomeTemplateProps) => {
  const formRef = useRef<FormHandles>(null)
  const [previewImage, setPreviewImage] = useState<string>()
  const [productsList, setProductsList] = useState<ProductBoxProps[]>([])

  useEffect(() => {
    setProductsList(products)
  }, [])

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return
    }

    setPreviewImage(URL.createObjectURL(event.target.files[0]))
  }

  function handleResetForm() {
    setPreviewImage('')
    formRef.current?.setErrors({})
  }

  async function handleSubmit(data: RegisterProductFormData) {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome do produto não informado'),
        price: Yup.string().required('Preço do produto não informado')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      const formData = new FormData()

      formData.append('name', data.name)
      formData.append('price', data.price)
      formData.append('image', data.image[0])

      const response = await api.post('/products', formData)

      if (response.status == 201) {
        toast('produto cadastrado com sucesso!', {
          type: 'success'
        })
        setProductsList((oldState) => [...oldState, response.data])
      } else {
        throw new Error()
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)

        return
      }

      console.warn(err)

      toast('Erro no cadastro, verifique os dados e tente novamente', {
        type: 'error'
      })
    }
  }

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ProductForm
            handleResetForm={handleResetForm}
            imageChange={handleSelectImages}
            previewImage={previewImage}
          />
        </Form>
        <Styled.Section>
          {productsList.map((item) => (
            <ProductBox key={item.id} {...item} />
          ))}
        </Styled.Section>
      </Styled.Wrapper>
    </>
  )
}

export default Home
