import React from 'react'

import Avatar from '../Avatar'

import { Container, Info, FollowButton } from './styles'

type Props = {
  avartarUrl: string
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ avartarUrl, name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar url={avartarUrl} title={name} size="small" />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion
