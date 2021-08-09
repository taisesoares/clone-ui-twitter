import React from 'react'
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

import ImageContent from '../ImageContent'
import Avatar from '../Avatar'

import {
  Container,
  Retweeted,
  RepostIcon,
  Body,
  Content,
  Header,
  Dot,
  Description,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles'

type Props = {
  avatarUrl: string
  isRetweets: boolean
  name: string
  userName: string
  date: string
  description: string
  imageContent: string
  comments: number
  retweet: number
  like: number
}

const Tweet: React.FC<Props> = ({ avatarUrl, isRetweets, name, userName, date, description, imageContent, comments, retweet, like }) => {
  return (
    <Container>
      {isRetweets && (
        <Retweeted>
          <RepostIcon />
          Você retweetou
        </Retweeted>
      )}

      <Body>
        <Avatar url={avatarUrl} title={name} size="small" />

        <Content>
          <Header>
            <strong>{name}</strong>
            <span>{userName}</span>
            <Dot />
            <time>{format(new Date(date), "'Dia' dd 'de' MMMM", { locale: pt })}</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>{description}</Description>

          <ImageContent url={imageContent} title={name} />

          <Icons>
            <Status>
              <CommentIcon />
              {comments}
            </Status>
            <Status>
              <RetweetIcon />
              {retweet}
            </Status>
            <Status>
              <LikeIcon />
              {like}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet
