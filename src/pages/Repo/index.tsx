import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcumb>
        <RepoIcon />

        <Link className="username" to="/raphabarreto">
          raphabarreto
        </Link>

        <span>/</span>

        <Link className="reponame" to="/raphabarreto/github-clone">
          github-clone
        </Link>
      </Breadcumb>

      <p>Contains all of my project code.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href="https://github.com/raphabarreto/github-clone">
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
