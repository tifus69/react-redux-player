import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Player } from 'video-react';
import { Button, Container } from 'reactstrap';
import { IconPause, IconArrow, ControlButtonsWrapper } from '../styled/style';

const PlayerItem = props => {
  let player = React.createRef();
  const url = useSelector(state => state.playerReducer.url);

  useEffect(() => {
    player.current.load();
  });

  const play = () => {
    player.current.play();
  };

  const pause = () => {
    player.current.pause();
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Player fluid ref={player} autoPlay ControlBar>
        <source src={url} />
      </Player>
      <ControlButtonsWrapper>
        <Button onClick={play} outline color="secondary" style={{ margin: 10 }}>
          <IconArrow />
        </Button>
        <Button onClick={pause} outline color="secondary" style={{ margin: 10 }}>
          <IconPause />
        </Button>
      </ControlButtonsWrapper>
    </Container>
  );
};

export default PlayerItem;
