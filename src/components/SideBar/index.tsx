import React from 'react'
import StickyBox from 'react-sticky-box'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles'

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                avartarUrl="https://pbs.twimg.com/profile_images/1410265044424835074/IzPGXGbY_200x200.jpg"
                name="Mario Souto - Dev Soutinho"
                nickname="@omariosouto"
              />,
              <FollowSuggestion avartarUrl="https://pbs.twimg.com/profile_images/921363991368208385/xNcMza7T_200x200.jpg" name="Roberta Arcoverde" nickname="@rla4" />,
              <FollowSuggestion
                avartarUrl="https://pbs.twimg.com/profile_images/1415288716415877121/zK7lC5Ns_200x200.jpg"
                name="Fernando Daciuk"
                nickname="@fdaciuk"
              />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
              <News title="Node.js, TypeScript, React, etc" comments="Começa as 7h no canal do @fdaciuk" />,
              <News title="Astro o novo framework front-end" comments="Para quem deseja conhecer um pouco mais sobre cola no canal da @glaucia_lemos86" />,
              <News title="Estudando mais sobre reactJs" comments="Clonando interface do Twitter" />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar
