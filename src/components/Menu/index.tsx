import React from 'react';
import { BiUserCircle, BiCog, BiNotification } from "react-icons/bi";

import{ Container } from './styles';

const Menu: React.FC = () => {
  return (
    <>
      <Container>
      <span>Fulano</span> <BiUserCircle size={25} />
      </Container>
      <BiNotification size={25} />
      <BiCog size={25} />
    </>
  );
}

export default Menu;