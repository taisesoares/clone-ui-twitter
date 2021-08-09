import React from 'react'

import Tweet from '../Tweet'

import { Container, Tab, Tweets } from './styles'

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet 
          isRetweets
          avatarUrl="https://pbs.twimg.com/profile_images/1410265044424835074/IzPGXGbY_200x200.jpg"
          name="Mario Souto - Dev Soutinho"
          userName="@omariosouto"
          date="2021-08-06T10:27:16Z"
          description="E pra fechar a sexta feira, vamo falar de automação que serve pra todo mundo!!!"
          imageContent="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faakhan.me%2Fstatic%2Fb9a7cd26df63570e756e05c8e28cd2a5%2Fdc61a%2F3-lintscript.png"
          comments={87}
          retweet={100}
          like={500}
        />,
        <Tweet 
          isRetweets
          avatarUrl="https://pbs.twimg.com/profile_images/1105327176151384065/KfAYb0T7_200x200.jpg"
          name="Claudia Lemos"
          userName="@glaucia_lemos86"
          date="2021-08-08T10:27:16Z"
          description="Boa pedida pra esse Domingo. E caso, daqui a 10 dias mais 4 novos vídeos de #TypeScript - Zero to Hero saindo do forno e no ponto!"
          imageContent="https://pbs.twimg.com/media/E8CVZ5bXsAYtxu5?format=jpg&name=small"
          comments={150}
          retweet={113}
          like={321}
        />,
        <Tweet 
          isRetweets
          avatarUrl="https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh_200x200.jpg"
          name="Rocketseat"
          userName="@rocketseat"
          date="2021-07-31T10:27:16Z"
          description="Mais uma semana começando com #CodeDrops Foguete"
          imageContent="https://pbs.twimg.com/media/E7yzII5XsAMjjRz?format=jpg&name=small"
          comments={110}
          retweet={236}
          like={182}
        />,
        <Tweet 
          isRetweets
          avatarUrl="https://pbs.twimg.com/profile_images/1415288716415877121/zK7lC5Ns_200x200.jpg"
          name="Fernando Daciuk"
          userName="@fdaciuk"
          date="2021-07-31T10:27:16Z"
          description="Informação mega importante pra galera que coda no WIndows: agora dá pra instalar o WSL com apenas um comando!"
          imageContent="https://pbs.twimg.com/card_img/1423749228510445568/gUgNb3ME?format=jpg&name=small"
          comments={10}
          retweet={26}
          like={82}
        />
      </Tweets>
    </Container>
  );
};

export default Feed
