import React from 'react';
import { Container, Row } from 'reactstrap';

import Card from './Card.component';
import cards from '../datas';

const CardList = () => {
  return (
    <Container>
      <Row style={{ justifyContent: 'center' }}>
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </Row>
    </Container>
  );
};
export default CardList;
