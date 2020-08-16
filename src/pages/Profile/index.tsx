import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username="raphabarreto"
            name="Raphael Barreto"
            avatarUrl="https://avatars3.githubusercontent.com/u/6462941?s=460&v=4"
            followers={988}
            following={7}
            company="Rocketseat"
            location="São Paulo, Brazil"
            email="tnt.raphael@gmail.com"
            blog="https://raphabarreto.com.br/"
          />
        </LeftSide>
        <RightSide />
      </Main>
    </Container>
  );
};

export default Profile;
