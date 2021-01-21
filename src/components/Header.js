import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #364051;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const HeaderTitle = styled.h1`
  color: white;
  margin: 0;
`;

const Header = () => (
  <HeaderWrapper>
    <div className="container">
      <HeaderTitle>Motorway Application</HeaderTitle>
    </div>
  </HeaderWrapper>
);

export default Header;
