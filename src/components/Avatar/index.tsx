import React from 'react'

import { Container } from './styles'

type Props = {
  url: string;
  title: string;
  size: 'small' | 'medium'
}

const Avatar: React.FC<Props> = ({ url, title, size }) => {
  return (
    <Container>
      <img src={url} alt={title} className={size} />
    </Container>
  );
}

export default Avatar