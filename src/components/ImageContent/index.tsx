import React from 'react'

import { Container } from './styles'

type Props = {
  url: string
  title: string
}

const ImageContent: React.FC<Props> = ({ url, title }) => {
  return (
    <Container>
      <img src={url} alt={title} />
    </Container>
  )
}

export default ImageContent