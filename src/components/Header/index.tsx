import React from 'react';
import Menu from '../Menu';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Menu />
    </Container>
  )
}

export default Header;