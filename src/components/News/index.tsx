import React from 'react'

import { Container } from './styles'

type Props = {
  title: string
  comments: string
}

const News: React.FC<Props> = ({ title, comments }) => {
  return (
    <Container>
      <span>{title}</span>
      <strong>{comments}</strong>
    </Container>
  );
};

export default News
