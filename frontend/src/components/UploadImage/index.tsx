import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useField } from '@unform/core'
import { FiUpload } from 'react-icons/fi'
import * as Styled from './styles'

export type UploadImageProps = {
  name: string
  previewImage?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UploadImage = ({ name, previewImage, onChange }: UploadImageProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputFileRef.current,
      path: 'files'
    })
  }, [fieldName, registerField])

  return (
    <Styled.Wrapper>
      <Styled.ImageContainer>
        {previewImage ? (
          <Image src={previewImage} layout="fill" objectFit="cover" />
        ) : (
          <Styled.Upload htmlFor={name}>
            <FiUpload size={30} color="#4a63e5" />
            <span>Upload Image</span>
          </Styled.Upload>
        )}
      </Styled.ImageContainer>
      <input
        id={name}
        name={name}
        ref={inputFileRef}
        defaultValue={defaultValue}
        type="file"
        onChange={onChange}
      />
    </Styled.Wrapper>
  )
}

export default UploadImage
