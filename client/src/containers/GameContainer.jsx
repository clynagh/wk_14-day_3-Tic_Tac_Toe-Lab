import React from 'react';
import GameBoard from "../components/GameBoard"


class GameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        This is our game container.
          <GameBoard />
      </div>
      )
  }
}

export default GameContainer;





