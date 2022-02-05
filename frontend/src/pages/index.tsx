import { GetServerSideProps } from 'next'

import api from 'services/api'

import HomeTemplate, { HomeTemplateProps } from 'templates/Home'
// import HomeTemplateMock from 'templates/Home/mock'

export default function HomePage(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<HomeTemplateProps>('/products')

  return {
    props: data
  }
}
