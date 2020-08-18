import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      navigate(`/${search.toLowerCase().trim()}`);
    },
    [navigate, search],
  );

  return (
    <Container>
      <GithubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username or Repo..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
