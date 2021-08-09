import React from 'react'

import Avatar from '../Avatar'
import Feed from '../Feed'

import {
  Container,
  Banner,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar url="https://pbs.twimg.com/profile_images/1415633935468482561/FQmUqVwF_200x200.jpg" title="Avatar Taise Soares" size="medium" />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Taise Soares</h1>
        <h2>@devtaisesoares</h2>

        <p>
          Developer at <a href="https://conube.com.br">@Conube</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 05 de julho de 1989
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>302 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage
